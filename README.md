# sfdx-template (WIP)

- sfdx
- webpack 3
- React
- Lightning Design System
- Mocha
- [Lightning Testing Service (LTS)](https://github.com/forcedotcom/LightningTestingService)

## Dev

```
$ npm run start
```

## Test

## Deploy to Scratch Org

```
$ sfdx force:org:create -f config/project-scratch-def.json -a MyScratchOrg
$ sfdx force:org:open -u MyScratchOrg
$ npm run package
# TODO: generate {basename}.resource-meta.xml
$ sfdx force:source:push -u MyScratchOrg
```


## Resources


## Description of Files and Directories


## Issues
