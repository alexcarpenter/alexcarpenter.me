import { useRouter } from 'next/router';
import filterByTag from '@/lib/filterByTag';
import Card from '@/components/Card';
import Filter from '@/components/Filter';
import Grid from '@/components/Grid';
import Link from 'next/link';
import Page from '@/components/Page';
import ExternalLink from '@/components/ExternalLink';
import Section from '@/components/Section';
import { Rss } from 'react-feather';
import { getContentByType } from '@/lib/mdx';

export default function Posts({ posts }) {
  const router = useRouter();
  let tag = router.query.tagged;
  return (
    <Page
      meta={{
        title: tag ? `Posts tagged ${tag}` : 'Posts',
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
        <ExternalLink href="https://alexcarpenter/feed.xml" icon={Rss}>
          Subscribe via RSS
        </ExternalLink>
      </Page.Header>
      <Section>
        <Section.Title>Recent</Section.Title>
        <Filter tags={['CSS', 'JavaScript']} />
        <Grid>
          {filterByTag(posts, tag).map((post) => (
            <Grid.Item key={post.slug}>
              <Card>
                <Card.Title>
                  <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                    <a>{post.title}</a>
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
  return { props: { posts } };
}
