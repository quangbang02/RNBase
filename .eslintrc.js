module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: ['@react-native-community'],
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
  },
};
