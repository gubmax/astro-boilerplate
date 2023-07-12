# Marketplace

This monorepository is a fullstack application containing a modern [React](https://react.dev/) web app, server-side rendering, tooling, and APIs.

The package manager used to install and link dependencies must be [pnpm](https://pnpm.io).

## What's inside?

This repo includes the following packages/apps:

### Apps and Packages

- `marketplace`: a [Astro](https://astro.build/) MPA
- `cms`: a [Vite](https://vitejs.dev/) SPA
- `ui`: a stub React component library shared by both `marketplace` and `cms` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Utilities

This repo has some additional tools:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
pnpm dev
```

## Update Packages

Via [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

```sh
npx npm-check-updates --deep --upgrade
```

## Recommended settings

### [Visual Studio Code](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settingsjson-location)

`.vscode/settings.json`

```json
{
	"typescript.tsdk": "node_modules/typescript/lib",
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true,
		"source.fixAll.stylelint": true
	},
	"eslint.workingDirectories": ["apps", "packages"],
	"eslint.validate": ["javascript", "javascriptreact", "astro", "typescript", "typescriptreact"],
	"unocss.root": ["packages/ui", "apps/marketplace"]
}
```
