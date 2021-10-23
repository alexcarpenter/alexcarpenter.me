import { getAllMdx } from '@/lib/mdx';
import { slugify } from '@/lib/utils';
import Entry from '@/components/Entry';
import Page from '@/components/Page';
import List from '@/components/List';
import bookmarks from '@/data/bookmarks';
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
          .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
          .map((post, index) => {
            const { date, title, description, slug, link, tags } = post;
            return (
              <List.Item key={index}>
                <Entry
                  date={date}
                  title={title}
                  description={description}
                  link={link ? link : `/posts/${slug}`}
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
      // @ts-ignore
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
  const posts = getAllMdx('posts').map((post) => post['frontMatter']);
  return {
    props: {
      slug,
      bookmarks,
      posts: [...posts, ...bookmarks].filter((post) =>
        // @ts-ignore
        post.tags.includes(slug),
      ),
    },
  };
}
