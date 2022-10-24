# What did I do?

- [Webpack](./webpack.md)
- [Babel + TypeScript + React](./babel_typescript_react.md)
- [ESLint + Prettier](./eslint_prettier.md)
- __Emotion + Tailwind__
- [Others](./others.md)

## Emotion & TailwindCSS

### Installed

- babel-plugin-macros
- @emotion/react
- @emotion/cache
- @emotion/styled
- [@emotion/babel-preset-css-prop](https://emotion.sh/docs/css-prop#babel-preset) - For `css` prop in JSX files
- tailwindcss
- twin.macro

```shell
yarn add --dev babel-plugin-macros @emotion/react @emotion/cache @emotion/styled @emotion/babel-preset-css-prop tailwindcss twin.macro
```

### Configurations

#### `tsconfig.json`

Add followings to `tsconfig.json`:

```diff
{
  "compilerOptions": {
-    "jsx": "react",
+    "jsx": "react-jsx",
+    "jsxImportSource": "@emotion/react",
  }
}
```

#### `babel.config.js`

Add followings to `babel.config.js`:

```diff
module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
          esmodules: true,
        },
        debug: false,
      },
    ],
    '@babel/preset-react',
+    '@emotion/babel-preset-css-prop',
  ],
+  plugins: ['macros'],
```

#### `babel-plugin-macros.config.js`

```js
module.exports = {
  twin: {
    preset: 'emotion',
    config: './src/tailwind.config.js',
  },
};
```

#### `.eslintrc.js`

Add followings to `.eslintrc.js` (using `@emotion/eslint-plugin`):

```diff
  rules: {
    ...
    ...
+    'react/no-unknown-property': ['error', { 'ignore': ['css'] }]
  },
};
```

#### `postcss.config.js`

```js
module.exports = {
  plugins: {
    autoprefixer: {},
  },
};
```

#### `src/tailwind.config.js`

```js
module.exports = {
  important: true,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

#### `types/twin.d.ts`

TypeScript is not able to find `css` nor `tw` in `twin.macro` module.
You need to add custom type declarations.
The file is adopted from [ben-rogerson/twin.examples](https://github.com/ben-rogerson/twin.examples/blob/master/next-emotion-typescript/types/twin.d.ts).

```js
import 'twin.macro'
import { css as cssImport } from '@emotion/react'
import styledImport from '@emotion/styled'
import { CSSInterpolation } from '@emotion/serialize'

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'react' {
  // The tw and css prop
  interface DOMAttributes<T> {
    tw?: string
    css?: CSSInterpolation
  }
}
```

