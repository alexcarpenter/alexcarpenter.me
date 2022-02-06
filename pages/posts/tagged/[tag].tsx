import type { GetStaticPaths, GetStaticProps } from 'next/types';
import type { PostFrontMatter } from '@/lib/posts';
import type { GroupByYear } from '@/lib/utils';
import { ParsedUrlQuery } from 'querystring';
import { groupByYear, slugify } from '@/lib/utils';
import { getAllPosts } from '@/lib/posts';
import Intro from '@/components/Intro';
import Section from '@/components/Section';
import EntryList from '@/components/EntryList';
import Entry from '@/components/Entry';

interface ContextProps extends ParsedUrlQuery {
  tag: string;
}

type PostsTaggedProps = {
  tag: string;
  posts: GroupByYear<PostFrontMatter>;
};

const PostsTagged = ({ tag, posts }: PostsTaggedProps) => {
  return (
    <>
      <Intro title="Posts" description={`Tagged with "${tag}"`} />

      {Object.entries(posts)
        .reverse()
        .map(([year, yearPosts]) => {
          return (
            <Section key={year} heading={year}>
              <EntryList>
                {yearPosts.map((post, index) => {
                  const link = `/posts/${post.slug}`;
                  return (
                    <Entry
                      key={index}
                      link={link}
                      date={post.date}
                      title={post.title}
                      description={post.description}
                      tags={post.tags?.map((tag) => {
                        return {
                          path: `/posts/tagged/${slugify(tag)}`,
                          tag: tag,
                        };
                      })}
                    />
                  );
                })}
              </EntryList>
            </Section>
          );
        })}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  return {
    paths: Array.from(new Set(posts.map((post) => post.tags).flat())).map(
      (tag) => {
        return {
          params: {
            tag: slugify(tag!),
          },
        };
      },
    ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { tag } = context.params as ContextProps;
  const filteredPosts = getAllPosts().filter((post) => {
    return post.tags?.includes(tag);
  });
  const groupedPosts = groupByYear<PostFrontMatter>(filteredPosts);
  return {
    props: {
      title: 'Posts',
      tag,
      posts: groupedPosts,
    },
  };
};

export default PostsTagged;
