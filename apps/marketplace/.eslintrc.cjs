module.exports = {
	root: true,
	extends: ['custom/web'],
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	overrides: [
		{
				files: ["*.astro"],
				plugins: ["astro"],
				parser: "astro-eslint-parser",
				rules: {
					"prettier/prettier": "off",
					"react/no-unknown-property": "off",
				},
				parserOptions: {
					parser: "@typescript-eslint/parser",
					extraFileExtensions: [".astro"],
				},
		}
	]
}
