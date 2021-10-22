import { getAllMdx } from '@/lib/mdx';
import { slugify } from '@/lib/utils';
import Entry from '@/components/Entry';
import Page from '@/components/Page';
import List from '@/components/List';
import { featuredTags } from '.';

export default function SearchTag({ slug, posts }) {
  const featuredTag = featuredTags.find((tag) => tag.slug === slug);
  return (
    <Page
      title={`Search: ${featuredTag ? featuredTag.heading : slug}`}
      description={featuredTag ? featuredTag.description : ''}
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

export async function getStaticPaths() {
  const posts = getAllMdx('posts');
  return {
    paths: Array.from(
      new Set(posts.map((post) => post.frontMatter.tags).flat()),
    ).map((tag) => {
      return {
        params: {
          slug: slugify(tag),
          posts,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  return {
    props: {
      slug,
      posts: getAllMdx('posts').filter((post) =>
        post.frontMatter.tags.includes(slug),
      ),
    },
  };
}
