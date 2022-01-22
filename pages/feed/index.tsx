import type { NextPage } from 'next';
import type { MDXFrontMatter } from 'types';
import Link from 'next/link';
import { getAllMdx } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { formatDate } from '@/lib/utils';
import Page from '@/components/Page';
import List from '@/components/List';
import { components } from '@/components/Mdx';

type FeedProps = NextPage & {
  entries: Array<
    MDXFrontMatter & {
      mdx: any;
    }
  >;
};

export default function Feed({ entries }: FeedProps) {
  return (
    <Page
      title="Feed"
      description="Notes, bookmarks, updates, code snippets, inspiration, etc."
      image="feed.png"
    >
      <List>
        {entries
          .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
          .map((entry, index) => {
            const source = entry.mdx;
            return (
              <List.Item key={index}>
                <article>
                  <div className="prose">
                    <MDXRemote {...source} components={components} />
                  </div>
                  <p className="mt-6 text-sm textSecondary">
                    &mdash;{' '}
                    <Link href={`/feed/${entry.slug}`}>
                      <a className="underline hover:no-underline">
                        <time dateTime={entry.date}>
                          {formatDate(entry.date, 'full')}
                        </time>
                      </a>
                    </Link>
                  </p>
                </article>
              </List.Item>
            );
          })}
      </List>
    </Page>
  );
}

export async function getStaticProps() {
  const mdxFiles = getAllMdx('feed');

  async function serializeMdxFile(item: {
    frontMatter: MDXFrontMatter;
    content: any;
  }) {
    const { frontMatter, content } = item;
    const mdx = await serialize(content);
    return {
      ...frontMatter,
      mdx,
    };
  }

  return {
    props: {
      entries: await Promise.all(mdxFiles.map((f) => serializeMdxFile(f))),
    },
  };
}
