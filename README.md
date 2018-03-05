# :space_invader: React Native Template TypeScript

Clean and minimalist React Native template for a quick start with TypeScript.

This template can be used with the React Native CLI, which means it doesn't mess with the platform specific files.
Instead of including a lot of dependencies, my aim when creating this template was to provide a very easy and minimalist
way to start your React Native project with TypeScript. Of course you can always include other dependencies as you need them.

## :arrow_forward: Quick Start

```
react-native init MyApp --template typescript
cd MyApp
node scripts/install.sh
```

## :question: FAQ

### Why the post install script?

The React Native CLI currently supports automatic installation only of production dependencies. Since TypeScript type definitions are dev dependencies, the post install script is being used to install those.

### What about Jest?

Currently this template does not cover Jest. For more info on the current status check the [open issue](https://github.com/emin93/react-native-template-typescript/issues/1).

### How will this template affect the React Native CLI workflow?

The React Native CLI will do everything just as without a template and afterwards overwrite the files with the ones from
this template. This means you don't have to worry about incompatibility issues with later React Native upgrades.
