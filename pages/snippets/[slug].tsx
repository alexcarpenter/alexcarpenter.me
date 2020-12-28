import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import Article from '@/components/Article';
import MDXComponents from '@/components/MDXComponents';
import getContent from '@/lib/getContent';

export default function Snippet({ source, frontMatter, ...rest }) {
  const content = hydrate(source, { components: MDXComponents });
  return <Article frontMatter={frontMatter} content={content} {...rest} />;
}

export const getStaticProps = async ({ params }) => {
  const snippets = getContent('snippets');
  const snippetIndex = snippets.findIndex((x) => x.slug === params.slug);
  const snippet = snippets[snippetIndex];
  const { content, ...data } = snippet;

  const mdxSource = await renderToString(content, {
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
  return {
    paths: getContent('snippets').map((x) => `/snipprts/${x.slug}`),
    fallback: false,
  };
};
