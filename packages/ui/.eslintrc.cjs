module.exports = {
	root: true,
	extends: ['custom/web'],
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
	}
}
