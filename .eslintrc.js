module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jasmine: true,
    'codeceptjs/codeceptjs': true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'no-restricted-globals': 0,
    'linebreak-style': 0,
  },
  plugins: ["jasmine", "codeceptjs"]
};
