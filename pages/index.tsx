import * as React from "react";
import { compareDesc, format, parseISO } from "date-fns";
import type { NextPage } from "next";
import type { Job, Recommendation } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import { Heading } from "components/Heading";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import { allJobs, allRecommendations } from "contentlayer/generated";

const Home: NextPage<{
  jobs: Job[];
  recommendations: Recommendation[];
}> = ({ jobs, recommendations }) => {
  return (
    <>
      <NextSeo title="Design Engineer" />

      <header>
        <Text>Alex Carpenter // Design Engineer</Text>
        <Spacer height="lg" />
        <Text
          fontSize={{
            sm: "xl",
            md: "xxxl",
          }}
        >
          A detail oriented user interface engineer interested in CSS
          architecture, React, TypeScript, and design systems. Currently working
          at HashiCorp, helping build and maintain public-facing HashiCorp
          websites and web applications with Next.js.
        </Text>
      </header>

      <Spacer height="xxl" />

      <section>
        <Heading fontSize="lg">Experience</Heading>
        {jobs.map((job) => {
          return (
            <>
              <Spacer height="xl" />
              <article key={job._id}>
                <Text>{job.title}</Text>
                <Spacer height="md" />
                <Text color="foregroundNeutral">{job.company}</Text>
              </article>
            </>
          );
        })}
      </section>

      <Spacer height="xxl" />

      <section>
        <Heading fontSize="lg">Recommendations</Heading>
        {recommendations.map((rec) => {
          return (
            <>
              <Spacer height="xl" />
              <figure key={rec._id}>
                <blockquote>
                  <Text>{rec.text}</Text>
                </blockquote>
                <Spacer height="md" />
                <figcaption>
                  <Text color="foregroundNeutral">
                    {rec.name}, {rec.title}, {rec.company}
                  </Text>
                </figcaption>
              </figure>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const jobs = allJobs.sort((a, b) => {
    return compareDesc(new Date(a.startDate), new Date(b.startDate));
  });

  const recommendations = allRecommendations.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return {
    props: {
      jobs,
      recommendations,
    },
  };
}
