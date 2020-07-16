# Discord Utils
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat)](#contributors)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This is a collection of JavaScript/NodeJS utilities for discord bot development.

![NPM](https://img.shields.io/npm/l/@kl13nt/discord-utils?registry_uri=https%3A%2F%2Fregistry.npmjs.org)
![npm (scoped)](https://img.shields.io/npm/v/@kl13nt/discord-utils)
![node-current](https://img.shields.io/node/v/@kl13nt/discord-utils)
![npm](https://img.shields.io/npm/dt/@kl13nt/discord-utils)
![codecov](https://codecov.io/gh/KL13NT/discord-utils/branch/master/graph/badge.svg)
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
<table>
  <tr>
    <td align="center"><a href="https://github.com/KL13NT"><img src="https://avatars3.githubusercontent.com/u/20807178?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nabil Tharwat</b></sub></a><br /><a href="#a11y-KL13NT" title="Accessibility">️️️️♿️</a> <a href="#question-KL13NT" title="Answering Questions">💬</a> <a href="#audio-KL13NT" title="Audio">🔊</a> <a href="#blog-KL13NT" title="Blogposts">📝</a> <a href="https://github.com/KL13NT/discord-utils/issues?q=author%3AKL13NT" title="Bug reports">🐛</a> <a href="#business-KL13NT" title="Business development">💼</a> <a href="https://github.com/KL13NT/discord-utils/commits?author=KL13NT" title="Code">💻</a> <a href="#content-KL13NT" title="Content">🖋</a> <a href="#data-KL13NT" title="Data">🔣</a> <a href="#design-KL13NT" title="Design">🎨</a> <a href="https://github.com/KL13NT/discord-utils/commits?author=KL13NT" title="Documentation">📖</a> <a href="#eventOrganizing-KL13NT" title="Event Organizing">📋</a> <a href="#example-KL13NT" title="Examples">💡</a> <a href="#financial-KL13NT" title="Financial">💵</a> <a href="#fundingFinding-KL13NT" title="Funding Finding">🔍</a> <a href="#ideas-KL13NT" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-KL13NT" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-KL13NT" title="Maintenance">🚧</a> <a href="#platform-KL13NT" title="Packaging/porting to new platform">📦</a> <a href="#plugin-KL13NT" title="Plugin/utility libraries">🔌</a> <a href="#projectManagement-KL13NT" title="Project Management">📆</a> <a href="https://github.com/KL13NT/discord-utils/pulls?q=is%3Apr+reviewed-by%3AKL13NT" title="Reviewed Pull Requests">👀</a> <a href="#security-KL13NT" title="Security">🛡️</a> <a href="#talk-KL13NT" title="Talks">📢</a> <a href="https://github.com/KL13NT/discord-utils/commits?author=KL13NT" title="Tests">⚠️</a> <a href="#tool-KL13NT" title="Tools">🔧</a> <a href="#translation-KL13NT" title="Translation">🌍</a> <a href="#tutorial-KL13NT" title="Tutorials">✅</a> <a href="#userTesting-KL13NT" title="User Testing">📓</a> <a href="#video-KL13NT" title="Videos">📹</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!