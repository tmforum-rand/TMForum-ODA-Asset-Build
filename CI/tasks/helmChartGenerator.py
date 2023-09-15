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

PARTY_ROLE_SPEC = "https://tmf-open-api-table-documents.s3.eu-west-1.amazonaws.com/OpenApiTable/4.0.0/swagger/TMF669-PartyRole-v4.0.0.swagger.json"
BASE_SPEC_PATH = "https://tmforum-rand.github.io/TMForum-ODA-Asset-Build/swaggers"


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
        image=image,
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


def create_svc(name, type, target_port=8080, port=8080):
    return Service(
        metadata=get_metadata(name),
        spec=ServiceSpec(
            selector=create_selector(name),
            ports=[ServicePort(
                port=port,
                target_port=target_port,
                name="{{.Release.Name}}-" + name[:6])
            ],
            type=type
        )
    )


def create_api_deployment(api):
    container_name = "{{.Release.Name}}" + api["name"]
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
    Container_name = "{{.Release.Name}}-mongodb"
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

def extract_apis(apis):
    swaggers = Path("../swaggers")
    api_objects = []
    for api in apis:
        print("Processing API: ", api["id"])

        ignore_apis = ["TMF688", "TMF675", "TMF628"]
        if api["id"] in ignore_apis:
            continue

        if "version" not in api:
            api["version"] = "v4"

        swagger_file = list(swaggers.glob(f"{api['id']}*.json"))[0]
        api_obj = {
            "specification": f"{BASE_SPEC_PATH}/{swagger_file.name}",
            "implementation": api["implementation"],
            "apitype": "openapi",
            "path": api["path"],
            "port": 8080,
            "developerUI": api["developerUI"],
            "name": api["name"],
            "version": api["version"],
        }
        api_objects.append(api_obj)
    return api_objects


def generate_resources(spec):
    resources = []
    component_resource = Component(
        api_version="oda.tmforum.org/v1beta1",
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
        resources.append(create_api_deployment(api))
        # resources.append(create_svc(api))

    resources.append(component_resource)
    resources.append(create_mongo_deployment())
    resources.append(create_pvc("mongodb", 5))
    return resources


def convert_spec(spec):
    del spec["spec"]["type"]
    del spec["spec"]["version"]
    spec["spec"]["maintainers"].append({
        "name": "Victor Mari Rodriguez",
        "email": "vrodriguez@tmforum.org"
    })
    return {
        "spec": {
            "type": "{{.Values.component.type}}",
            "version": "{{.Values.component.version}}",
            "selector": {
                "matchLabels": {
                    "oda.tmforum.org/componentName": "{{.Release.Name}}-{{.Values.component.type}}"
                }
            },
            "componentKinds": [
                {
                    "group": "core",
                    "kind": "Service",
                },
                {
                    "group": "core",
                    "kind": "PersistentVolumeClaim",
                },
                {
                    "group": "apps",
                    "kind": "Deployment",
                }
            ],
            "coreFunction": {
                "exposedAPIs": extract_apis(spec["coreFunction"]["exposedAPIs"]),
                "dependentAPIs": [
                    {
                        "name": "party",
                        "specification": PARTY_ROLE_SPEC
                    }
                ],
            },
            "eventNotification": {
                "publishedEvents": [],
                "subscribedEvents": [],
            },
            "management": [],
            "security": {
                "controllerRole": "Admin",
                "securitySchemes": {
                    "bearerAuth": {
                        "type": "http",
                        "scheme": "bearer",
                        "bearerFormat": "JWT",
                    }
                },
                "partyRole": {
                    "specification": PARTY_ROLE_SPEC,
                    "implementation": "{{.Release.Name}}-partyroleapi",
                    "apitype": "openapi",
                    "path": "/{{.Release.Name}}-productcatalog/tmf-api/partyRoleManagement/v4",
                    "developerUI": "/{{.Release.Name}}-productcatalog/tmf-api/partyRoleManagement/v4/docs",
                    "port": 8080,
                }
            },
            **spec["spec"],
        },
    }


def main(component_yaml, output_dir):
    component_resource = convert_spec(component_yaml)
    builder = ChartBuilder(
        ChartInfo(api_version="3.2.4", name="component_helmchart",
                  version="0.1.0", app_version="v1beta1"),
        generate_resources(component_resource),
        output_dir,
    )
    generated_dir = builder.generate_chart()
    return 0


if __name__ == "__main__":
    import sys
    import yaml
    from pathlib import Path
    test_component_yaml = Path(
        "../components/TMFC001-productcatalogManagement/specification/TMFC001-productcatalogManagement-v1beta1.yaml")
    test_output_dir = Path(
        "../components/TMFC001-productcatalogManagement/component-reference-implementation")

    with test_component_yaml.open("r") as f:
        comp = yaml.safe_load(f)
    sys.exit(main(comp, test_output_dir))
