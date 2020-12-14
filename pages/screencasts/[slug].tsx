import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
// import prism from "mdx-prism";
import path from "path";
import { screencastFilePaths, SCREENCASTS_PATH } from "../../lib/mdxUtils";
import Article from "@/components/Article";
import MDXComponents from "@/components/MDXComponents";

export default function Screencast({ source, frontMatter }) {
  const content = hydrate(source, { components: MDXComponents });
  return <Article frontMatter={frontMatter} content={content} />;
}

export const getStaticProps = async ({ params }) => {
  const screencastFilePath = path.join(SCREENCASTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(screencastFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = screencastFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
