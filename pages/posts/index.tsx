import Link from 'next/link';
import { getAllMdx } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import Badge from '@/components/Badge';
import Page from '@/components/Page';
import List from '@/components/List';

export default function Posts({ posts }) {
  return (
    <Page
      title="Posts"
      description="Thoughts on CSS architecture, React, TypeScript, design systems, and state machines."
    >
      <List>
        {posts
          .sort(
            (a, b) =>
              Number(new Date(b.frontMatter.date)) -
              Number(new Date(a.frontMatter.date)),
          )
          .map((post, index) => (
            <List.Item key={index}>
              <div className="flex flex-col sm:flex-row">
                <div className="w-28 flex-shrink-0">
                  <time
                    className="text-white text-opacity-75 mb-2 inline-block"
                    dateTime={post.frontMatter.date}
                  >
                    {formatDate(post.frontMatter.date)}
                  </time>
                </div>
                <div className="flex-1">
                  <h2>
                    <Link href={`/posts/${post.frontMatter.slug}`}>
                      <a className="underline hover:no-underline focus:no-underline">
                        {post.frontMatter.title}
                      </a>
                    </Link>
                  </h2>
                  <p className="mt-2 text-white text-opacity-75">
                    {post.frontMatter.description}
                  </p>
                  {post.frontMatter.tags && (
                    <div className="mt-4 space-x-2">
                      {post.frontMatter.tags.map((tag) => (
                        <Badge key={tag}>{`#${tag}`}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </List.Item>
          ))}
      </List>
    </Page>
  );
}

export async function getStaticProps() {
  const mdxFiles = getAllMdx('posts');
  return {
    props: {
      posts: mdxFiles,
    },
  };
}
