# eslint-config-ape

> Note: The code comes from [@antfu/eslint-config](https://github.com/antfu/eslint-config)

<p align="center">
    <a href="https://github.com/condorheroblog/eslint-config-ape">
      <img src="./ape.svg" alt="APE LOGO">
    </a>
    <br />
    My ESLint config presets
</p>


<p align="center">
    <a href="https://www.npmjs.com/package/@condorhero/eslint-config" target="__blank">
        <img src="https://img.shields.io/npm/v/@condorhero/eslint-config?color=a1b858&label=" alt="NPM version">
    </a>
    <a href="https://www.npmjs.com/package/@condorhero/eslint-config" target="__blank">
        <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@condorhero/eslint-config?color=50a36f&label=">
    </a>
    <br />
    <a href="https://github.com/condorheroblog/eslint-config-ape" target="__blank">
        <img src="https://img.shields.io/github/stars/condorheroblog/eslint-config-ape?style=social" alt="GitHub stars" />
    </a>
</p>


- Double quotes, must semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, Vue, React out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint @condorhero/eslint-config

# or with npm
npm install -D eslint @condorhero/eslint-config
```

### Config

For example `.eslintrc` file:

```json
{
	"extends": "@condorhero"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Vue

Installing `@condorhero/eslint-config` will apply all rules, It only needs Vue config.

```bash
pnpm add -D eslint @condorhero/eslint-config-vue

# or with npm
npm install -D eslint @condorhero/eslint-config-vue
```

eslint `.eslintrc` file:

```json
{
	"extends": "@condorhero/eslint-config-vue"
}
```
### React

Installing `@condorhero/eslint-config` will apply all rules, It only needs React config.

```bash
pnpm add -D eslint @condorhero/eslint-config-react

# or with npm
npm install -D eslint @condorhero/eslint-config-react
```

eslint `.eslintrc` file:

```json
{
	"extends": "@condorhero/eslint-config-react"
}
```

### TypeScript

Installing `@condorhero/eslint-config` will apply all rules, It only needs TypeScript config.

```bash
pnpm add -D eslint @condorhero/eslint-config-typescript

# or with npm
npm install -D eslint @condorhero/eslint-config-typescript
```

eslint `.eslintrc` file:

```json
{
	"extends": "@condorhero/eslint-config-typescript"
}
```

### Add script for package.json

For example:

```json
{
	"scripts": {
		"lint": "eslint .",
		"lint:fix": "eslint . --fix"
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

[MIT](./LICENSE)