var variables={
  "name": "@ch-post-app-iotp-msd/msd-sorting-unit-metrics-stream-api",
  "version": "0.1.0-rc.1",
  "description": "MSD Sorting Unit Metrics Stream API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix",
    "prepublishOnly": "npm test"
  },
  "author": "bierier",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.13.0",
    "@typescript-eslint/parser": "^4.13.0",
    "apikana": "0.11.2",
    "apikana-defaults": "0.0.100",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "bierier",
    "namespace": "app.iotp.msd.sorting.unit.metrics",
    "shortName": "sorting-unit-metrics",
    "projectName": "msd-sorting-unit-metrics-stream-api",
    "title": "MSD Sorting Unit Metrics Stream API",
    "plugins": [
      "maven",
      "readme"
    ],
    "javaPackage": "ch.post.app.iotp.msd.sorting.unit.metrics.v1",
    "mavenGroupId": "ch.post.app.iotp.msd.sorting.unit",
    "mqs": "MQTT",
    "avro": {
      "enumAsString": true
    }
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}