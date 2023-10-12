import os
import yaml
from pathlib import Path
from avionix import ChartBuilder, ChartInfo, ObjectMeta
from avionix.kube.apps import Deployment, DeploymentSpec, PodTemplateSpec
from avionix.kube.core import (
    Container,
    ContainerPort,
    EnvVar,
    LabelSelector,
    PodSpec,
    VolumeMount,
    Volume,
    PersistentVolumeClaim,
    PersistentVolumeClaimSpec,
    Probe,
    Service,
    ServicePort,
    ServiceSpec,
)
from avionix.kube.base_objects import KubernetesBaseObject



RELEASE_REPO = Path(__file__).parents[3] / "TMForum-ODA-Ready-for-publication"
HELM_REPO = Path(__file__).parents[3] / "oda-helm-charts" / "charts"
HELM_REPO.mkdir(parents=True, exist_ok=True)

class Component(KubernetesBaseObject):
    def __init__(
            self,
            api_version: str | None = None,
            kind: str | None = None,
            metadata=None,
            spec=None
    ):
        super().__init__(api_version, kind, metadata)
        self.spec = spec


def get_metadata(name, **kwargs):
    return ObjectMeta(
        name="{{.Release.Name}}-" + name,
        labels={
            "oda.tmforum.org/componentName": "{{.Release.Name}}-{{.Values.component.name}}",
            **kwargs
        }
    )


def get_labels(name, version):
    return {
        "impl": "{{.Release.Name}}-" + name,
        "app": "{{.Release.Name}}-{{.Values.component.name}}",
        "version": version
    }


def create_selector(name):
    return LabelSelector(
        match_labels={
            "impl": f"{{{{.Release.Name}}}}-{name}"
        }
    )


def create_port(port, name):
    return ContainerPort(
        container_port=port,
        name="{{.Release.Name}}-" + name[:7]
    )


def create_volume_mount(name, mount_path):
    return VolumeMount(
        name=f"{{{{.Release.Name}}}}-{name}-pv-storage",
        mount_path=mount_path  # "/data/db"
    )


def create_volume(name, claim_name):
    return Volume(
        name="{{.Release.Name}}-" + f"{name}-pv-storage",
        persistent_volume_claim={
            "claim_name": "{{.Release.Name}}-" + f"{claim_name}-pv-claim"
        }
    )


def create_startup_probe(path, port):
    return Probe(
        http_get={
            "path": path,
            "port": port,
        },
        initial_delay_seconds=10,
        period_seconds=5,
        failure_threshold=30
    )


def create_container(name, image, **kwargs):
    return Container(
        name=f"{{{{.Release.Name}}}}-{name}",
        image=image.lower(),
        env=[
            EnvVar(name="RELEASE_NAME", value="{{.Release.Name}}"),
            EnvVar(name="COMPONENT_NAME",
                   value="{{.Release.Name}}-{{.Values.component.name}}"),
        ],
        **kwargs
    )


def create_pvc(name, storage):
    return PersistentVolumeClaim(
        metadata=get_metadata(f"{name}-pv-claim"),
        spec=PersistentVolumeClaimSpec(
            access_modes=["ReadWriteOnce"],
            resources={"requests": {"storage": f"{storage}Gi"}},
        )
    )


def create_pod_template_spec(labels, containers=[], volumes=[]):
    return PodTemplateSpec(
        metadata=ObjectMeta(
            labels=labels
        ),
        spec=PodSpec(
            containers=containers,
            volumes=volumes,
        ),
    )


def create_deployment(name, template, replicas=1):
    return Deployment(
        metadata=get_metadata(name),
        spec=DeploymentSpec(
            replicas=replicas,
            template=template,
            selector=create_selector(name)
        )
    )



def create_api_deployment(api):
    container_name = api["name"]
    image_name = "tmforumorg/" + api["name"] + ":latest"

    container = create_container(
        container_name, 
        image_name,
        image_pull_policy="Always",
        ports=[create_port(api["port"], api["name"])],
        startup_probe=create_startup_probe(
            api["name"], api["port"]),
    )

    pod_template_spec = create_pod_template_spec(
        get_labels(api["name"], api["version"]),
        containers=[container],
    )

    deployment = create_deployment(
        api["name"],
        pod_template_spec,
    )

    return deployment


def create_mongo_deployment():
    Container_name = "mongodb"
    image_name = "mongo:5.0.1"

    container = create_container(
        Container_name,
        image_name,
        image_pull_policy="Always",
        ports=[create_port(27017, "mongodb")],
        volume_mounts=[create_volume_mount("mongodb", "/data/db")],
    )

    pod_template_spec = create_pod_template_spec(
        get_labels("mongodb", "mongo-5.0.1"),
        containers=[container],
        volumes=[create_volume("mongodb", "mongodb")],
    )

    deployment = create_deployment(
        "mongodb",
        pod_template_spec,
    )

    return deployment

def create_svc(deployment):
    deployment_port = deployment.spec.template.spec.containers[0].ports[0]
    port = ServicePort(
        port=deployment_port.containerPort,
        target_port=deployment_port.name,
        name=f"http-{deployment_port.name}"
    )
    return Service(
        metadata=get_metadata(deployment.metadata.name),
        spec=ServiceSpec(
            ports=[port],
            selector=create_selector(deployment.metadata.name)
        )
    )

def process_component_spec(spec):
    functions = ["coreFunction", "securityFunction"]
    api_groups = ["exposedAPIs", "dependentAPIs"]
    for function in functions:
        for api_group in api_groups:
            for api in spec[function].get(api_group, []):
                if "resources" in api:                
                    del api["resources"]

                if "resource" in api:
                    del api["resource"]

def generate_resources(spec):
    resources = []

    process_component_spec(spec["spec"])
    component_resource = Component(
        api_version=spec["apiVersion"],
        kind="component",
        metadata=ObjectMeta(
            name="{.Release.Name}}-{{.Values.component.name}}",
            labels={
                "oda.tmforum.org/componentName": "{{.Release.Name}}-{{.Values.component.name}}",
            }
        ),
        spec=spec["spec"],
    )
    for api in spec["spec"]["coreFunction"]["exposedAPIs"]:
        deployment = create_api_deployment(api)
        resources.append(deployment)
        svc = create_svc(deployment)
        resources.append(svc)

    resources.append(component_resource)
    resources.append(create_mongo_deployment())
    resources.append(create_pvc("mongodb", 5))
    return resources


def main(args):
    component_yaml = RELEASE_REPO / args[1]
    output_dir = HELM_REPO / component_yaml.name[:7]
    with component_yaml.open("r") as f:
        comp = yaml.safe_load(f)

    builder = ChartBuilder(
        ChartInfo(
            api_version="3.2.4", 
            name="component_helmchart",
            version="0.1.0", 
            app_version="v1beta1"
        ),
        generate_resources(comp),
        str(output_dir),
    )
    generated_dir = builder.generate_chart()
    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main(sys.argv))
