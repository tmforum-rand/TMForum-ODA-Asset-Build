import yaml
import json
import zipfile
import shutil
from pathlib import Path


def load_v1beta1_component(component_path: Path):
    for spec in component_path.glob("*.yaml"):
        with spec.open("r") as f:
            yield yaml.safe_load(f)

    for spec in component_path.glob("*.yml"):
        with spec.open("r") as f:
            yield yaml.safe_load(f)



def generate_directory_tree(source, spec_name):
    target_spec_dir = source / spec_name
    spec_directory = target_spec_dir / "specification"
    spec_implementation = target_spec_dir / "component-reference-implementation"
    component_ctk = target_spec_dir / "component-ctk"
    component_ctk_src = component_ctk / "src"
    component_ctk_api_resources = component_ctk / "resources"
    component_ctk_api_resources_ctks = component_ctk_api_resources / "api-ctks"
    component_ctk_api_resources_components = component_ctk_api_resources / "components"
    component_implementation_microservice = spec_implementation / "ri-microservices"
    component_implementation_manifests = spec_implementation / "manifests"

    return [
        target_spec_dir, 
        spec_directory, 
        spec_implementation, 
        component_ctk, 
        component_ctk_src, 
        component_ctk_api_resources, 
        component_ctk_api_resources_ctks, 
        component_ctk_api_resources_components, 
        component_implementation_microservice, 
        component_implementation_manifests
    ]


def get_spec_file_name(spec):
    spec_name = spec["metadata"]["labels"]["oda.tmforum.org/componentName"]
    return f"{spec_name}-v1beta1.yaml"

def generate_component_index_metadata(component_spec):
    return {
        "version": component_spec["spec"]["version"],
        "id": component_spec["metadata"]["labels"]["oda.tmforum.org/componentName"][:4],
        "apis": [{
            "id": api["id"],
            "specification": api["specification"],
            "version": api["version"],
        } for api in component_spec["coreFunction"]["exposedAPIs"]],
    }

def main():
    SPEC = Path("../../../TMForum-ODA-Component-Specification/1Beta1")
    BUILD = Path("../../components")
    CTK_REPO = Path("../../../TMForum_ODA_Component_Conformance/oda-ctk")
    CTKS = Path("../ctks")
    component_specs = load_v1beta1_component(SPEC)
    component_index = {}
    
    for spec in component_specs:
        spec_name = spec["metadata"]["labels"]["oda.tmforum.org/componentName"]
        print("Processing: ", spec_name)
        for dir in generate_directory_tree(BUILD, spec_name):
            dir.mkdir(parents=True, exist_ok=True)

        with Path(f"{BUILD}/{spec_name}/specification/{get_spec_file_name(spec)}").open("w") as f:
            yaml.safe_dump(spec, f)

        with Path(f"{BUILD}/{spec_name}/component-ctk/resources/components/{get_spec_file_name(spec)}").open("w") as f:
            yaml.safe_dump(spec, f)

        if spec_name in component_index:
            print("Found repeated component name: ", spec_name)
        component_index[spec_name] = generate_component_index_metadata(spec)

        for api in component_index[spec_name]["apis"]:
            ignore_apis = ["TMF688", "TMF675", "TMF628"]
            if api["id"] in ignore_apis:
                continue
            print("Processing API: ", api["id"])
            ctk = list(CTKS.glob(f"{api['id']}*.zip"))[0]
            with zipfile.ZipFile(ctk, "r") as zip_ref:
                zip_ref.extractall(f"{BUILD}/{spec_name}/component-ctk/resources/api-ctks/")

        #shutil.copytree(f"{CTK_REPO}/src", f"{BUILD}/{spec_name}/component-ctk/src", dirs_exist_ok=True)


    with Path(f"{BUILD}/index.json").open("w+") as f:
        json.dump(component_index, f, indent=4)



        #print(spec_name)

    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main())