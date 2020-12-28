import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import Article from '@/components/Article';
import MDXComponents from '@/components/MDXComponents';
import getContent from '@/lib/getContent';

export default function Post({ source, frontMatter, ...rest }) {
  const content = hydrate(source, { components: MDXComponents });
  return <Article frontMatter={frontMatter} content={content} {...rest} />;
}

export const getServerSideProps = async ({ params }) => {
  const posts = getContent('posts');
  const postIndex = posts.findIndex((x) => x.slug === params.slug);
  const post = posts[postIndex];
  const { content, ...data } = post;

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
