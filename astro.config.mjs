import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-tuto-7c6b88.netlify.app",
  integrations: [preact()]
});