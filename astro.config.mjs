import sitemap from "@astrojs/sitemap";
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  site: "https://alexcarpenter.me",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), icon()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: "_blank" }]],
    shikiConfig: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
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
