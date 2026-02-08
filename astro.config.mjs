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
import pierreLight from "./src/lib/pierre-light.json";
import pierreDark from "./src/lib/pierre-dark.json";

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
        light: pierreLight,
        dark: pierreDark,
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
