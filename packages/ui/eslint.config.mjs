import reactHooks from 'eslint-plugin-react-hooks'
import ts from '@typescript-eslint/eslint-plugin'
import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginCypress from 'eslint-plugin-cypress'
import * as graphqlESLint from '@graphql-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'

const tsOverrideConfig = ts.configs['eslint-recommended'].overrides[0]
const tsRecommemdedConfig = ts.configs.recommended
const tsFiles = ['src/**/*.ts', 'src/**/*.tsx']

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module',
        tsconfigRootDir: './',
        project: './tsconfig.json'
      }
    },
    plugins: {
      react: reactPlugin,
      cypress: eslintPluginCypress,
      'react-hooks': reactHooks,
      '@typescript-eslint': ts,
      ts
    },
    rules: {
      ...tsOverrideConfig.rules,
      ...tsRecommemdedConfig.rules,
      ...reactHooks.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...eslintPluginCypress.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/jsx-max-props-per-line': [
        'error',
        {
          maximum: {
            single: 1,
            multi: 1
          }
        }
      ],
      trailingComma: 'off',
      'object-curly-spacing': ['error', 'always'],
      'react/jsx-tag-spacing': 'error',
      'prettier/prettier': 'error',
      'react-hooks/exhaustive-deps': 'error'
    },
    files: ['src/**/*.js', 'src/**/*.jsx', ...tsFiles],
    ignores: [
      'src/interfaces/**/*',
      '**/types-and-hooks.tsx',
      'src/gql/**/*',
      'dist',
      'node_modules',
      'public'
    ]
  },
  {
    files: ['**/*.graphql'],
    languageOptions: {
      parser: graphqlESLint
    },
    plugins: {
      '@graphql-eslint': graphqlESLint
    },
    rules: {
      'prettier/prettier': 'error'
    }
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended
]
