import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  css: ["@/styles/style.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
