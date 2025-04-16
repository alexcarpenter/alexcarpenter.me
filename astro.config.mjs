import sitemap from "@astrojs/sitemap";
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://alexcarpenter.me",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), icon()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
      defaultColor: false,
      transformers: [
        transformerNotationDiff(),
        transformerMetaHighlight(),
        transformerMetaWordHighlight(),
      ],
    },
  },
});
