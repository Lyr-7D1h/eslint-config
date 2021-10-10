'use strict'

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'no-throw-literal': 'error',

    // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
    // Enforce type imports to help with cyclic imports
    '@typescript-eslint/consistent-type-imports': 'error',

    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/issues/1637
    // Conflicts with Express Callbacks
    '@typescript-eslint/no-misused-promises': 'off',

    // Make an exception for default export (see https://basarat.gitbook.io/typescript/main-1/defaultisbad)
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    // Should error due to TS build failing when there are unused vars
    // If you're absolutly sure you want to keep unused vars use _{variableName} (also supports by tsc)
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_.' }],
  },
}