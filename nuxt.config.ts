// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-06-04",
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/icon", "@nuxtjs/color-mode"],
  css: ["~/assets/main.css"],
  icon: { provider: "iconify" },
});
