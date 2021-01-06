import hydrate from 'next-mdx-remote/hydrate';
import Article from '@/components/Article';
import MDXComponents from '@/components/MDXComponents';
import { getContentByType, getContentBySlug } from '@/lib/mdx';

export default function Post({ frontMatter, source }) {
  const content = hydrate(source, { components: MDXComponents });
  return <Article frontMatter={frontMatter} content={content} />;
}

export async function getStaticProps({ params }) {
  const post = await getContentBySlug(params.slug, 'posts');
  return { props: post };
}

export async function getStaticPaths() {
  const posts = await getContentByType('posts');
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.slug,
      },
    })),
    fallback: false,
  };
}
