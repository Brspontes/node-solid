module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-useless-constructor': 0,
    '@typescript-eslint/no-useless-constructor': 0,
    'no-empty-function': 0,
    '@typescript-eslint/no-empty-function': 0,
    'new-cap': 0,
    '@typescript-eslint/new-cap': 0
  }
}
