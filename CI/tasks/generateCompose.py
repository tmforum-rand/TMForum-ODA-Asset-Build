import yaml
from pathlib import Path


docker_file_content = """
FROM alpine:3.12.0
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN apk add --update nodejs npm

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

ENV MONGO_URL=mongodb://mongo:27017/tmf

EXPOSE 8080
CMD [ "node", "index.js" ]
"""


ris = Path("../TMForum-ODA-Asset-Build/reference-implementations")

def compose_service(api: "Path"):
    docker_file = api / "Dockerfile"
    if not docker_file.exists():
        print(f"Warning: {docker_file} does not exist")
        with open(docker_file, "w+") as file:
            file.write(docker_file_content)
    return {
        "build": str(api),
        "image": f"tmforum/{api.name[:6].lower()}-reference-implementation:latest-v4.0.0",
    }

def get_compose_file(apis):
    return {
        "version": "3.9",
        "services": {api.name[:6].lower(): compose_service(api) for api in apis},
    }

def main():
    apis = [api for api in ris.glob("*")]
    compose_file = get_compose_file(apis)
    with open("docker-compose.yml", "w+") as file:
        yaml.dump(compose_file, file, Dumper=yaml.Dumper, default_flow_style=False)
    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main())
