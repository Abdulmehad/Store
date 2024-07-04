import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [],
  plugins: ['~/plugins/fontawesome.ts'],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]
})
