import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

export default [
  stylistic.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      '@stylistic/brace-style': ['error', 'stroustrup'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
    },
  },
]
