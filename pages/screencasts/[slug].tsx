import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import Article from '@/components/Article';
import MDXComponents from '@/components/MDXComponents';
import getContent from '@/lib/getContent';

export default function Screencast({ source, frontMatter, ...rest }) {
  const content = hydrate(source, { components: MDXComponents });
  return <Article frontMatter={frontMatter} content={content} {...rest} />;
}

export const getServerSideProps = async ({ params }) => {
  const screencasts = getContent('screencasts');
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
