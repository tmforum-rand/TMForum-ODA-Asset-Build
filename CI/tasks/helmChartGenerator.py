from typing import Optional
from avionix import ChartBuilder, ChartInfo, ObjectMeta
from avionix.kube.apps import Deployment, DeploymentSpec, PodTemplateSpec
from avionix.kube.core import Container, ContainerPort, EnvVar, LabelSelector, PodSpec
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
    resources.append(component_resource)
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
            "management": [{
                "name": "metrics",
                "apitype": "prometheus",
                "implementation": "{{.Release.Name}}-{{.Values.component.type}}-sm",
                "path": "/{{.Release.Name}}-{{.Values.component.type}}/metrics",
                "port": 4000,
            }],
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