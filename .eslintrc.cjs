module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/order': [
      'error',
      {
        groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@hooks/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@pages/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@components/*',
            group: 'internal',
            position: 'after',
          },
        ],

        pathGroupsExcludedImportTypes: ['@tanstack*'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['.*'],
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
