import Link from 'next/link';
import Card from '@/components/Card';
import Page from '@/components/Page';
import Grid from '@/components/Grid';
import YoutubeSubscribe from '@/components/YoutubeSubscribe';
import YoutubeVideo from '@/components/YoutubeVideo';
import ViewCounter from '@/components/ViewCounter';
import Separator from '../Separator';

export default function Article(props) {
  const { frontMatter, content, next, previous } = props;
  const showPagination = next || previous;
  const showMeta = frontMatter.type !== 'snippets';
  const showDescription =
    frontMatter.description && frontMatter.type !== 'posts';

  return (
    <Page
      meta={{
        title: frontMatter.title,
        description: frontMatter.description,
      }}
    >
      <article>
        <Page.Header>
          {showMeta && (
            <p className="font-mono text-gray-600 text-sm">
              {frontMatter.publishedAt} <Separator />{' '}
              <ViewCounter slug={frontMatter.slug} />
            </p>
          )}
          <Page.Title decorate={false}>{frontMatter.title}</Page.Title>
          {showDescription && (
            <Page.Description>{frontMatter.description}</Page.Description>
          )}
        </Page.Header>
        {frontMatter.youtubeId && (
          <div className="my-8">
            <div className="lg:-mx-16">
              <YoutubeVideo id={frontMatter.youtubeId} />
            </div>
            <div className="mt-4 text-center">
              <YoutubeSubscribe />
            </div>
          </div>
        )}
        {content && <Page.Content>{content}</Page.Content>}
        {!!showPagination && (
          <div className="pt-8 mt-8 border-t">
            <Grid cols={1} colsSm={2}>
              {previous && (
                <Grid.Item>
                  <Card>
                    <Card.Eyebrow as="p">Previous</Card.Eyebrow>
                    <Card.Title>
                      <Link
                        as={`/screencasts/${previous.slug}`}
                        href={`/screencasts/[slug]`}
                      >
                        <a className="inline-block transition-colors hover:text-blue">
                          {previous.title}
                        </a>
                      </Link>
                    </Card.Title>
                  </Card>
                </Grid.Item>
              )}
              {next && (
                <Grid.Item>
                  <Card>
                    <Card.Eyebrow as="p">Next</Card.Eyebrow>
                    <Card.Title>
                      <Link
                        as={`/screencasts/${next.slug}`}
                        href={`/screencasts/[slug]`}
                      >
                        <a className="inline-block transition-colors hover:text-blue">
                          {next.title}
                        </a>
                      </Link>
                    </Card.Title>
                  </Card>
                </Grid.Item>
              )}
            </Grid>
          </div>
        )}
      </article>
    </Page>
  );
}
