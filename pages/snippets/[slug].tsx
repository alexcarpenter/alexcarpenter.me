import hydrate from 'next-mdx-remote/hydrate';
import Article from '@/components/Article';
import MDXComponents from '@/components/MDXComponents';
import { getContentByType, getContentBySlug } from '@/lib/mdx';

export default function Snippet({ frontMatter, source }) {
  const content = hydrate(source, { components: MDXComponents });
  return <Article frontMatter={frontMatter} content={content} />;
}

export async function getStaticProps({ params }) {
  const snippets = await getContentBySlug(params.slug, 'snippets');
  return { props: snippets };
}

export async function getStaticPaths() {
  const snippets = await getContentByType('snippets');
  return {
    paths: snippets.map((s) => ({
      params: {
        slug: s.slug,
      },
    })),
    fallback: false,
  };
}
