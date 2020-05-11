# action-deploygate-cli

Action to install [DeployGate/deploygate-cli](https://github.com/DeployGate/deploygate-cli)

Example
```yaml
name: Android CI

on:
  push:

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
      name: set up JDK 1.8
    - uses: actions/setup-java@v1
      with:
        java-version: 1.8
      name: Build with Gradle
    - uses: tkt989/action-deploygate-cli@master
      name: Install DeployGate
    - run: ./gradlew assembleDebug
    - run: dg deploy app/build/outputs/apk/debug/app-debug.apk
      env:
        DG_USER_NAME: ${{ secrets.DG_USER_NAME }}
        DG_TOKEN: ${{ secrets.DG_TOKEN}}
```
