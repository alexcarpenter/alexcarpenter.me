import slugify from "@sindresorhus/slugify";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import fs from "fs";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: false,
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Job = defineDocumentType(() => ({
  name: "Job",
  filePathPattern: `experience/*.mdx`,
  contentType: "mdx",
  fields: {
    company: {
      type: "string",
      required: true,
    },
    startDate: {
      type: "date",
      required: true,
    },
    endDate: {
      type: "date",
      required: false,
    },
    title: {
      type: "string",
      required: true,
    },
    location: {
      type: "string",
      required: false,
    },
    link: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: false,
    },
  },
}));

export const Recommendation = defineDocumentType(() => ({
  name: "Recommendation",
  filePathPattern: `recommendations/*.mdx`,
  contentType: "mdx",
  fields: {
    date: {
      type: "date",
      required: true,
    },
    company: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    text: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    avatar: {
      type: "string",
      resolve: (r) => {
        return `/img/${slugify(r.name)}.jpeg`;
      },
    },
  },
}));

export const Event = defineDocumentType(() => ({
  name: "Event",
  filePathPattern: `events/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    link: {
      type: "string",
      required: false,
    },
  },
  computedFields: {
    date: {
      type: "date",
      resolve: (e) => {
        return e._raw.sourceFileName.replace(/\.mdx$/, "");
      },
    },
  },
}));

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: {
    light: "github-light",
    dark: "github-dark",
  },
  tokensMap: {
    // VScode command palette: Inspect Editor Tokens and Scopes
    // https://github.com/Binaryify/OneDark-Pro/blob/47c66a2f2d3e5c85490e1aaad96f5fab3293b091/themes/OneDark-Pro.json
    fn: "entity.name.function",
    objKey: "meta.object-literal.key",
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
    node.properties.className.push("syntax-line");
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("syntax-line--highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["syntax-word--highlighted"];
  },
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Event, Job, Post, Recommendation],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeAccessibleEmojis,
    ],
  },
});
