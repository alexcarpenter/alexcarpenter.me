import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
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
      title="Snippets"
      description="Writing it down so I remember it later."
    >
      <Header>
        <Header.Title>Snippets</Header.Title>
      </Header>
      <div className="mt-8">
        <Filter
          pathname="/snippets"
          tags={['CSS', 'JavaScript', 'React']}
          activeTag={tag}
        />
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
                        <a className="hover:text-blue transition-colors">
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
