import { antfu } from '@antfu/eslint-config'

export default antfu({
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
})
  .append(
    {
      files: ['README.md/**/*'],
      rules: {
        'perfectionist/sort-imports': 'off',
        'perfectionist/sort-exports': 'off',
        'perfectionist/sort-named-imports': 'off',
        'perfectionist/sort-named-exports': 'off',
      },
    },
  )
