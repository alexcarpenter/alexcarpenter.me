import sitemap from "@astrojs/sitemap";
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import {
  remarkDefinitionList,
  defListHastHandlers,
} from "remark-definition-list";

export default defineConfig({
  site: "https://alexcarpenter.me",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), icon()],
  markdown: {
    remarkPlugins: [remarkDefinitionList],
    remarkRehype: { handlers: defListHastHandlers },
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
    },
  },
});
