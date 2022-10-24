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
    '@emotion/babel-preset-css-prop', // For `css` prop in JSX.
  ],
  plugins: ['macros'], // Allow macros such as `tw` or `css`.
};
