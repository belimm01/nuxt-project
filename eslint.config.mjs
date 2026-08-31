import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import prettier from 'eslint-config-prettier'

export default createConfigForNuxt({
  features: {
    stylistic: false,
    tooling: true,
  },
})
  .append({
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'always'],
    },
  })
  .append(prettier)
  .append({
    ignores: ['.nuxt/**', '.output/**', 'dist/**', 'node_modules/**', 'coverage/**'],
  })
