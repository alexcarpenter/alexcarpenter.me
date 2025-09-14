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
  redirects: {
    "/notes": "/notes/1",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), icon()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light-default",
        dark: "github-dark-default",
      },
      transformers: [
        transformerNotationDiff(),
        transformerMetaHighlight(),
        transformerMetaWordHighlight(),
      ],
      cache: true,
    },
  },
});
