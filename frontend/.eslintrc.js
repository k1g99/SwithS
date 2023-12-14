module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/prop-types': ['off'],
  },
}
