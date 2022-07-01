import * as React from "react";
import type { NextPage } from "next";
import type { Post, Job, Recommendation } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, allJobs, allRecommendations } from "contentlayer/generated";
import { Heading } from "@/components/Heading";
import { List, ListItem } from "@/components/List";
import { Link } from "@/components/Link";
import { Spacer } from "@/components/Spacer";
import { Avatar } from "@/components/Avatar/Avatar";
import { Box } from "@/components/Box";
import { ModalDialog } from "@/components/ModalDialog";

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
                <Box
                  display="grid"
                  columnGap="xl"
                  gridTemplateColumns={{
                    sm: "1fr",
                    md: "8rem 1fr",
                  }}
                >
                  <span>
                    <time dateTime={recommendation.date}>
                      {format(parseISO(recommendation.date), "y")}
                    </time>
                    <Spacer height="lg" />
                  </span>
                  <div>
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
                  </div>
                </Box>
              </ListItem>
            );
          })}
      </List>

      {!allRecs ? (
        <>
          <Spacer height="xl" />
          <Box
            display="grid"
            columnGap="xl"
            gridTemplateColumns={{
              sm: "1fr",
              md: "8rem 1fr",
            }}
          >
            <Box
              gridColumnStart={{
                md: 2,
              }}
            >
              <button
                onClick={showAllRecs}
                aria-label="Load all recommendations"
              >
                Load all
              </button>
            </Box>
          </Box>
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
                <Box
                  display="grid"
                  columnGap="xl"
                  gridTemplateColumns={{
                    sm: "1fr",
                    md: "8rem 1fr",
                  }}
                >
                  <span>
                    {format(parseISO(job.startDate), "y")} &mdash;{" "}
                    {job.endDate ? format(parseISO(job.endDate), "y") : "Now"}
                    <Spacer height="xs" />
                  </span>
                  <div>
                    <Heading as="h3">
                      <Link href={job.link}>
                        {job.title} at {job.company}&nbsp;
                      </Link>
                    </Heading>
                    <Spacer height="xs" />
                    <p>{job.location || "Remote"}</p>
                    {job.description ? (
                      <>
                        <Spacer height="sm" />
                        <p>{job.description}</p>
                      </>
                    ) : null}
                  </div>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </section>

      <Spacer height="xxxl" />

      <section>
        <Heading decorated>Interests</Heading>
        <Spacer height="xl" />
        <Box
          as="ul"
          display="grid"
          gridTemplateColumns={{
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap="lg"
        >
          {interests.map((interest, index) => {
            return <li key={index}>{interest}</li>;
          })}
        </Box>
      </section>

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
                <Box
                  display="grid"
                  columnGap="xl"
                  gridTemplateColumns={{
                    sm: "1fr",
                    md: "8rem 1fr",
                  }}
                >
                  <span>
                    <time dateTime={post.date}>
                      {format(parseISO(post.date), "LLL d")}
                    </time>
                    <Spacer height="xs" />
                  </span>
                  <div>
                    <Heading as="h3">
                      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </Heading>
                    {post.description ? (
                      <>
                        <Spacer height="xs" />
                        <p>{post.description}</p>
                      </>
                    ) : null}
                  </div>
                </Box>
              </ListItem>
            );
          })}
        </List>

        <Spacer height="xl" />

        <Box
          display="grid"
          columnGap="xl"
          gridTemplateColumns={{
            sm: "1fr",
            md: "8rem 1fr",
          }}
        >
          <Box
            gridColumnStart={{
              md: 2,
            }}
          >
            <Link href="/posts" aria-label="View all posts">
              View all
            </Link>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default Home;
