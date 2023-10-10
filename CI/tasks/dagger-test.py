import sys
import os
import anyio
import dagger
import yaml
from pathlib import Path

OAS_GEN_IMG = "openapitools/openapi-generator-cli:latest"
OAS_GEN_DIR = Path(__file__).parents[1] / "ri-generator" 
COMPONENT = Path(os.getenv("COMPONENT_FILE"))


def get_oas_gen_args(oas, output):
    resources = "/resources"
    return [
        "generate",
        "-i", oas,
        "-g", "nodejs-express-server",
        "-o", output,
        "-c",  f"{resources}/ri-generator-config.yaml",
        "-t", f"{resources}/templates",
    ]


def get_component_swagger_links():
    with COMPONENT.open("r") as f:
        spec = yaml.safe_load(f)["spec"]
    for function in spec["coreFunction"]["exposedAPIs"]:
        yield function["specification"]


async def main():
    config = dagger.Config(log_output=sys.stdout)
    async with dagger.Connection(config) as client:
        api = (
            client.container()
                .from_(OAS_GEN_IMG)
                .with_directory(
                    "/resources",
                    client.host().directory(OAS_GEN_DIR.as_posix())
                )
        )
        for oas in get_component_swagger_links():
            try:
                out = await api.with_exec(get_oas_gen_args(oas, "/output"))
                #print(out.stdout())
            except Exception as e:
                #print(e)
                print(type(e))

            

anyio.run(main)