// https://eslint.nuxt.com/packages/config
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import prettier from 'eslint-config-prettier'

export default createConfigForNuxt({
  features: {
    // Fail lint on style issues that Prettier does not own.
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
  // Keep ESLint out of Prettier's way; formatting is owned by Prettier.
  .append(prettier)
  .append({
    ignores: ['.nuxt/**', '.output/**', 'dist/**', 'node_modules/**', 'coverage/**'],
  })
