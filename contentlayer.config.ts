import slugify from "@sindresorhus/slugify";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

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

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Job, Post, Recommendation],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeCodeTitles, rehypePrism, rehypeAccessibleEmojis],
  },
});
