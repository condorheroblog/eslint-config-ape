# @condorhero/eslint-config-typescript

> Note: The code comes from [@antfu/eslint-config](https://github.com/antfu/eslint-config)

<p align="center">
    <a href="https://github.com/condorheroblog/eslint-config-ape">
      <img src="../../ape.svg" alt="APE LOGO">
    </a>
    <br />
    My ESLint config presets
</p>


<p align="center">
    <a href="https://www.npmjs.com/package/@condorhero/eslint-config-typescript" target="__blank">
        <img src="https://img.shields.io/npm/v/@condorhero/eslint-config-typescript?color=a1b858&label=" alt="NPM version">
    </a>
    <a href="https://www.npmjs.com/package/@condorhero/eslint-config-typescript" target="__blank">
        <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@condorhero/eslint-config-typescript?color=50a36f&label=">
    </a>
    <br />
    <a href="https://github.com/condorheroblog/eslint-config-ape" target="__blank">
        <img src="https://img.shields.io/github/stars/condorheroblog/eslint-config-ape?style=social" alt="GitHub stars" />
    </a>
</p>


- Double quotes, must semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- JavaScript, TypeScript out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint @condorhero/eslint-config-typescript

# or with npm
npm install -D eslint @condorhero/eslint-config-typescript
```

### Config

For example `.eslintrc` file:

```json
{
	"extends": "@condorhero/eslint-config-typescript"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
	"scripts": {
		"lint": "eslint ."
	}
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
	"prettier.enable": false,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	}
}
```

## License

[MIT](https://github.com/condorheroblog/eslint-config-ape/blob/main/LICENSE)