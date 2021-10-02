# :space_invader: React Native Template TypeScript

<p>
  <a href="https://github.com/react-native-community/react-native-template-typescript/actions/workflows/npm-publish.yml">
    <img alt="Build Status" src="https://github.com/react-native-community/react-native-template-typescript/actions/workflows/npm-publish.yml/badge.svg" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/react-native-community/react-native-template-typescript/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Clean and minimalist React Native template for a quick start with TypeScript.

## :star: Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli)
- Consistent with the default React Native template
- Minimal additional dependencies

## :arrow_forward: Usage

```sh
npx react-native init MyApp --template react-native-template-typescript
```

### Usage with older versions of React Native

#### e.g. `react-native@0.65.x`

```sh
npx react-native init MyApp --template react-native-template-typescript@6.7.*
```

See the below table to find out which version of the template to use.

#### React Native <=> Template Version

| React Native | Template |
| ------------ | -------- |
| 0.66         | 6.8.\*   |
| 0.65         | 6.7.\*   |
| 0.64         | 6.6.\*   |
| 0.63         | 6.5.\*   |
| 0.62         | 6.4.\*   |
| 0.61         | 6.3.\*   |
| 0.60         | 6.2.\*   |

## :warning: React Native CLI

This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`) for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

If you tried the above and still get the react-native-template-react- native-template-typescript: Not found error, please try adding the `--ignore-existing` flag to [force npx to ignore](https://github.com/npm/npx#description) any locally installed versions of the CLI and use the latest.

Further information can be found here: https://github.com/react-native-community/cli#about

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.
