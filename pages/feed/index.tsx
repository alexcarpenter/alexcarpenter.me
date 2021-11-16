import { getAllMdx } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { formatDate } from '@/lib/utils';
import Page from '@/components/Page';
import List from '@/components/List';
import { components } from '@/components/Mdx';

export default function Feed({ entries }) {
  return (
    <Page
      title="Feed"
      description="Notes, bookmarks, updates, code snippets, inspiration, etc."
    >
      <List>
        {entries
          .sort(
            (a, b) =>
              Number(new Date(b.frontMatter.date)) -
              Number(new Date(a.frontMatter.date)),
          )
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
                    <time dateTime={entry.frontMatter.date}>
                      {formatDate(entry.frontMatter.date, 'full')}
                    </time>
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

  async function serializeMdxFile(item) {
    const { frontMatter, content } = item;
    const mdx = await serialize(content);
    return {
      frontMatter,
      mdx,
    };
  }

  return {
    props: {
      entries: await Promise.all(mdxFiles.map((f) => serializeMdxFile(f))),
    },
  };
}
