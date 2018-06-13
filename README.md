# :space_invader: React Native Template TypeScript · [![npm](https://img.shields.io/npm/v/react-native-template-typescript.svg)](https://www.npmjs.com/package/react-native-template-typescript) [![Travis](https://img.shields.io/travis/emin93/react-native-template-typescript.svg)](https://travis-ci.org/emin93/react-native-template-typescript)

Clean and minimalist React Native template for a quick start with TypeScript.

[![Header](https://cdn-images-1.medium.com/max/500/1*E9RnPOATuhjuNrlFkv5oSg.jpeg)](https://medium.com/@emin93/react-native-typescript-b965059109d3)

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

-   [TypeScript](https://github.com/Microsoft/TypeScript)
-   [React Native TypeScript transformer](https://github.com/ds300/react-native-typescript-transformer)
-   [Type definitions for React & React Native](https://github.com/DefinitelyTyped/DefinitelyTyped)
-   [TS Jest](https://github.com/kulshekhar/ts-jest)

This template always uses the latest versions of the dependencies at the time when the `react-native init` command is being executed. This means you don't have to worry about old versions.

Lots of :heart: and credits to the owners and maintainers of those packages.

### Why the setup script?

It deletes obsolete files like the `.flowconfig` and the `setup.js` itself after the setup.

### Does debugging work?

Yes it does.

## :globe_with_meridians: Links

-   ["Using React Native with TypeScript just became simple" on Medium](https://medium.com/@emin93/react-native-typescript-b965059109d3)

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](https://github.com/emin93/react-native-template-typescript/blob/master/CONTRIBUTING.md).

### Donations

I created this project in my spare time because I enjoy coding. Of course you can support me by [buying me a coffee](https://www.paypal.me/emin93) if you wish. :coffee: :relieved:
