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
    node: true,
    'jest/globals': true,
    // 'supertest/globals': true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/all',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jest/prefer-expect-assertions': 0,
    'jest/no-hooks': [
      'error',
      {
        allow: ['beforeEach', 'beforeAll', 'afterEach', 'afterAll'],
      },
    ],
  },
};
