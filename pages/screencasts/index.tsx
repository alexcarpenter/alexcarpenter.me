import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { screencastFilePaths, SCREENCASTS_PATH } from "../../lib/mdxUtils";
import Page from "@/components/Page";
import Card from "@/components/Card";
import Listing from "@/components/Listing";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Youtube from "@/components/Metrics/Youtube";

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
            <a href='https://www.youtube.com/channel/UC2jJoQlzvLPvnYfowAEVaOg?sub_confirmation=1' className='inline-flex items-center text-blue hover:underline'>
              Subscribe on YouTube{" "}
              <svg className='ml-1' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                <polyline points='15 3 21 3 21 9'></polyline>
                <line x1='10' y1='14' x2='21' y2='3'></line>
              </svg>
            </a>
          </div>
        </div>
        <Section>
          <Section.Title>Popular</Section.Title>
          <Listing>
            {popularScreencasts.map((screencast) => {
              return (
                <Card key={screencast.filePath} highlight>
                  <Card.Title>{screencast.data.title}</Card.Title>
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
                  <Card.Title>{screencast.data.title}</Card.Title>
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
