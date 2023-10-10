import yaml
from pathlib import Path


ris = Path(__file__).parents[2] / "artifacts" / "ri-microservices"
REPO = Path(__file__).parents[3] / "TMForum-ODA-Asset-Build"

def compose_service(api: Path):
    return {
        "build": api.relative_to(REPO).as_posix(),
        "image": f"tmforumorg/{api.name[:6].lower()}-reference-implementation:latest-v4.0.0",
    }

def get_compose_file(apis):
    return {
        "version": "3.9",
        "services": {api.name[:6].lower(): compose_service(api) for api in apis},
    }

def main():
    print(ris.exists())
    apis = [api for api in ris.glob("*") if api.is_dir()]
    compose_file = get_compose_file(apis)
    with open("docker-compose.yml", "w+") as file:
        yaml.dump(compose_file, file, Dumper=yaml.Dumper, default_flow_style=False)
    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main())
