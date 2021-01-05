import Link from 'next/link';
import { useRouter } from 'next/router';
import Filter from '@/components/Filter';
import Card from '@/components/Card';
import Page from '@/components/Page';
import Stack from '@/components/Stack';
import getContent from '@/lib/getContent';

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
        <Stack grid>
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
                <Stack.Item key={snippet.slug}>
                  <Card>
                    <Card.Title>
                      <Link
                        as={`/snippets/${snippet.slug}`}
                        href={`/snippets/[slug]`}
                      >
                        <a className="transition-colors hover:text-blue">
                          {snippet.title}
                        </a>
                      </Link>
                    </Card.Title>
                    <Card.Tags items={snippet.tags} />
                  </Card>
                </Stack.Item>
              );
            })}
        </Stack>
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  const snippets = getContent('snippets');
  return { props: { snippets } };
}
