const path = require('path');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'boundaries', 'fsd-rules'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': ['error', { ignore: ['\\.svg\\?react$'] }],
    'import/no-extraneous-dependencies': 'error',

    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        rules: [
          {
            from: 'app',
            allow: ['processes', 'pages', 'widgets', 'features', 'shared'],
          },
          {
            from: 'processes',
            allow: ['pages', 'widgets', 'features', 'shared'],
          },
          {
            from: 'pages',
            allow: ['widgets', 'features', 'shared'],
          },
          {
            from: 'widgets',
            allow: ['features', 'shared'],
          },
          {
            from: 'features',
            allow: ['entities', 'shared'],
          },
          {
            from: 'entities',
            allow: ['shared'],
          },
          {
            from: 'shared',
            allow: [],
          },
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'boundaries/elements': [
      { type: 'app', pattern: 'app' },
      { type: 'processes', pattern: 'processes' },
      { type: 'pages', pattern: 'pages' },
      { type: 'widgets', pattern: 'widgets' },
      { type: 'features', pattern: 'features' },
      { type: 'entities', pattern: 'entities' },
      { type: 'shared', pattern: 'shared' },
    ],
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve(__dirname, 'src')],
          ['app', path.resolve(__dirname, 'src/app')],
          ['pages', path.resolve(__dirname, 'src/pages')],
          ['widgets', path.resolve(__dirname, 'src/widgets')],
          ['features', path.resolve(__dirname, 'src/features')],
          ['entities', path.resolve(__dirname, 'src/entities')],
          ['shared', path.resolve(__dirname, 'src/shared')],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
};
