// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
        charset: 'UTF-8',
        viewport: 'width=device-width, initial-scale=1.0',
        title: 'mail-box',
        meta: [
            {name: 'description', content: 'mail-box'}
        ],
        link: [
          {
              rel: 'preconnect',
              href: 'https://fonts.googleapis.com'
          },
          {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com'
          },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap'
          },
      ],
    },
    // pageTransition: {name: 'page', mode: 'out-in'}
},
css: [
    '~/assets/css/main.css'
],
typescript: {
  strict: true
},
modules: [
  '@pinia/nuxt',
],
pinia: {
  autoImports: [
    // automatically imports `defineStore`
    'defineStore', // import { defineStore } from 'pinia'
    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
  ],
},
})
