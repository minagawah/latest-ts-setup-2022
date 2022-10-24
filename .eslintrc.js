module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['src/tailwind.config.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    camelcase: 'off',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
