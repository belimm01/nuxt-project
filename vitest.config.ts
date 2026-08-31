import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    include: ['test/**/*.spec.ts'],
    coverage: {
      include: ['components/**/*.vue', 'pages/**/*.vue'],
    },
  },
})
