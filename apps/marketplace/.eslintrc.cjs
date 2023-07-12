const { resolve } = require('node:path')
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
	root: true,
	extends: ['custom/web', 'plugin:astro/recommended'],
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				project: resolve(__dirname, 'tsconfig.json'),
				extraFileExtensions: ['.astro'],
			},
			rules: {
				'prettier/prettier': 'off',
				'react/no-unknown-property': 'off',
			},
		},
	],
})
