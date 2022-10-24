# What did I do?

- __Webpack__
- [Babel + TypeScript + React](./babel_typescript_react.md)
- [ESLint + Prettier](./eslint_prettier.md)
- [Emotion + Tailwind](./emotion_tailwind.md)
- [Others](./others.md)

## Webpack

### Installed

Basic installations for Webpack:

- webpack
- webpack-cli
- webpack-dev-server

Optional (e.g. loaders, plugins, etc.)

- file-loader
- css-loader
- style-loader
- postcss-loader
- autoprefixer
- webpack-merge
- clean-webpack-plugin
- html-webpack-plugin
- copy-webpack-plugin
- mini-css-extract-plugin
- license-webpack-plugin

So, the overall installation should look like this:

```shell
yarn add --dev file-loader css-loader style-loader postcss-loader autoprefixer webpack-merge clean-webpack-plugin html-webpack-plugin copy-webpack-plugin mini-css-extract-plugin license-webpack-plugin
```

### Settings

#### `package.json`
```json
  "scripts": {
    "dev": "webpack serve --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js --progress --hide-modules"
  },
```

#### `webpack.config.js`

Splitting `webpack.config.js` into 3 files:

- `webpack.base.js`
- `webpack.dev.js`
- `webpack.prod.js`


##### (a) `webpack.base.js`

```js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[fullhash].js',
  },
  stats: {
    colors: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
```

##### (b) `webpack.dev.js`

```js
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: '"development"',
    }),
  ],
});
```

##### (c) `webpack.prod.js`

```js
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LicenseWebpackPlugin =
  require('license-webpack-plugin').LicenseWebpackPlugin;

const base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'production',
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: '"production"',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[fullhash].css',
      chunkFilename: 'css/[id].[chunkhash].css',
    }),
    new LicenseWebpackPlugin({ perChunkOutput: true }),
  ],
});
```
