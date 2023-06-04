import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";

////////////////////////////////////////////////////////////////////////////////
// Activities

export const Activity = defineDocumentType(() => ({
  name: "Activity",
  filePathPattern: `activities/*.mdx`,
  contentType: "mdx",
  fields: {
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

////////////////////////////////////////////////////////////////////////////////
// Bookmarks

const Bookmark = defineDocumentType(() => ({
  name: "Bookmark",
  filePathPattern: `bookmarks/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    url: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    hostname: {
      type: "string",
      resolve: (bookmark) => new URL(bookmark.url).hostname,
    },
  },
}));

////////////////////////////////////////////////////////////////////////////////
// Favorites

export const Favorite = defineDocumentType(() => ({
  name: "Favorite",
  filePathPattern: `favorites/*.mdx`,
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
    update: {
      type: "date",
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

////////////////////////////////////////////////////////////////////////////////
// Jobs

const Event = defineNestedType(() => ({
  name: "Event",
  fields: {
    heading: {
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
    link: {
      type: "string",
      required: false,
    },
  },
}));

export const Job = defineDocumentType(() => ({
  name: "Job",
  filePathPattern: `jobs/*.mdx`,
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
    logo: {
      type: "string",
      required: false,
    },
    timeline: {
      type: "list",
      of: Event,
      required: false,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    currently: {
      type: "string",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (job) => job._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

////////////////////////////////////////////////////////////////////////////////
// Pages

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/*.mdx`,
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
    updated: {
      type: "date",
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

////////////////////////////////////////////////////////////////////////////////
// Posts

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

////////////////////////////////////////////////////////////////////////////////
// Recommendations

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
    link: {
      type: "string",
      required: true,
    },
  },
}));

////////////////////////////////////////////////////////////////////////////////
// Rehype Pretty Code

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
  documentTypes: [
    Activity,
    Bookmark,
    Favorite,
    Job,
    Page,
    Post,
    Recommendation,
  ],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
});
