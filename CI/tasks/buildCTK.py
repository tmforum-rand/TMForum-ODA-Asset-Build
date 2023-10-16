import yaml
import shutil
import zipfile
from pathlib import Path

COMPONENT_REPO = Path(__file__).parents[3] / "TMForum-ODA-Ready-for-publication"
CONFORMANCE_REPO = Path(__file__).parents[3] / "TMForum_ODA_Component_Conformance"
ARTIFACTS = Path(__file__).parents[2] / "artifacts"
CTKS = Path(__file__).parents[1] / "ctks"

ignore_apis = ["TMF688"]

def load_component(component: Path):
    with component.open("r") as f:
        return yaml.safe_load(f)


def iter_exposed_apis(component):
    for api in component["spec"]["coreFunction"]["exposedAPIs"]:
        if api["id"] in ignore_apis:
            continue
        else:
            yield api

def extract_ctk(api):
    ctk_resources = ARTIFACTS / "oda-ctk" / "resources" / "api-ctk"
    ctk_zip = list(CTKS.glob(f"{api}-*.zip"))[0]
    print(f"Copying {ctk_zip} to {ctk_resources}")
    with zipfile.ZipFile(ctk_zip, "r") as zip_ref:
        zip_ref.extractall(ctk_resources)

def copy_ctk_files():
    oda_ctk = CONFORMANCE_REPO / "oda-ctk"
    shutil.copytree(oda_ctk, ARTIFACTS / "oda-ctk", dirs_exist_ok=True)


def main(args):
    COMPONENT = COMPONENT_REPO / args[1]
    component = load_component(COMPONENT)
    print(f"Loading component from {COMPONENT}")
    copy_ctk_files()
    for api in iter_exposed_apis(component):
        print(f"::group::Copying CTK for {api['id']}-{api['name']}")
        extract_ctk(api['id'])
        print(f"::endgroup::")
    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main(sys.argv))