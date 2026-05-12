import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
        srcDir: ["./app"],
      },
    ],
  ],
  imports: {
    dirs: ["./stores/**"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/assets/css/main.css"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  fonts: {
    families: [{ name: "Open Sans", provider: "google" }],
  },
  icon: {
    mode: "css",
    cssLayer: "base",
  },
});
