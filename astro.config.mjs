// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  site: "https://parrajulio33.github.io/cv-minimalist/",
  base: "/cv-minimalist/",
});
