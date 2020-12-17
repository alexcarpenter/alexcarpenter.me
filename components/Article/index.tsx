import Link from "next/link";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Page from "@/components/Page";
import Stack from "@/components/Stack";
import YoutubeSubscribe from "@/components/YoutubeSubscribe";
import YoutubeVideo from "@/components/YoutubeVideo";

export default function Post(props) {
  const { frontMatter, content, next, previous } = props;
  const showPagination = next || previous;

  return (
    <Page {...frontMatter}>
      <article>
        <Header>
          <Header.Title decorate={false}>{frontMatter.title}</Header.Title>
          {frontMatter.description && (
            <Header.Description>{frontMatter.description}</Header.Description>
          )}
        </Header>
        {frontMatter.youtubeId && (
          <div className='my-8'>
            <div className='lg:-mx-16'>
              <YoutubeVideo id={frontMatter.youtubeId} />
            </div>
            <div className='mt-4 text-center'>
              <YoutubeSubscribe />
            </div>
          </div>
        )}
        <div className='mt-4 space-y-3'>{content}</div>
        {!!showPagination && (
            <div className='mt-8 pt-8 border-t'>
              <Stack grid>
                {previous && (
                  <Stack.Item>
                    <Card>
                      <Card.Eyebrow as='p'>Previous</Card.Eyebrow>
                      <Card.Title>
                        <Link
                          as={`/screencasts/${previous.slug}`}
                          href={`/screencasts/[slug]`}
                        >
                          <a className='hover:text-blue transition-colors'>
                            {previous.title}
                          </a>
                        </Link>
                      </Card.Title>
                    </Card>
                  </Stack.Item>
                )}
                {next && (
                  <Stack.Item>
                    <Card>
                      <Card.Eyebrow as='p'>Next</Card.Eyebrow>
                      <Card.Title>
                        <Link
                          as={`/screencasts/${next.slug}`}
                          href={`/screencasts/[slug]`}
                        >
                          <a className='hover:text-blue transition-colors'>
                            {next.title}
                          </a>
                        </Link>
                      </Card.Title>
                    </Card>
                  </Stack.Item>
                )}
              </Stack>
            </div>
          )}
      </article>
    </Page>
  );
}
