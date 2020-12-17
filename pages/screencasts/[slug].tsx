import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import path from "path";
import { screencastFilePaths, SCREENCASTS_PATH } from "../../lib/mdxUtils";
import Article from "@/components/Article";
import MDXComponents from "@/components/MDXComponents";
import getContent from "@/lib/getContent";

export default function Screencast({ source, frontMatter, ...rest }) {
  const content = hydrate(source, { components: MDXComponents });
  return <Article frontMatter={frontMatter} content={content} {...rest} />;
}

export const getStaticProps = async ({ params }) => {
  const screencasts = getContent("screencasts");
  const screencastIndex = screencasts.findIndex((x) => x.slug === params.slug);
  const screencast = screencasts[screencastIndex];
  const { content, ...data } = screencast;

  const mdxSource = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      previous: screencasts[screencastIndex + 1] || null,
      next: screencasts[screencastIndex - 1] || null,
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: getContent("screencasts").map((x) => `/screencasts/${x.slug}`),
    fallback: false,
  };
};
