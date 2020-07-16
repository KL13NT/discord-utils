# Discord Utils

This is a collection of JavaScript/NodeJS utilities for discord bot development.

![Build Status](https://travis-ci.com/KL13NT/discord-utils.svg?branch=master)
![codecov](https://codecov.io/gh/KL13NT/discord-utils/branch/master/graph/badge.svg)
![npm (scoped)](https://img.shields.io/npm/v/@kl13nt/discord-utils)
![node-current](https://img.shields.io/node/v/@kl13nt/discord-utils)
![NPM](https://img.shields.io/npm/l/@kl13nt/discord-utils?registry_uri=https%3A%2F%2Fregistry.npmjs.org)
![npm](https://img.shields.io/npm/dt/@kl13nt/discord-utils)
![GitHub issues](https://img.shields.io/github/issues-raw/kl13nt/discord-utils)
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/kl13nt/discord-utils)

## Getting Started

These instructions will get you up and running with discord-utils. All you need is to install using your favourite package manager then require into your code.

### Prerequisites

I haven't tested this on earlier versions of node. The version it's tested on is `v12.16.0`.

### Installing

Using NPM:

```js
npm i @kl13nt/discord-utils
```

Using Yarn:

```js
yarn add @kl13nt/discord-utils
```

## Available Functionalities

To see function names either use `import/require` in your code (I have full types available) or simply inspect the `index.ts` file in `src`. A general classification can be:

- Moderation Utils: To mute, warn, and ban members.
- Object Utils: Helpers for when working with objects such as `GuildMember` or `TextChannel` objects.
- Embed Utils: Helpers for when creating embeds.
- General Utils: Parsers for different mention types and role handling.

## Usage

Without any bundlers:

```js
// import all functions and classes
const utils = require('@kl13nt/discord-utils');

// import specific functions
const { capitalise } = require('@kl13nt/discord-utils');

capitalise('hello world! this should be capitalised as title case.'); // Hello World! This Should Be Capitalised As Title Case.
```

## Contributing

Check `CONTRIBUTING.md` in this repo.

## Changelog

Check `CHANGELOG.md` in this repo, which is automatically generated using [standard-version](https://github.com/conventional-changelog/standard-version).

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE Version 3 - see the [LICENSE](LICENSE) file for details.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
