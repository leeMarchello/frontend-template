module.exports = {
	root: true,
	env: {browser: true, node: true},
	extends: [
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
	},
	plugins: ["@typescript-eslint"],
	rules: {
		'react/prop-types': 0,
		'no-unused-vars': 1,
	}
}