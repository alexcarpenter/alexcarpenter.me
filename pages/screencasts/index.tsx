import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { screencastFilePaths, SCREENCASTS_PATH } from "../../lib/mdxUtils";
import Page from "@/components/Page";
import Stack from "@/components/Stack";
import Card from "@/components/Card";
import Grid from "@/components/Grid";
import Listing from "@/components/Listing";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Youtube from "@/components/Metrics/Youtube";
import YoutubeSubscribe from "@/components/YoutubeSubscribe";

export default function Screencasts({ screencasts }) {
  const router = useRouter();
  let category = router.query.category;
  let popularScreencasts = [];
  let recentScreencasts = [];
  screencasts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    )
    .map((screencast) => {
      if (screencast.data.popular === true && popularScreencasts.length < 3) {
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
          <Header.Description>
            Short—to the point front-end development tutorials for developers of
            all skill levels.
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
              const { title, description, categories } = screencast.data;
              return (
                <Stack.Item>
                  <Card key={screencast.filePath} highlight>
                    <Card.Title>
                      <Link
                        as={`/screencasts/${screencast.filePath.replace(
                          /\.mdx?$/,
                          "",
                        )}`}
                        href={`/screencasts/[slug]`}
                      >
                        <a className='hover:text-blue'>{title}</a>
                      </Link>
                    </Card.Title>
                    {description && (
                      <Card.Description>{description}</Card.Description>
                    )}
                    <Card.Tags items={categories} />
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
          <ul className='flex space-x-2 mb-8'>
            <li>
              <Link
                href={{
                  pathname: "/screencasts",
                }}
                scroll={false}
              >
                <a
                  className={`${
                    category === undefined
                      ? "bg-gray-600 text-white"
                      : "bg-gray-200"
                  } hover:bg-gray-600 hover:text-white py-1 px-2 text-sm rounded-lg`}
                >
                  All
                </a>
              </Link>
            </li>
            {["CSS", "JavaScript", "Performance"].map((c) => (
              <li>
                <Link
                  href={{
                    pathname: "/screencasts",
                    query: { category: c.toLowerCase() },
                  }}
                  scroll={false}
                >
                  <a
                    className={`${
                      category === c.toLowerCase()
                        ? "bg-gray-600 text-white"
                        : "bg-gray-200"
                    } hover:bg-gray-600 hover:text-white py-1 px-2 text-sm rounded-lg`}
                  >
                    {c}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <Stack grid>
            {recentScreencasts
              .filter((screencast) => {
                if (!category) {
                  return screencast;
                } else {
                  return screencast.data.categories
                    .map((c) => c.toLowerCase())
                    .includes(category);
                }
              })
              .map((screencast) => {
                const { title, categories } = screencast.data;
                return (
                  <Stack.Item>
                    <Card key={screencast.filePath}>
                      <Card.Title>
                        <Link
                          as={`/screencasts/${screencast.filePath.replace(
                            /\.mdx?$/,
                            "",
                          )}`}
                          href={`/screencasts/[slug]`}
                        >
                          <a className='hover:text-blue'>{title}</a>
                        </Link>
                      </Card.Title>
                      <Card.Tags items={categories} />
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
