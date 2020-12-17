import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Page from "@/components/Page";
import Stack from "@/components/Stack";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Youtube from "@/components/Metrics/Youtube";
import YoutubeSubscribe from "@/components/YoutubeSubscribe";
import getContent from "@/lib/getContent";

export default function Screencasts({ screencasts }) {
  const router = useRouter();
  let tag = router.query.tagged;
  let popularScreencasts = [];
  let recentScreencasts = [];
  screencasts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    )
    .map((screencast) => {
      if (screencast.popular === true && popularScreencasts.length < 3) {
        popularScreencasts.push(screencast);
      } else {
        recentScreencasts.push(screencast);
      }
    });
  return (
    <>
      <Page
        title='Screencasts'
        description='Short front-end development tutorials for developers of all skill levels.'
      >
        <Header>
          <Header.Title>Screencasts</Header.Title>
          <Header.Description>
            Short front-end development tutorials for developers of all skill
            levels.
          </Header.Description>
        </Header>
        <div className='mt-8'>
          <Youtube />
          <div className='mt-4 text-center'>
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
                        <a className='hover:text-blue transition-colors'>
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
        <div className='my-16 text-center'>
          <p className='text-xl text-gray-600'>
            “Alex’s tutorials are direct and to the point, while covering
            practical topics that can be useful to developers of any skill
            level.”
          </p>
          <div className='inline-flex items-center mt-8'>
            <Image
              src='/trey-gordon.jpg'
              alt='Picture of Trey Gordon'
              width={64}
              height={64}
              className='rounded-full align-top'
            />
            <p className='ml-3 text-left'>
              <strong>Trey Gordon</strong>
              <br />
              <span className='text-gray-600'>Front-end Developer</span>
            </p>
          </div>
        </div>
        <Section>
          <Section.Title>Recent</Section.Title>
          <Filter
            pathname='/screencasts'
            tags={["CSS", "JavaScript"]}
            activeTag={tag}
          />
          <Stack grid>
            {recentScreencasts
              .filter((screencast) => {
                if (!tag) {
                  return screencast;
                } else {
                  return screencast.tags
                    .map((c) => c.toLowerCase())
                    .includes(tag);
                }
              })
              .map((screencast) => {
                return (
                  <Stack.Item key={screencast.slug}>
                    <Card>
                      <Card.Title>
                        <Link
                          as={`/screencasts/${screencast.slug}`}
                          href={`/screencasts/[slug]`}
                        >
                          <a className='hover:text-blue transition-colors'>
                            {screencast.title}
                          </a>
                        </Link>
                      </Card.Title>
                      <Card.Tags items={screencast.tags} />
                    </Card>
                  </Stack.Item>
                );
              })}
          </Stack>
        </Section>
      </Page>
    </>
  );
}

export async function getStaticProps() {
  const screencasts = getContent("screencasts");
  return { props: { screencasts } };
}
