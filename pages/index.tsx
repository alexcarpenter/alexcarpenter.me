import * as React from "react";
import type { NextPage } from "next";
import type { Post, Job, Recommendation } from "contentlayer/generated";
import Image from "next/image";
// import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, allJobs, allRecommendations } from "contentlayer/generated";
import { Heading } from "@/components/Heading";
import { List, ListItem } from "@/components/List";
import { Link } from "@/components/Link";
import { Item, ItemMeta, ItemContent } from "@/components/Item";
import { Spacer } from "@/components/Spacer";

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
                    <p>
                      {recommendation.name}, {recommendation.company}
                    </p>
                    {/* <div className="mt-4 flex items-center gap-2">
                      <span className="grid overflow-hidden rounded-full">
                        <Image
                          src={recommendation.avatar}
                          width={24}
                          height={24}
                          alt={`${recommendation.name} avatar`}
                        />
                      </span>
                      <p>
                        {recommendation.name}, {recommendation.company}
                      </p>
                    </div> */}
                  </ItemContent>
                </Item>
              </ListItem>
            );
          })}
      </List>

      {/* {!allRecs ? (
        <div className="mt-8 flex gap-4">
          <span className="hidden sm:block w-28 flex-shrink-0" />
          <button onClick={showAllRecs} aria-label="Load all recommendations">
            Load all
          </button>
        </div>
      ) : null} */}
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
        <Spacer size="xl" />
        <p>
          Hey, I&apos;m Alex. A detail oriented user interface engineer
          interested in CSS architecture, React, TypeScript, design systems, and
          state machines. Currently working at HashiCorp, helping build and
          maintain public-facing HashiCorp websites and web applications with
          Next.js.
        </p>
        <Spacer size="lg" />
        <p>
          <Link href="/timeline">View timeline</Link>
        </p>
      </section>
      <Spacer size="xxxl" />
      <section>
        <Heading decorated>Experience</Heading>
        <Spacer size="xl" />
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
                    <h3>
                      <a href="https://hashicorp.com">
                        {job.title} at {job.company}&nbsp;
                        <span aria-hidden={true}>↗</span>
                      </a>
                    </h3>
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

      {/* <section>
        <Heading>Recommendations</Heading>
        <RecommendationsList recommendations={recommendations} />
      </section> */}

      {/* <section>
        <Heading>Posts</Heading>
        <List>
          {posts.map((post, index) => {
            return (
              <ListItem key={index}>
                <Item>
                  <span>
                    <time dateTime={post.date}>
                      {format(parseISO(post.date), "LLL d")}
                    </time>
                  </span>
                  <div>
                    <h3>
                      <Link href={`/posts/${post.slug}`}>
                        <a>{post.title}</a>
                      </Link>
                    </h3>
                    {post.description ? <p>{post.description}</p> : null}
                  </div>
                </Item>
              </ListItem>
            );
          })}
        </List>

        <p>
          <Link href="/posts">
            <a aria-label="View all posts">View all</a>
          </Link>
        </p>
      </section> */}
    </>
  );
};

export default Home;
