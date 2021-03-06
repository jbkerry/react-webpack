module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': [2, { code: 120, tabWidth: 2 }],
    'react/jsx-one-expression-per-line': 'off',
    'arrow-parens': [2, 'as-needed'],
    // quotes: [2, 'single'],
  },
};
