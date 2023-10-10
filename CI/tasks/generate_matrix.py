import json
from pathlib import Path

RELEASE_REPO = Path(__file__).parents[3] / "TMForum-ODA-Ready-for-publication"


def glob_specs():
    for spec in RELEASE_REPO.glob("specifications/TMFC*-*/TMFC*-*.yaml"):
        yield str(spec.relative_to(RELEASE_REPO))

def main():
    specs = list(glob_specs())
    output = json.dumps(specs)
    print("spec=" + output)
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(main())
