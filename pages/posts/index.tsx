import { getAllMdx } from '@/lib/mdx';
import Entry from '@/components/Entry';
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
          .map((post, index) => {
            const { date, title, description, slug, tags } = post.frontMatter;
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
  const mdxFiles = getAllMdx('posts');
  return {
    props: {
      posts: mdxFiles,
    },
  };
}
