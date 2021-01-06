import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Page from '@/components/Page';
import Card from '@/components/Card';
import Grid from '@/components/Grid';
import Filter from '@/components/Filter';
import Section from '@/components/Section';
import Stack from '@/components/Stack';
import Youtube from '@/components/Metrics/Youtube';
import YoutubeSubscribe from '@/components/YoutubeSubscribe';
import { getContentByType } from '@/lib/mdx';
import filterByTag from '@/lib/filterByTag';
import sortByDate from '@/lib/sortByDate';

export default function Screencasts({ screencasts }) {
  const router = useRouter();
  let tag = router.query.tagged;
  let popularScreencasts = [];
  let recentScreencasts = [];
  sortByDate(screencasts).map((screencast) => {
    if (screencast.popular === true && popularScreencasts.length < 3) {
      popularScreencasts.push(screencast);
    } else {
      recentScreencasts.push(screencast);
    }
  });
  return (
    <>
      <Page
        meta={{
          title: tag ? `Screencasts tagged ${tag}` : 'Screencasts',
          description:
            'Short front-end development tutorials for developers of all skill levels.',
        }}
      >
        <Page.Header>
          <Page.Title>Screencasts</Page.Title>
          <Page.Description>
            Short front-end development tutorials for developers of all skill
            levels.
          </Page.Description>
        </Page.Header>
        <div className="mt-8">
          <Youtube />
          <div className="mt-4 text-center">
            <YoutubeSubscribe />
          </div>
        </div>
        <Section>
          <Section.Title>Popular</Section.Title>
          <Stack>
            {popularScreencasts.map((screencast) => {
              return (
                <Stack.Item key={screencast.slug}>
                  <Card highlight>
                    <Card.Title>
                      <Link
                        as={`/screencasts/${screencast.slug}`}
                        href={`/screencasts/[slug]`}
                      >
                        <a className="transition-colors hover:text-blue">
                          {screencast.title}
                        </a>
                      </Link>
                    </Card.Title>
                    {screencast.description && (
                      <Card.Description>
                        {screencast.description}
                      </Card.Description>
                    )}
                    <Card.Tags items={screencast.tags} />
                  </Card>
                </Stack.Item>
              );
            })}
          </Stack>
        </Section>
        <div className="my-16 text-center">
          <p className="text-xl text-gray-600">
            “Alex’s tutorials are direct and to the point, while covering
            practical topics that can be useful to developers of any skill
            level.”
          </p>
          <div className="inline-flex items-center mt-8">
            <Image
              src="/images/trey-gordon.jpg"
              alt="Picture of Trey Gordon"
              width={64}
              height={64}
              className="align-top rounded-full"
            />
            <p className="ml-3 text-left">
              <strong>Trey Gordon</strong>
              <br />
              <span className="text-gray-600">Front-end Developer</span>
            </p>
          </div>
        </div>
        <Section>
          <Section.Title>Recent</Section.Title>
          <Filter tags={['CSS', 'JavaScript']} />
          <Grid>
            {filterByTag(recentScreencasts, tag).map((screencast) => {
              return (
                <Grid.Item key={screencast.slug}>
                  <Card>
                    <Card.Title>
                      <Link
                        as={`/screencasts/${screencast.slug}`}
                        href={`/screencasts/[slug]`}
                      >
                        <a className="transition-colors hover:text-blue">
                          {screencast.title}
                        </a>
                      </Link>
                    </Card.Title>
                    <Card.Tags items={screencast.tags} />
                  </Card>
                </Grid.Item>
              );
            })}
          </Grid>
        </Section>
      </Page>
    </>
  );
}

export async function getStaticProps() {
  const screencasts = await getContentByType('screencasts');
  return { props: { screencasts } };
}
