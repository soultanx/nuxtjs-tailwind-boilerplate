// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  alias: {
    assets: "/<rootDir>/assets",
  },
})