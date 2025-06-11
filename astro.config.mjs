// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://parrajulio33.github.io/cv-minimalist/",
  base: "/cv-minimalist/",
  output: 'server',
       server: {
         headers: {
           'Referrer-Policy': 'strict-origin-when-cross-origin',
         },
       },
  adapter: netlify(),
});
