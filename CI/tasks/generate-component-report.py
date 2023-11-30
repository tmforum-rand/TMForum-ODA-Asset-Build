from pathlib import Path

import json
import yaml
import os

COMPONENTS = Path(__file__).parents[3] / "TMForum-ODA-Ready-for-publication" / "specifications"
OUTPUT = Path(__file__).parents[2] / "report.json"

def get_components():
    for component in COMPONENTS.glob("TMFC*/*.yaml"):
        with component.open("r") as f:
            print("Loading", component)
            yield yaml.safe_load(f)

def main():
    component_report = []
    for component in get_components():
        component_report.append({
            "id": component["spec"]["id"],
            "assets": {
                "spec": {},
                "ri": {},
                "ctk": {},
            },
            "status": [
                "Implementation",
                "Packaging",
                "Certified",
            ]
        })

    with OUTPUT.open("w+") as f:
        json.dump(component_report, f, indent=2)
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(main())

