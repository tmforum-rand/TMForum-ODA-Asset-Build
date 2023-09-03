from typing import Optional
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



def get_metadata(name):
    return ObjectMeta(
        name="{{.Release.Name}}" + name,
        labels={"oda.tmforum.org/componentName": "{{.Release.Name}}-{{.Values.component.name}}"}
    )


mongo_container = Container(
    name="{{.Release.Name}}-mongodb",
    image="mongo:5.0.1",
    ports=[ContainerPort(container_port=27017, name="{{.Release.Name}}-mongodb")],
    volume_mounts=[
        VolumeMount(
            name="{{.Release.Name}}-mongodb-pv-storage",
            mount_path="/data/db"
        )
    ],
)
mongo_volume = Volume(
    name="{{.Release.Name}}-mongodb-pv-storage",
    persistent_volume_claim={"claim_name": "{{.Release.Name}}-mongodb-pv-claim"}
)
MONGO_DEPLOYMENT = Deployment(
    metadata=get_metadata("-mongodb"),
    spec=DeploymentSpec(
        replicas=1, 
        selector=LabelSelector(
            match_labels={
                "impl": "{{.Release.Name}}-mongodb"
            }
        ),
        template=PodTemplateSpec(
            metadata=ObjectMeta(
                labels={
                    "impl": "{{.Release.Name}}-mongodb",
                    "app": "{{.Release.Name}}-{{.Values.component.name}}",
                    "version": "mongo-latest"
                }
            ),
            spec=PodSpec(
                containers=[mongo_container], 
                volumes=[mongo_volume]
            )
        )
    )
)
MONGO_PVC = PersistentVolumeClaim(
    metadata=get_metadata("-mongodb-pv-claim"),
    spec=PersistentVolumeClaimSpec(
        access_modes=["ReadWriteOnce"],
        resources={"requests": {"storage": "3Gi"}},
    )
)


def create_api_deployment(api):
    pod_container = Container(
        name="{{.Release.Name}}" + api["name"],
        image="tmforumorg/" + api["name"] + ":latest",
        env=[
            EnvVar(name="RELEASE_NAME", value="{{.Release.Name}}"),
            EnvVar(name="COMPONENT_NAME", value="{{.Release.Name}}-{{.Values.component.name}}"),
        ],
        image_pull_policy="Always",
        ports=[ContainerPort(container_port=api["port"], name="{{.Release.Name}}-" + api["name"][:7])],
        startup_probe=Probe(
            http_get={
                "path": api["path"],
                "port": api["port"],
            },
            initial_delay_seconds=10,
            period_seconds=5,
            failure_threshold=30
        )
    )
    return Deployment(
        metadata=get_metadata(api["name"]),
        spec=DeploymentSpec(
            replicas=1,
            selector=LabelSelector(
                match_labels={
                    "impl": "{{.Release.Name}}" + api["name"]
                }
            ),
            template=PodTemplateSpec(
                metadata=ObjectMeta(
                    labels={
                        "impl": "{{.Release.Name}}" + api["name"],
                        "app": "{{.Release.Name}}-{{.Values.component.name}}",
                        "version": f"api-ri-{api['name']}-latest"
                    }
                ),
                spec=PodSpec(
                    containers=[pod_container]
                )
            )

        )
    )

def create_api_service(api):
    pass

def extract_apis(apis):
    swaggers = Path("../swaggers")
    api_objects = []
    for api in apis:
        print("Processing API: ", api["id"])

        ignore_apis = ["TMF688", "TMF675", "TMF628"]
        if api["id"] in ignore_apis:
            continue

        swagger_file = list(swaggers.glob(f"{api['id']}*.json"))[0]
        api_obj = {
            "specification" : f"{BASE_SPEC_PATH}/{swagger_file.name}",
            "implementation": api["implementation"],
            "apitype": "openapi",
            "path": api["path"],
            "port": 8080,
            "developerUI": api["developerUI"],
            "name": api["name"],
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
        #resources.append(create_api_service(api))

    resources.append(component_resource)
    resources.append(MONGO_DEPLOYMENT)
    resources.append(MONGO_PVC)
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
        ChartInfo(api_version="3.2.4", name="component_helmchart", version="0.1.0", app_version="v1beta1"),
        generate_resources(component_resource),
        output_dir,
    )
    generated_dir = builder.generate_chart()
    return 0


if __name__ == "__main__":
    import sys
    import yaml
    from pathlib import Path
    test_component_yaml = Path("../components/TMFC001-productcatalogManagement/specification/TMFC001-productcatalogManagement-v1beta1.yaml")
    test_output_dir = Path("../components/TMFC001-productcatalogManagement/component-reference-implementation")
    
    with test_component_yaml.open("r") as f:
        comp = yaml.safe_load(f)
    sys.exit(main(comp, test_output_dir))