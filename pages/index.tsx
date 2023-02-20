import * as React from "react";
import type { NextPage } from "next";
import type { Job, Recommendation } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import * as Grid from "components/Grid";
import * as List from "components/List";
import { Heading } from "components/Heading";
import { Spacer } from "components/Spacer";
import { Text } from "components/Text";
import { allJobs, allRecommendations } from "contentlayer/generated";
import { VisuallyHidden } from "components/VisuallyHidden";
import { formatTags } from "lib/utils";

const Home: NextPage<{
  jobs: Job[];
  recommendations: Recommendation[];
}> = ({ jobs, recommendations }) => {
  return (
    <>
      <NextSeo title="Design Engineer" />

      <VisuallyHidden as="h1">Index</VisuallyHidden>

      <Spacer height="xxxl" />

      <Grid.Container>
        <Grid.Column span="2/3">
          <Text fontSize="lg" gradient={true}>
            A detail oriented user interface engineer interested in CSS
            architecture, React, TypeScript, animation, and design systems.
            Currently working at HashiCorp, helping build and maintain
            public-facing HashiCorp websites and web applications with Next.js.
          </Text>
        </Grid.Column>
      </Grid.Container>

      <Spacer height="xxxl" />

      <Grid.Container>
        <Grid.Column span="2/3">
          <Heading>Experience &not;</Heading>
        </Grid.Column>
      </Grid.Container>

      <Spacer height="xl" />

      <List.Container>
        {jobs.map((job) => {
          return (
            <List.Item key={job._id}>
              <Grid.Container>
                <Grid.Column span="1/1">
                  <Heading as="h3">{job.company}</Heading>
                </Grid.Column>

                <Grid.Column span="2/2">
                  <Text>{job.description}</Text>
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

                <Grid.Column span="4/4">
                  <Text color="foregroundNeutral" fontSize="sm">
                    <VisuallyHidden>Duration</VisuallyHidden>
                    {new Date(job.startDate).getFullYear()} &mdash;{" "}
                    {job.endDate ? new Date(job.endDate).getFullYear() : "Now"}
                  </Text>
                  <Text color="foregroundNeutral" fontSize="sm">
                    <VisuallyHidden>Location</VisuallyHidden>
                    {job.location ? job.location : "Remote"}
                  </Text>
                </Grid.Column>
              </Grid.Container>
            </List.Item>
          );
        })}
      </List.Container>

      <Spacer height="xxxl" />

      <Grid.Container>
        <Grid.Column span="2/3">
          <Heading>Recommendations &not;</Heading>
        </Grid.Column>
      </Grid.Container>

      <Spacer height="xl" />

      <List.Container>
        {recommendations.map((recommendation) => {
          return (
            <List.Item key={recommendation._id}>
              <Grid.Container>
                <Grid.Column span="1/1">
                  <Heading as="h3">{recommendation.name}</Heading>
                </Grid.Column>

                <Grid.Column span="2/2">
                  <Text>{recommendation.text}</Text>
                </Grid.Column>

                <Grid.Column span="4/4">
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
