// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@invictus.codes/nuxt-vuetify", "@pinia/nuxt", "@nuxtjs/i18n"],
  vuetify: {
    vuetifyOptions: {},

    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
    },
  },
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
});
