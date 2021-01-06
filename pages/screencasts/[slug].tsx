import hydrate from 'next-mdx-remote/hydrate';
import Article from '@/components/Article';
import MDXComponents from '@/components/MDXComponents';
import { getContentByType, getContentBySlug } from '@/lib/mdx';

export default function Screencast({ source, frontMatter, ...rest }) {
  const content = hydrate(source, { components: MDXComponents });
  return <Article frontMatter={frontMatter} content={content} {...rest} />;
}

export async function getStaticProps({ params }) {
  const screencasts = await getContentByType('screencasts');
  const screencastIndex = screencasts.findIndex((s) => s.slug === params.slug);
  const screencast = await getContentBySlug(params.slug, 'screencasts');
  return {
    props: {
      ...screencast,
      previous: screencasts[screencastIndex + 1] || null,
      next: screencasts[screencastIndex - 1] || null,
    },
  };
}

export async function getStaticPaths() {
  const screencasts = await getContentByType('screencasts');
  return {
    paths: screencasts.map((s) => ({
      params: {
        slug: s.slug,
      },
    })),
    fallback: false,
  };
}
