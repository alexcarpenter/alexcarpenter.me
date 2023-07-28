import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `./*.mdx`,
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
    published: {
      type: "date",
      required: true,
    },
    updated: {
      type: "date",
      required: false,
    },
    pinned: {
      type: "boolean",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

const rehypePrettyCodeOptions = {
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
  contentDirPath: "./content",
  documentTypes: [Page],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
});
