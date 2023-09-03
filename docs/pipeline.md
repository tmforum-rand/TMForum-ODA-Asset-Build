# Stages
## Stage 1
    - Notify argo cd of repo changes
## Stages 2
    - Run static tests on components
## Stage 3
    - Use argocd rest api to check that every component has been deployed and is syncronized
## Stage 4
    - Run dynamic tests against deployed components