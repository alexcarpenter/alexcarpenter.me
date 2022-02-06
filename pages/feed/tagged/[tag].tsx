import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import type { FeedFrontMatter } from '@/lib/feed';
import { getAllFeed, serializeMdxContent } from '@/lib/feed';
import { cx, formatDate, slugify } from '@/lib/utils';
import pageData from '@/data/feed.json';
import Intro from '@/components/Intro';
import EntryList from '@/components/EntryList';
import Prose from '@/components/Prose';
import { MDXRemote } from 'next-mdx-remote';
import { components } from '@/components/MDXComponents';
import Link from 'next/link';

interface ContextProps extends ParsedUrlQuery {
  tag: string;
}

type FeedProps = {
  tag: string;
  items: Array<{
    frontMatter: FeedFrontMatter;
    mdx: any;
  }>;
};

const FeedTagged: NextPage<FeedProps> = ({ tag, items }) => {
  return (
    <>
      <Intro title="Feed" description={`Tagged with "${tag}"`} />

      <EntryList>
        {items
          .sort(
            (a, b) =>
              Number(new Date(b.frontMatter.date)) -
              Number(new Date(a.frontMatter.date)),
          )
          .map((item, index) => {
            const source = item.mdx;
            return (
              <article key={index}>
                <Prose>
                  <MDXRemote {...source} components={components} />
                </Prose>
                <p
                  className={cx(
                    'mt-6 text-sm',
                    'text-gray-600',
                    'dark:text-gray-300',
                  )}
                >
                  &mdash;{' '}
                  <Link href={`/feed/${item.frontMatter.slug}`}>
                    <a className="underline hover:no-underline">
                      <time dateTime={item.frontMatter.date}>
                        {formatDate(item.frontMatter.date, 'full')}
                      </time>
                    </a>
                  </Link>
                </p>
              </article>
            );
          })}
      </EntryList>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const items = getAllFeed();
  return {
    paths: Array.from(
      new Set(items.map((item) => item.frontMatter.tags).flat()),
    )
      .filter(Boolean)
      .map((tag) => {
        return {
          params: {
            tag: slugify(tag!),
          },
        };
      }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { tag } = context.params as ContextProps;
  const filteredItems = getAllFeed().filter((item) => {
    return item.frontMatter.tags?.includes(tag);
  });
  return {
    props: {
      title: 'Feed',
      tag,
      items: await Promise.all(
        filteredItems.map((f) => serializeMdxContent(f)),
      ),
    },
  };
};

export default FeedTagged;
