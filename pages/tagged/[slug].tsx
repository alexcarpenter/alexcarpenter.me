import { getAllMdx } from '@/lib/mdx';
import { slugify } from '@/lib/utils';
import Entry from '@/components/Entry';
import List from '@/components/List';
import Page from '@/components/Page';

const FEATURED_TAGS = {
  edc: {
    title: 'Everyday carry',
    description: '',
  },
  'framer-motion': {
    title: 'Framer Motion',
    description: '',
  },
};

export default function Tagged({ slug, posts }) {
  const featuredTag = FEATURED_TAGS[slug];
  return (
    <Page
      title={`Tagged: ${featuredTag ? featuredTag.title : slug}`}
      description={featuredTag ? featuredTag.description : ''}
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

export async function getStaticPaths() {
  const mdxFiles = getAllMdx('posts').map((post) => post['frontMatter']);
  return {
    paths: Array.from(
      // @ts-ignore
      new Set(mdxFiles.map((file) => file.tags).flat()),
    ).map((tag) => {
      return {
        params: {
          slug: slugify(tag),
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const mdxFiles = getAllMdx('posts').map((post) => post['frontMatter']);
  return {
    props: {
      slug,
      posts: mdxFiles.filter((file) => {
        // @ts-ignore
        return file.tags.includes(slug);
      }),
    },
  };
}
