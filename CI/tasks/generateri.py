import json
import yaml
import subprocess
from pathlib import Path


COMPONENTS = Path(__file__).parent.parent.parent / "components"
RI_GENERATOR = Path(__file__).parent.parent / "ri-generator" 

class APIGenerator:
    def __init__(self) -> None:
        self.jar = RI_GENERATOR / "openapi-generator-cli-6.2.1.jar"
        self.config = RI_GENERATOR / "ri-generator-config.yaml"
        self.templates = RI_GENERATOR / "templates"

    def generateAPI(self, swagger, output, language):
        command = [
            "java", "-jar", self.jar,
            "generate", "-i", swagger,
            "-g", language,
            "-o", output,
            "-c", self.config,
            "-t", self.templates,
        ]

        try:
            subprocess.run(command, check=True)
        except subprocess.CalledProcessError as e:
            print(e)

def glob_component_specs(components):
    for component in components.glob("*/specification/**/TMFC*.yaml"):
        yield component


def load_component_spec(component):
    with component.open() as f:
        spec = yaml.safe_load(f)
        return spec
    
def get_component_root(component):
    return component.parent.parent

def main():
    print("Generating APIs")
    print("Found components", COMPONENTS.exists())
    print("Found oas cli", RI_GENERATOR.exists())


    api_generator = APIGenerator()
    for comp in glob_component_specs(COMPONENTS):
        root = get_component_root(comp)
        component = load_component_spec(comp)
        for api in component["coreFunction"]["exposedAPIs"]:
            output = root / f"component-reference-implementation/ri-microservice/{api['id']}-{api['name']}"
            swagger = api["specification"]
            api_generator.generateAPI(swagger, output, "nodejs-express-server")
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(main())