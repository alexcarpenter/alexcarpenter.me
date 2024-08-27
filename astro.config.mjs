import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// Remark plugins
import {
  remarkDefinitionList,
  defListHastHandlers,
} from "remark-definition-list";
import remarkAdmonitions from "remark-github-beta-blockquote-admonitions";
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
} from "@shikijs/transformers";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://alexcarpenter.me",
  integrations: [
    sitemap(),
    tailwind({
      nesting: true,
    }),
    icon(),
  ],
  markdown: {
    remarkPlugins: [remarkDefinitionList, remarkAdmonitions],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers,
      },
    },
    shikiConfig: {
      theme: "github-dark-default",
      transformers: [
        transformerMetaHighlight(),
        transformerMetaWordHighlight(),
      ],
    },
  },
});
