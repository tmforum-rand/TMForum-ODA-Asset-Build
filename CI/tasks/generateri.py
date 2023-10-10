import json
import yaml
import subprocess
from pathlib import Path


PUBLICATION_REPO = Path(__file__).parents[3] / "TMForum-ODA-Ready-for-publication"
RI_GENERATOR = Path(__file__).parents[1] / "ri-generator" 
ARTIFACTS = Path(__file__).parents[2] / "artifacts"


class APIGenerator:
    def __init__(self) -> None:
        self.jar = RI_GENERATOR / "openapi-generator-cli-6.2.1.jar"
        self.config = RI_GENERATOR / "ri-generator-config.yaml"
        self.templates = RI_GENERATOR / "templates"

    def generateAPI(self, swagger, output, language):
        command = [
            "java", "-jar", str(self.jar),
            "generate", "-i", swagger,
            "-g", language,
            "-o", str(output),
            "-c", str(self.config),
            "-t", str(self.templates),
        ]

        try:
            cmd_output = subprocess.run(command, check=True, capture_output=True, text=True)
            return {
                "command": " ".join(command),
                "stdout": cmd_output.stdout,
                "stderr": cmd_output.stderr,
                "exitCode": cmd_output.returncode,
            }
        except subprocess.CalledProcessError as e:
            #print(e)
            output = {
                "command": " ".join(command),
                "stdout": "",
                "stderr": "",
                "exitCode": e.returncode,
            }
            if e.output:
                output["stdout"] = e.output
            if e.stderr:
                output["stderr"] = e.stderr
            return output
                

def glob_component_specs(components):
    for component in components.glob("*/specification/**/TMFC*.yaml"):
        yield component


def load_component_spec(component):
    with (PUBLICATION_REPO / component).open() as f:
        spec = yaml.safe_load(f)
        return spec
    


def main(args):
    COMPONENT = Path(args[1])
    ARTIFACTS.mkdir(parents=True, exist_ok=True)

    print("Generating APIs")
    print("Found oas cli", RI_GENERATOR.exists())
    print("Found component", (PUBLICATION_REPO / COMPONENT).exists())


    api_generator = APIGenerator()
    component = load_component_spec(COMPONENT)
    for api in component["spec"]["coreFunction"]["exposedAPIs"]:
        output = ARTIFACTS /f"ri-microservices/{api['id']}-{api['name']}"
        swagger = api["specification"]
        output = api_generator.generateAPI(swagger, output, "nodejs-express-server")

        generation_output = ARTIFACTS / "generation-output" / f"{api['id']}-{api['name']}"
        generation_output.mkdir(parents=True, exist_ok=True)

        with (generation_output / "command.txt").open("w+") as f:
            f.write(output["command"])

        with (generation_output / "stdout.txt").open("w+") as f:
            f.write(output["stdout"])

        with (generation_output / "stderr.txt").open("w+") as f:
            f.write(output["stderr"])

    return 0

if __name__ == "__main__":
    import sys
    sys.exit(main(sys.argv))