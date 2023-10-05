// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@pinia/nuxt',
  ],
  vuetify: {
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      treeshaking: true,
      useIconCDN: false,
    },
  }
})
