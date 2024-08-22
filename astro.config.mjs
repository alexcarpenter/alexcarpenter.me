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

// https://astro.build/config
export default defineConfig({
  site: "https://alexcarpenter.me",
  integrations: [
    sitemap(),
    tailwind({
      nesting: true,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkDefinitionList, remarkAdmonitions],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers,
      },
    },
    shikiConfig: {
      theme: "css-variables",
      transformers: [
        transformerMetaHighlight(),
        transformerMetaWordHighlight(),
      ],
    },
  },
});
