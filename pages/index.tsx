import * as React from "react";
import type { NextPage } from "next";
import type { Job, Recommendation } from "contentlayer/generated";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import { formatTags } from "lib/utils";
import * as Grid from "components/Grid";
import * as List from "components/List";
import { Button } from "components/Button";
import { Heading } from "components/Heading";
import { Spacer } from "components/Spacer";
import { Text } from "components/Text";
import { VisuallyHidden } from "components/VisuallyHidden";
import { allJobs, allRecommendations } from "contentlayer/generated";
import { Link } from "components/Link";

const Home: NextPage<{
  jobs: Job[];
  recommendations: Recommendation[];
}> = ({ jobs, recommendations }) => {
  return (
    <>
      <NextSeo title="Design Engineer" />

      <header>
        <VisuallyHidden as="h1">Index</VisuallyHidden>

        <Grid.Container>
          <Grid.Column
            colStart={{ xs: "1", md: "2" }}
            colEnd={{ xs: "-1", lg: "4" }}
          >
            <Text fontSize="xl" gradient={true}>
              A detail oriented user interface engineer interested in CSS
              architecture, React, TypeScript, animation, and design systems.
              Currently working at HashiCorp, helping build and maintain
              public-facing HashiCorp websites and web applications with
              Next.js.
            </Text>

            <Spacer height="xl" />

            <Button asChild>
              <a href="https://read.cv/alexcarpenter">Read CV</a>
            </Button>
          </Grid.Column>
        </Grid.Container>
      </header>

      <Spacer height="xxxl" />

      <section>
        <Grid.Container>
          <Grid.Column
            colStart={{ xs: "1", md: "2" }}
            colEnd={{ xs: "-1", md: "4" }}
          >
            <Heading fontSize="lg">Experience &not;</Heading>
          </Grid.Column>
        </Grid.Container>

        <Spacer height="xl" />

        <List.Container>
          {jobs.map((job) => {
            return (
              <List.Item key={job._id}>
                <Grid.Container rowGap="md">
                  <Grid.Column
                    colStart={{ xs: "1" }}
                    colEnd={{ xs: "-1", md: "1" }}
                  >
                    <Heading as="h3">{job.company}</Heading>
                  </Grid.Column>

                  <Grid.Column
                    colStart={{ xs: "1", md: "2" }}
                    colEnd={{ xs: "-1", md: "4" }}
                  >
                    <Text>
                      {job.description}
                      {job.slug === "hashicorp" ? (
                        <>
                          {" "}
                          <Link underlined={true}>
                            <NextLink href={`/experience/${job.slug}`}>
                              Read more
                            </NextLink>
                          </Link>
                        </>
                      ) : null}
                    </Text>
                    {job.tags ? (
                      <>
                        <Spacer height="sm" />
                        <Text fontSize="sm" color="foregroundNeutral">
                          <VisuallyHidden>Tools used:</VisuallyHidden>
                          {formatTags(job.tags)}
                        </Text>
                      </>
                    ) : null}
                  </Grid.Column>

                  <Grid.Column
                    colStart={{ xs: "1", md: "4" }}
                    colEnd={{ xs: "-1", md: "4" }}
                  >
                    <Text color="foregroundNeutral" fontSize="sm">
                      <VisuallyHidden>Duration</VisuallyHidden>
                      {new Date(job.startDate).getFullYear()} &mdash;{" "}
                      {job.endDate
                        ? new Date(job.endDate).getFullYear()
                        : "Now"}
                    </Text>
                  </Grid.Column>
                </Grid.Container>
              </List.Item>
            );
          })}
        </List.Container>
      </section>

      {/* <Spacer height="xxxl" />

      <section>
        <Grid.Container>
          <Grid.Column
            colStart={{ xs: "1", md: "2" }}
            colEnd={{ xs: "-1", md: "4" }}
          >
            <Heading fontSize="lg">Interests &not;</Heading>
          </Grid.Column>
        </Grid.Container>

        <Spacer height="xl" />
      </section> */}

      <Spacer height="xxxl" />

      <section>
        <Grid.Container>
          <Grid.Column
            colStart={{ xs: "1", md: "2" }}
            colEnd={{ xs: "-1", md: "4" }}
          >
            <Heading fontSize="lg">Recommendations &not;</Heading>
          </Grid.Column>
        </Grid.Container>

        <Spacer height="xl" />

        <List.Container>
          {recommendations.map((recommendation) => {
            return (
              <List.Item key={recommendation._id}>
                <Grid.Container rowGap="md">
                  <Grid.Column
                    colStart={{ xs: "1" }}
                    colEnd={{ xs: "-1", md: "1" }}
                  >
                    <Heading as="h3">{recommendation.name}</Heading>
                  </Grid.Column>

                  <Grid.Column
                    colStart={{ xs: "1", md: "2" }}
                    colEnd={{ xs: "-1", md: "4" }}
                  >
                    <Text>&ldquo;{recommendation.text}&rdquo;</Text>
                  </Grid.Column>

                  <Grid.Column
                    colStart={{ xs: "1", md: "4" }}
                    colEnd={{ xs: "-1", md: "4" }}
                  >
                    <Text color="foregroundNeutral" fontSize="sm">
                      {recommendation.title}
                    </Text>
                    <Text color="foregroundNeutral" fontSize="sm">
                      {recommendation.company}
                    </Text>
                  </Grid.Column>
                </Grid.Container>
              </List.Item>
            );
          })}
        </List.Container>
      </section>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const jobs = allJobs.sort((a, b) => {
    return Number(new Date(b.startDate)) - Number(new Date(a.startDate));
  });

  const recommendations = allRecommendations.sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });

  return {
    props: {
      jobs,
      recommendations,
    },
  };
}
