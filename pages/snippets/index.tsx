import Link from 'next/link';
import { useRouter } from 'next/router';
import Filter from '@/components/Filter';
import Card from '@/components/Card';
import Page from '@/components/Page';
import Grid from '@/components/Grid';
import { getContentByType } from '@/lib/mdx';

export default function Snippets({ snippets }) {
  const router = useRouter();
  let tag = router.query.tagged;
  return (
    <Page
      meta={{
        title: tag ? `Snippets tagged ${tag}` : 'Snippets',
        description: 'Writing it down so I remember it later.',
      }}
    >
      <Page.Header>
        <Page.Title>Snippets</Page.Title>
      </Page.Header>
      <div className="mt-8">
        <Filter tags={['CSS', 'JavaScript', 'React']} />
        <Grid cols={1} colsSm={2}>
          {snippets
            .filter((snippet) => {
              if (!tag) {
                return snippet;
              } else {
                return snippet.tags.map((c) => c.toLowerCase()).includes(tag);
              }
            })
            .map((snippet) => {
              return (
                <Grid.Item key={snippet.slug}>
                  <Card>
                    <Card.Title>
                      <Link
                        as={`/snippets/${snippet.slug}`}
                        href={`/snippets/[slug]`}
                      >
                        <a className="inline-block transition-colors hover:text-blue">
                          {snippet.title}
                        </a>
                      </Link>
                    </Card.Title>
                    <Card.Tags items={snippet.tags} />
                  </Card>
                </Grid.Item>
              );
            })}
        </Grid>
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  const snippets = await getContentByType('snippets');
  return { props: { snippets } };
}
