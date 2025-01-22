import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// If you are not going to use vercel analytics you can delete the analytics
// If you want to remove vercel from your project you can do npm uninstall vercel
site: 'https://JQuinto2005.github.io',
export default defineConfig({
  output: "dist",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});

//If you don't have vercel the configuration will be empty

//ej : export default defineConfig({});
