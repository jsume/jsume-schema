import { antfu } from '@antfu/eslint-config'

export default antfu()
  .append(
    {
      files: ['index.js', 'README.md/**/*'],
      rules: {
        'perfectionist/sort-imports': 'off',
        'perfectionist/sort-exports': 'off',
        'perfectionist/sort-named-imports': 'off',
        'perfectionist/sort-named-exports': 'off',
      },
    },
  )
