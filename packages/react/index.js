module.exports = {
	extends: [
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"@condorhero/eslint-config-typescript",
	],
	settings: {
		react: {
			version: "18.0",
		},
	},
};
