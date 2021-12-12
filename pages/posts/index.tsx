import Link from '@/components/Link';
import { getAllMdx } from '@/lib/mdx';
import Entry from '@/components/Entry';
import Page from '@/components/Page';
import List from '@/components/List';

export default function Posts({ posts }) {
  return (
    <Page
      title="Posts"
      description={
        <>
          Thoughts on{' '}
          <Link className="underline hover:no-underline" href="/tagged/css">
            CSS architecture
          </Link>
          ,{' '}
          <Link className="underline hover:no-underline" href="/tagged/react">
            React
          </Link>
          , TypeScript, design systems, and state machines.
        </>
      }
      image="posts.png"
    >
      <List>
        {posts
          .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
          .map((post, index) => {
            const { date, title, description, slug, tags } = post;
            return (
              <List.Item key={index}>
                <Entry
                  date={date}
                  title={title}
                  description={description}
                  link={`/posts/${slug}`}
                  tags={tags}
                />
              </List.Item>
            );
          })}
      </List>
    </Page>
  );
}

export async function getStaticProps() {
  const mdxFiles = getAllMdx('posts').map((post) => post['frontMatter']);
  return {
    props: {
      posts: mdxFiles,
    },
  };
}
