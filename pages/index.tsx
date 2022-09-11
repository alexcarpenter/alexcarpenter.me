import * as React from "react";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import type { NextPage } from "next";
import type { Job, Recommendation } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import { Entry } from "components/Entry";
import { Heading } from "components/Heading";
import { List } from "components/List";
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
        <ul>
          {jobs.map((job) => {
            return (
              <li key={job._id}>
                <Spacer height="xxl" />
                <Text color="foregroundNeutral" fontSize="sm">
                  {format(parseISO(job.startDate), "y")} &mdash;{" "}
                  {job.endDate ? format(parseISO(job.endDate), "y") : "Now"}
                </Text>
                <Spacer height="sm" />
                <Heading>
                  {job.title} at {job.company}
                </Heading>
                <Spacer height="sm" />
                <Text color="foregroundNeutral">{job.description}</Text>
              </li>
            );
          })}
        </ul>
      </section>

      <Spacer height="xxxxl" />

      <section>
        <Heading fontSize="xl">Recommendations</Heading>
        <ul>
          {recommendations.map((rec) => {
            return (
              <li key={rec._id}>
                <Spacer height="xxl" />
                <figure key={rec._id}>
                  <blockquote>
                    <Text>{rec.text}</Text>
                  </blockquote>
                  <Spacer height="sm" />
                  <figcaption>
                    <Text color="foregroundNeutral">
                      {rec.name}, {rec.title}, {rec.company}
                    </Text>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </section>

      <Spacer height="xxxxl" />

      <section>
        <Heading fontSize="xl">Connect</Heading>
        <ul>
          <li>
            <Spacer height="xxl" />
            <Text color="foregroundNeutral">
              <a href="">im.alexcarpenter@gmail.com</a> ↗
            </Text>
          </li>
          <li>
            <Spacer height="xxl" />
            <Text color="foregroundNeutral">
              <a href="">Twitter</a> ↗
            </Text>
          </li>
          <li>
            <Spacer height="xxl" />
            <Text color="foregroundNeutral">
              <a href="">Github</a> ↗
            </Text>
          </li>
          <li>
            <Spacer height="xxl" />
            <Text color="foregroundNeutral">
              <a href="">LinkedIn</a> ↗
            </Text>
          </li>
        </ul>
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
