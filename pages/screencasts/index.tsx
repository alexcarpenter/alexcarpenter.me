import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { screencastFilePaths, SCREENCASTS_PATH } from "../../lib/mdxUtils";
import Page from "@/components/Page";
import Card from "@/components/Card";
import Listing from "@/components/Listing";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Youtube from "@/components/Metrics/Youtube";
import YoutubeSubscribe from "@/components/YoutubeSubscribe";

export default function Screencasts({ screencasts }) {
  let popularScreencasts = [];
  let recentScreencasts = [];
  screencasts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .map((screencast) => {
      if (screencast.data.popular === true && popularScreencasts.length < 2) {
        popularScreencasts.push(screencast);
      } else {
        recentScreencasts.push(screencast);
      }
    });
  return (
    <>
      <Page title='Screencasts'>
        <Header>
          <Header.Title>Screencasts</Header.Title>
          <Header.Description>Sed tincidunt aenean magnis velit tellus egestas urna placerat ipsum elit cum hac platea hendrerit ac tempus sollicitudin.</Header.Description>
        </Header>
        <div className='mt-8'>
          <Youtube />
          <div className='mt-4 text-center'>
            <YoutubeSubscribe />
          </div>
        </div>
        <Section>
          <Section.Title>Popular</Section.Title>
          <Listing>
            {popularScreencasts.map((screencast) => {
              return (
                <Card key={screencast.filePath} highlight>
                  <Card.Title>
                    <Link as={`/screencasts/${screencast.filePath.replace(/\.mdx?$/, "")}`} href={`/screencasts/[slug]`}>
                      <a className='hover:text-blue'>{screencast.data.title}</a>
                    </Link>
                  </Card.Title>
                  <Card.Description>{screencast.data.description}</Card.Description>
                </Card>
              );
            })}
          </Listing>
        </Section>
        <Section>
          <Section.Title>Recent</Section.Title>
          <Listing>
            {recentScreencasts.map((screencast) => {
              return (
                <Card key={screencast.filePath}>
                  <Card.Title>
                    <Link as={`/screencasts/${screencast.filePath.replace(/\.mdx?$/, "")}`} href={`/screencasts/[slug]`}>
                      <a className='hover:text-blue'>{screencast.data.title}</a>
                    </Link>
                  </Card.Title>
                  <Card.Description>{screencast.data.description}</Card.Description>
                </Card>
              );
            })}
          </Listing>
        </Section>
      </Page>
    </>
  );
}

export async function getStaticProps() {
  const screencasts = screencastFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(SCREENCASTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { screencasts } };
}
