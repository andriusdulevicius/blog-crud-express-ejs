module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
  //kad nemestu klaidos html, ejs failams
  overrides: [{ excludeFiles: '*.ejs' }],
};
