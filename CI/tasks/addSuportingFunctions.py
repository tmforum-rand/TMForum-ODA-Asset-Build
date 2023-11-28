import yaml
from pathlib import Path

ODA_CANVAS_REPO = Path(__file__).parents[3] / "TMForum-ODA-Canvas-Specification"
RELEASE_REPO = Path(__file__).parents[3] / "TMForum-ODA-Ready-for-publication" / "specifications"
SPECS_REPO = Path(__file__).parents[3] / "TMForum-ODA-Component-Specification" / "specifications"

print("Specs folder exists: ", SPECS_REPO.exists())
print("Output folder exists: ", RELEASE_REPO.exists())
print("Functions folder exists: ", ODA_CANVAS_REPO.exists())


def get_functions():
    functions_folder = Path(ODA_CANVAS_REPO) / "src" / "supporting-functions"
    for function_file in functions_folder.glob("*.yaml"):
        with function_file.open() as f:
            yield yaml.safe_load(f)

def get_specifications():
    for spec_file in SPECS_REPO.glob("TMFC*/**/*.yaml"):
        with spec_file.open() as f:
            yield yaml.safe_load(f), spec_file

def add_supporting_functions(spec, spec_path, functions):
    print("Adding supporting functions to ", spec_path)
    function_names = ["managementFunction", "securityFunction"]
    for name in function_names:
        spec["spec"][name] = functions[name]

    OUTPUT_FOLDER = RELEASE_REPO / spec_path.parent.name
    OUTPUT_FOLDER.mkdir(parents=True, exist_ok=True)
    with (OUTPUT_FOLDER / spec_path.name).open("w+") as f:
        yaml.safe_dump(spec, f)

def main():
    for function in get_functions():
        for spec, spec_path in get_specifications():
            add_supporting_functions(spec, spec_path, function)
    return 0


if __name__ == '__main__':
    import sys
    sys.exit(main())