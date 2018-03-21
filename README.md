# :space_invader: React Native Template TypeScript · [![npm](https://img.shields.io/npm/v/react-native-template-typescript.svg)](https://www.npmjs.com/package/react-native-template-typescript) [![Travis](https://img.shields.io/travis/emin93/react-native-template-typescript.svg)](https://travis-ci.org/emin93/react-native-template-typescript)

Clean and minimalist React Native template for a quick start with TypeScript.

This template can be used with the React Native CLI, which means it doesn't mess with the platform specific files. Instead of including a lot of dependencies, my aim when creating this template was to provide a very easy and minimalist way to start your React Native project with TypeScript. Of course you can always include other dependencies as you need them.

## :star: Features

-   Seamless integration with the React Native CLI! :sparkles:
-   Consistent with the default React Native template (no additional stuff)
-   React Native TypeScript transformer directly integrated into the packager (no separate process for `tsc`)
-   Unit testing in TypeScript with TS Jest
-   Always latest dependencies :raised_hands:

## :arrow_forward: Quick Start

```
react-native init MyApp --template typescript
cd MyApp
node setup.js
```

## :question: FAQ

### What is included in this template?

- [TypeScript](https://github.com/Microsoft/TypeScript)
- [React Native TypeScript transformer](https://github.com/ds300/react-native-typescript-transformer)
- [Type definitions for React & React Native](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [TS Jest](https://github.com/kulshekhar/ts-jest)

This template always uses the latest versions of the dependencies at the time when the setup script (`node setup.js`) is being executed. This means you don't have to worry about old versions.

Lots of :heart: and credits to the owners and maintainers of those packages.

### Why the setup script?

The React Native CLI supports automatic installation of production dependencies only. Since TypeScript and the other dependencies are dev dependencies, the setup script is being used to install those. It also takes care of obsolete files like the `.flowconfig` and the `setup.js` itself after the setup.

### How will this template affect the React Native CLI workflow?

The React Native CLI will do everything just as without a template and afterwards overwrite the files with the ones from this template. This means you don't have to worry about incompatibility issues with later React Native upgrades.

## :computer: Contributing

Contributions are very welcome. Please try to stay consistent with the other files I've created.

### Donations

I created this project in my spare time because I enjoy coding. Of course you can support me by [buying me a coffee](https://www.paypal.me/emin93) if you wish. :coffee: :relieved:
