import { describe, expect, test } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Logo from '~/components/Logo.vue'

describe('Logo', () => {
  test('mounts as a component instance', async () => {
    const wrapper = await mountSuspended(Logo)
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders the Nuxt logo svg', async () => {
    const wrapper = await mountSuspended(Logo)
    expect(wrapper.find('svg.NuxtLogo').exists()).toBe(true)
  })
})
