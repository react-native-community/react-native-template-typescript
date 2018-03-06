# :space_invader: React Native Template TypeScript · [![npm](https://img.shields.io/npm/v/react-native-template-typescript.svg)](https://www.npmjs.com/package/react-native-template-typescript) [![Travis](https://img.shields.io/travis/emin93/react-native-template-typescript.svg)](https://travis-ci.org/emin93/react-native-template-typescript)

Clean and minimalist React Native template for a quick start with TypeScript.

This template can be used with the React Native CLI, which means it doesn't mess with the platform specific files. Instead of including a lot of dependencies, my aim when creating this template was to provide a very easy and minimalist way to start your React Native project with TypeScript. Of course you can always include other dependencies as you need them.

## :arrow_forward: Quick Start

```
react-native init MyApp --template typescript
cd MyApp
node setup.js
```

## :question: FAQ

### What is included in this template?

- [TypeScript](https://github.com/Microsoft/TypeScript)
- [TypeScript type definitions for React & React Native](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [React Native Typescript Transformer](https://github.com/ds300/react-native-typescript-transformer)
- [TSLint](https://github.com/palantir/tslint)
- [TSLint React](https://github.com/palantir/tslint-react)

This template always uses the latest versions of the dependencies at the time when the setup script (`node setup.js`) is being executed. This means you don't have to worry about old versions.

### Why the setup script?

The React Native CLI supports automatic installation of production dependencies only. Since TypeScript and the other dependencies are dev dependencies, the setup script is being used to install those. It also takes care of obsolete files like the `.flowconfig` and the `setup.js` itself after the setup.

### What about Jest?

This template does not cover Jest yet. For more info on the current status check the [open issue](https://github.com/emin93/react-native-template-typescript/issues/1).

### How will this template affect the React Native CLI workflow?

The React Native CLI will do everything just as without a template and afterwards overwrite the files with the ones from this template. This means you don't have to worry about incompatibility issues with later React Native upgrades.

## :hearts: Contributing

Contributions are very welcome. Please try to stay consistent with the other files I've created.

### Donations

I created this project in my spare time because I enjoy coding. Of course you can support me by [buying me a coffee](https://www.paypal.me/emin93) if you wish. :coffee: :relieved:
