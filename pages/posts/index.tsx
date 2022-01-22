import type { NextPage } from 'next';
import type { MDXFrontMatter } from 'types';
import Link from '@/components/Link';
import { getAllMdx } from '@/lib/mdx';
import Entry from '@/components/Entry';
import Page from '@/components/Page';
import List from '@/components/List';
import Section from '@/components/Section';

type PostProps = NextPage & {
  posts: Array<MDXFrontMatter>;
};

export default function Posts({ posts }: PostProps) {
  const orderedPosts = posts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .reduce((sections, currentValue) => {
      const year = new Date(currentValue.date).getFullYear().toString();
      if (sections[year] != undefined) {
        sections[year].push(currentValue);
      } else {
        sections[year] = [currentValue];
      }

      return sections;
    }, {} as Record<string, Array<MDXFrontMatter>>);

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
      {Object.entries(orderedPosts)
        .sort()
        .reverse()
        .map(([year, posts]) => {
          return (
            <Section key={year} heading={year} headingGap="lg">
              <List>
                {posts.map((post, index) => {
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
            </Section>
          );
        })}
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
