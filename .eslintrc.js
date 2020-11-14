/**
 * These rules enforce the Airbnb Style Guide
 *
 * Visit this repo for more information:
 *   https://airbnb.io/javascript/react/
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
};
