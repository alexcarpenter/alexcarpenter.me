import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import {
  remarkDefinitionList,
  defListHastHandlers,
} from "remark-definition-list";
import remarkAdmonitions from "remark-github-beta-blockquote-admonitions";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://alexcarpenter.me",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkDefinitionList, remarkAdmonitions],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers,
      },
    },
    shikiConfig: {
      experimentalThemes: {
        light: "min-light",
        dark: "min-dark",
      },
    },
  },
});
