# Eslint config

![GitHub package.json version](https://img.shields.io/github/package-json/v/lyr-7d1h/eslint-config?label=npm&style=plastic)

## Configure

It will look for `tsconfig.eslint.json` for linting typescript files with the right config.

```bash
npm i -D @lyr_7d1h/eslint-config eslint prettier typescript
```

```js
module.exports = {
  parserOptions: {
    project: "./tsconfig.prod.json", // Custom tsconfig
  },
  extends: ["@lyr_7d1h/eslint-config"],
};
```
