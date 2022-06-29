import * as React from "react";
import type { NextPage } from "next";
import type { Post, Job, Recommendation } from "contentlayer/generated";
import Image from "next/image";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, allJobs, allRecommendations } from "contentlayer/generated";
import { Heading } from "@/components/Heading";
import { List, ListItem } from "@/components/List";
import { Link } from "@/components/Link";
import { Item, ItemMeta, ItemContent } from "@/components/Item";
import { Spacer } from "@/components/Spacer";
import { Avatar } from "@/components/Avatar/Avatar";
import { Box } from "@/components/Box";

const RecommendationsList = ({
  recommendations,
}: {
  recommendations: Recommendation[];
}) => {
  const [allRecs, showAllRecs] = React.useReducer(() => true, false);
  return (
    <>
      <List>
        {recommendations
          .slice(0, allRecs ? recommendations.length : 3)
          .map((recommendation, index) => {
            return (
              <ListItem key={index}>
                <Item>
                  <ItemMeta>
                    <time dateTime={recommendation.date}>
                      {format(parseISO(recommendation.date), "y")}
                    </time>
                  </ItemMeta>
                  <ItemContent>
                    <p>“{recommendation.text}”</p>
                    <Spacer height="lg" />
                    <Box display="flex" alignItems="center" gap="lg">
                      <Avatar
                        src={recommendation.avatar}
                        alt={`${recommendation.name} avatar`}
                      />
                      <p>
                        {recommendation.name}, {recommendation.company}
                      </p>
                    </Box>
                  </ItemContent>
                </Item>
              </ListItem>
            );
          })}
      </List>

      {!allRecs ? (
        <>
          <Spacer height="xl" />
          <Item>
            <ItemContent>
              <button
                onClick={showAllRecs}
                aria-label="Load all recommendations"
              >
                Load all
              </button>
            </ItemContent>
          </Item>
        </>
      ) : null}
    </>
  );
};

export async function getStaticProps() {
  const posts = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .slice(0, 3);

  const jobs = allJobs.sort((a, b) => {
    return compareDesc(new Date(a.startDate), new Date(b.startDate));
  });

  const recommendations = allRecommendations.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return {
    props: {
      posts,
      jobs,
      recommendations,
      interests: [
        "Accessibility",
        "CSS",
        "Design Systems",
        "Essentialism",
        "Next.js",
        "Performance",
        "Pragmatism",
        "React",
        "TypeScript",
      ],
    },
  };
}

const Home: NextPage<{
  posts: Post[];
  jobs: Job[];
  recommendations: Recommendation[];
  interests: string[];
}> = ({ posts, jobs, recommendations, interests }) => {
  return (
    <>
      <section>
        <Heading decorated>About</Heading>
        <Spacer height="xl" />
        <p>
          Hey, I&apos;m Alex. A detail oriented user interface engineer
          interested in CSS architecture, React, TypeScript, design systems, and
          state machines. Currently working at HashiCorp, helping build and
          maintain public-facing HashiCorp websites and web applications with
          Next.js.
        </p>
        <Spacer height="lg" />
        <p>
          <Link href="/timeline">View timeline</Link>
        </p>
      </section>
      <Spacer height="xxxl" />
      <section>
        <Heading decorated>Experience</Heading>
        <Spacer height="xl" />
        <List>
          {jobs.map((job, index) => {
            return (
              <ListItem key={index}>
                <Item>
                  <ItemMeta>
                    {format(parseISO(job.startDate), "y")} &mdash;{" "}
                    {job.endDate ? format(parseISO(job.endDate), "y") : "Now"}
                  </ItemMeta>
                  <ItemContent>
                    <Heading as="h3">
                      <Link href={job.link}>
                        {job.title} at {job.company}&nbsp;
                      </Link>
                    </Heading>
                    <Spacer height="xs" />
                    <p>{job.location || "Remote"}</p>
                    {job.description ? (
                      <p className="mt-2">{job.description}</p>
                    ) : null}
                  </ItemContent>
                </Item>
              </ListItem>
            );
          })}
        </List>
      </section>

      {/* <section>
        <Heading>Interests</Heading>

        <ul>
          {interests.map((interest, index) => {
            return <li key={index}>{interest}</li>;
          })}
        </ul>
      </section> */}

      <Spacer height="xxxl" />

      <section>
        <Heading decorated>Recommendations</Heading>
        <Spacer height="xl" />
        <RecommendationsList recommendations={recommendations} />
      </section>

      <Spacer height="xxxl" />

      <section>
        <Heading decorated>Posts</Heading>
        <Spacer height="xl" />
        <List>
          {posts.map((post, index) => {
            return (
              <ListItem key={index}>
                <Item>
                  <ItemMeta>
                    <time dateTime={post.date}>
                      {format(parseISO(post.date), "LLL d")}
                    </time>
                  </ItemMeta>
                  <ItemContent>
                    <Heading as="h3">
                      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </Heading>
                    {post.description ? (
                      <>
                        <Spacer height="xs" />
                        <p>{post.description}</p>
                      </>
                    ) : null}
                  </ItemContent>
                </Item>
              </ListItem>
            );
          })}
        </List>

        <Spacer height="xl" />

        <Item as="div">
          <ItemContent>
            <Link href="/posts" aria-label="View all posts">
              View all
            </Link>
          </ItemContent>
        </Item>
      </section>
    </>
  );
};

export default Home;
