import yaml
import requests
from pathlib import Path

COMPONENT_REPO = Path(__file__).parents[3] / "TMForum-ODA-Component-Specification" / "specifications"
GH_PAGES = "https://tmforum-rand.github.io/TMForum-ODA-Asset-Build/swaggers"
FUNCTIONS = ["coreFunction"]


def load_components():
    for file in COMPONENT_REPO.glob("TMFC*-*/TMFC*-*.yaml"):
        with open(file, 'r') as f:
            yield yaml.load(f, Loader=yaml.SafeLoader), file

def test_url(url):
    try:
        req = requests.get(url)
        req.raise_for_status()
    except Exception as e:
        print(f"Failed to fetch", e)
        return False


def replace_oas_urls(component):
    for function in FUNCTIONS:
        for api in component["spec"][function]["exposedAPIs"]:
            file_name = api["specification"].split("/")[-1]
            api["specification"] = f"{GH_PAGES}/{file_name}"
            test_url(api["specification"])


def main():
    for component, file in load_components():
        try:
            replace_oas_urls(component)
            with file.open("w") as f:
                yaml.dump(component, f, default_flow_style=False)
        except Exception as e:
            print(f"Failed to process{file.name}", e)
    return 0

if __name__ == '__main__':
    import sys
    sys.exit(main())