import type { GetStaticPaths, GetStaticProps } from 'next/types';
import type { FeedFrontMatter } from '@/lib/feed';
import { ParsedUrlQuery } from 'querystring';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { cx, formatDate } from '@/lib/utils';
import { getAllFeed, getFeedItem } from '@/lib/feed';
import { components } from '@/components/MDXComponents';
import Prose from '@/components/Prose';

interface ContextProps extends ParsedUrlQuery {
  slug: string;
}

type FeedPageProps = {
  frontMatter: FeedFrontMatter;
  mdx: any;
};

const FeedPage: React.FC<FeedPageProps> = ({ frontMatter, mdx }) => {
  return (
    <>
      <Prose>
        <MDXRemote {...mdx} components={components} />
      </Prose>
      <p className={cx('mt-6 text-sm', 'text-gray-600', 'dark:text-gray-300')}>
        &mdash;{' '}
        <time dateTime={frontMatter.date}>
          {formatDate(frontMatter.date, 'full')}
        </time>{' '}
        <span role="separator" aria-orientation="vertical">
          &#183;
        </span>{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={`https://twitter.com/search?${new URLSearchParams({
            q: `https://alexcarpenter.me/feed/${frontMatter.slug}`,
          })}`}
          className="underline hover:no-underline"
        >
          Discuss on Twitter
        </a>
      </p>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const items = getAllFeed();
  return {
    paths: items.map((item) => ({
      params: { slug: item.frontMatter.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as ContextProps;
  const { frontMatter, content } = getFeedItem(`${slug}.mdx`);

  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: frontMatter,
  });

  return {
    props: {
      title: `Posted ${formatDate(frontMatter.date, 'full')}`,
      frontMatter,
      mdx: mdxContent,
    },
  };
};

export default FeedPage;
