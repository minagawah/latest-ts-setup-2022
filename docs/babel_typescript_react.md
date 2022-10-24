# What did I do?

- [Webpack](./webpack.md)
- __Babel + TypeScript + React__
- [ESLint + Prettier](./eslint_prettier.md)
- [Emotion + Tailwind](./emotion_tailwind.md)
- [Others](./others.md)

## Babel + TypeScript + React

### Installed

#### React

- react
- react-dom

Some optional features for React:

- react-router
- react-router-dom
- react-hook-form
- react-select
- history
- react-media@next
- prop-types

#### TypeScript

- typescript
- tscheck
- @types/react
- @types/react-dom

#### Babel

Using _Babel_ for transpilation (instead of TS doing it):

- @babel/core
- babel-loader
- @babel/preset-react
- @babel/preset-typescript

For polyfills:

- @babel/preset-env
- core-js - `@babel/polyfill` has been deprecated
- regenerator-runtime

The overall installation should look like this:

```shell
# For dependencies
yarn add react react-dom react-router@next react-router-dom react-hook-form react-select history react-media prop-types

# For devDependencies
yarn add --dev webpack webpack-cli webpack-dev-server typescript tscheck @types/react @types/react-dom @babel/core babel-loader @babel/preset-react @babel/preset-typescript @babel/preset-env core-js regenerator-runtime
```

### Settings

#### `babel.config.js`

```js
module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // Automatically inserts polyfills
        corejs: 3,
        targets: {
          esmodules: true,
        },
        debug: false,
      },
    ],
    '@babel/preset-react',
  ],
};
```

#### `tsconfig.json`

```json
{
  "compilerOptions": {
    /* Basic Options */
    "target": "esnext",
    "module": "umd",
    "lib": [
      "esnext",
      "dom"
    ],
    "jsx": "react",
    "sourceMap": true,
    "noEmit": true,

    /* Strict Type-Checking Options */
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,

    /* Module Resolution Options */
    "moduleResolution": "node",
    "baseUrl": "./",
    "esModuleInterop": true,

    /* Advanced Options */
    "forceConsistentCasingInFileNames": true,
  },
  "include": ["src", "./types"]
}
```

#### `package.json`

```diff
  "scripts": {
    "dev": "webpack serve --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js --progress --hide-modules"
+    "typecheck": "tsc",
  },
```
