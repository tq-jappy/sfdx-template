# Modern Salesforce Development Template and Samples

- Salesforce CLI/sfdx
- webpack v3, including webpack dev server for live reloading
- React
- Lightning Design System
- [Lightning Testing Service (LTS)](https://github.com/forcedotcom/LightningTestingService) with Jasmine

## Requirements

- Node >= 8.9.0
- To use Salesforce CLI (SFDX), install Salesforce CLI and finish authentication to Dev Hub org.

## Setup

```
$ npm install
```

## Dev

Local w/ Hot Reload (Recommended)

```
$ npm run start
```

Full build

```
$ npm run build
$ open build/index.html // or open your browser and access to file://<current path>/build/index.html
```

## Deploy to Scratch Org

Create and connect scratch org if not created.

```
$ sfdx force:org:create -f config/project-scratch-def.json -a MyScratchOrg
```

(Workaround): To test using LTS, install LTS

```
$ sfdx force:lightning:test:install -u MyScratchOrg
```

Package applications and push to the scratch org.

```
$ npm run package
$ sfdx force:source:push -u MyScratchOrg
```

Open the application.

```
$ sfdx force:org:open -u MyScratchOrg -p c/app.app
```

## Test

Test for Lightning Components

```
$ npm run test:lightning -- -u MyScratchOrg
```

## Description of Files and Directories

- ``force-app`` : sfdx source folder
- ``src`` : application source folder (not dependent Salesforce)

