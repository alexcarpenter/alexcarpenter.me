import { GetStaticProps, NextPage } from 'next';
import type { PostFrontMatter } from '@/lib/posts';
import { getAllPosts } from '@/lib/posts';
import { groupByYear, slugify } from '@/lib/utils';
import pageData from '@/data/posts.json';
import Intro from '@/components/Intro';
import EntryList from '@/components/EntryList';
import Entry from '@/components/Entry';
import Section from '@/components/Section';

type PostsProps = {
  title: string;
  description: string;
  posts: Array<PostFrontMatter>;
};

const Post: NextPage<PostsProps> = ({ title, description, posts }) => {
  const groupedPosts = groupByYear<PostFrontMatter>(posts);
  return (
    <>
      <Intro title={title} description={description} />
      {Object.entries(groupedPosts)
        .reverse()
        .map(([year, posts]) => {
          return (
            <Section key={year} heading={year}>
              <EntryList>
                {posts.map((post, index) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      ...pageData,
      posts,
    },
  };
};

export default Post;
