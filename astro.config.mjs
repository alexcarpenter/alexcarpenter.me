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
import pierreLight from "@pierre/theme/themes/light.json";
import pierreDark from "@pierre/theme/themes/dark.json";

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
