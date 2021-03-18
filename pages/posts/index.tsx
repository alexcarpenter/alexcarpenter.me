import Card from '@/components/Card';
import Grid from '@/components/Grid';
import Link from 'next/link';
import Page from '@/components/Page';
import ExternalLink from '@/components/ExternalLink';
import Section from '@/components/Section';
import { Rss } from 'react-feather';
import { getContentByType } from '@/lib/mdx';

export default function Posts({ posts }) {
  return (
    <Page
      meta={{
        title: 'Posts',
        description:
          'Thoughts on CSS architecture, React, TypeScript, design systems, and state machines.',
      }}
    >
      <Page.Header>
        <Page.Title>Posts</Page.Title>
        <Page.Description>
          Thoughts on CSS architecture, React, TypeScript, design systems, and
          state machines.
        </Page.Description>
        <ExternalLink href="https://alexcarpenter.me/feed.xml" icon={Rss}>
          Subscribe via RSS
        </ExternalLink>
      </Page.Header>
      <Section>
        <Section.Title>Recent</Section.Title>
        <Grid cols={1} colsSm={2}>
          {posts.map((post) => (
            <Grid.Item key={post.slug}>
              <Card>
                <Card.Title>
                  <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                    <a className="inline-block transition-colors hover:text-blue">
                      {post.title}
                    </a>
                  </Link>
                </Card.Title>
                <Card.Tags items={post.tags} />
              </Card>
            </Grid.Item>
          ))}
        </Grid>
      </Section>
    </Page>
  );
}

export async function getStaticProps() {
  const posts = await getContentByType('posts');
  return {
    props: {
      posts: posts.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
      ),
    },
  };
}
