# sfdx-template (WIP)

- sfdx
- webpack 3
- React
- Lightning Design System
- Mocha
- [Lightning Testing Service (LTS)](https://github.com/forcedotcom/LightningTestingService)

## Dev

Local w/ Hot Reload

```
$ npm run start
```

Local

```
$ npm run build
$ open build/index.html // or open your browser and access file://<current path>/build/index.html
```

## Test

## Deploy to Scratch Org

```
$ sfdx force:org:create -f config/project-scratch-def.json -a MyScratchOrg
$ sfdx force:org:open -u MyScratchOrg
$ npm run package
$ sfdx force:source:push -u MyScratchOrg
```

Open:
https://{you scratch domain}.lightning.force.com/c/app.app

## Resources


## Description of Files and Directories

- force-app : sfdx source folder
- my-app : application source folder (not dependent Salesforce)

## Issues
