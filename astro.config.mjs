import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkGfm from "remark-gfm";
import {
  remarkDefinitionList,
  defListHastHandlers,
} from "remark-definition-list";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://alexcarpenter.me",
  trailingSlash: "never",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkDefinitionList],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers,
      },
    },
  },
});
