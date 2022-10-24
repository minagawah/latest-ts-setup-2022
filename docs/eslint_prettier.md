# What did I do?

- [Webpack](./webpack.md)
- [Babel + TypeScript + React](./babel_typescript_react.md)
- __ESLint + Prettier__
- [Emotion + Tailwind](./emotion_tailwind.md)
- [Others](./others.md)


## ESLint + Prettier

### (1) ESLint

- eslint

```shell
yarn add --dev eslint
```

ESLint has an interactive tool to auto-generate `.eslintrc.js` for you:

```shell
npx eslint --init
```

then you'll see a series of questions like these:

```shell
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y

? How would you like to use ESLint? …
  To check syntax only
▸ To check syntax and find problems
  To check syntax, find problems, and enforce code style

# Choosing "To check syntax and find problems" because we're using Prettier later.

? What type of modules does your project use? …
▸ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

# "JavaScript modules" because we're using React.

? Which framework does your project use? …
▸ React
  Vue.js
  None of these

? Does your project use TypeScript? ‣ No / Yes

? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node

? What format do you want your config file to be in? …
▸ JavaScript
  YAML
  JSON

# Depends on your preference, but I choose to generate `.eslintrc.js`.

The config that you've selected requires the following dependencies:
eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest

? Would you like to install them now? ‣ No / Yes
? Which package manager do you want to use? …
  npm
▸ yarn
  pnpm
```

#### `.eslintrc.js`

This is what I get after the interactive session:

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    camelcase: 'error',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
  },
};
```

We also need to install ESLint Plugins for TypeScript:

- eslint-plugin-import
- @typescript-eslint/parser
- eslint-import-resolver-typescript

```shell
yarn add --dev eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript
```


### (2) Prettier

- prettier
- eslint-config-prettier
- eslint-plugin-prettier
- eslint-plugin-react-hooks

```shell
yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks
```

#### `.eslintrc.js`

Add followings to `.eslintrc.js`:

```diff
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
+    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    camelcase: 'error',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
  },
};
```

#### `.prettierrc.js`

```js
module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
};

```

Create a `.prettierignore`, specify which files for Prettier to ignore.
Here is mine looks like:

#### `.prettierignore`

```yaml
/dist
/node_modules
/public
*.sh
.git*
.prettier*
LICENSE*
stats.json
yarn*
*.png
*.log
*.lock
```
