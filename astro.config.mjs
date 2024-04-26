import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// Remark plugins
import {
  remarkDefinitionList,
  defListHastHandlers,
} from "remark-definition-list";
import remarkAdmonitions from "remark-github-beta-blockquote-admonitions";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://alexcarpenter.me",
  integrations: [sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [
      remarkDefinitionList,
      remarkAdmonitions,
      remarkModifiedTime,
    ],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers,
      },
    },
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
