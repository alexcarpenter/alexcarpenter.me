import * as React from "react";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
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
        <Image
          src="/img/me.jpeg"
          width={48}
          height={48}
          alt="Headshot"
          style={{
            borderRadius: 10,
          }}
          priority
        />
        <Spacer height="lg" />
        <Heading fontSize="xxxl" as="h1">
          Design Engineer
        </Heading>
        <Spacer height="lg" />
        <Text fontSize="xl" color="foregroundNeutral">
          A detail oriented user interface engineer interested in CSS
          architecture, React, TypeScript, and design systems. Currently working
          at HashiCorp, helping build and maintain public-facing HashiCorp
          websites and web applications with Next.js.
        </Text>
      </header>

      <Spacer height="xxxxl" />

      <section>
        <Heading fontSize="xl">Experience</Heading>
        {jobs.map((job) => {
          return (
            <React.Fragment key={job._id}>
              <Spacer height="xxl" />
              <article key={job._id}>
                <Text fontSize="sm" color="foregroundNeutral">
                  {format(parseISO(job.startDate), "y")} &mdash;{" "}
                  {job.endDate ? format(parseISO(job.endDate), "y") : "Now"}
                </Text>
                <Spacer height="sm" />
                <Text>{job.title}</Text>
                <Spacer height="md" />
                <Text color="foregroundNeutral">{job.company}</Text>
              </article>
            </React.Fragment>
          );
        })}
      </section>

      <Spacer height="xxxxl" />

      <section>
        <Heading fontSize="xl">Recommendations</Heading>
        {recommendations.map((rec) => {
          return (
            <React.Fragment key={rec._id}>
              <Spacer height="xxl" />
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
            </React.Fragment>
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
