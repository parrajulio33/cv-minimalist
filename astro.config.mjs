// @ts-check
import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify';
// https://astro.build/config
export default defineConfig({
  site: "https://parrajulio33.github.io/cv-minimalist/",
  base: "/cv-minimalist/",
  adapter: netlify(),	
});
