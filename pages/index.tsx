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
        <Spacer height="xl" />
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
        <Spacer height="xxl" />
        <ul>
          {jobs.map((job) => {
            return (
              <li key={job._id}>
                <Text color="foregroundNeutral" fontSize="sm">
                  {format(parseISO(job.startDate), "y")} &mdash;{" "}
                  {job.endDate ? format(parseISO(job.endDate), "y") : "Now"}
                </Text>
                <Spacer height="sm" />
                <Heading>
                  {job.title} at {job.company}
                </Heading>
                <Spacer height="sm" />
                <Text color="foregroundNeutral">
                  {job.location ? job.location : "Remote"}
                </Text>
              </li>
            );
          })}
        </ul>
      </section>

      <Spacer height="xxxxl" />

      <section>
        <Heading fontSize="xl">Recommendations</Heading>
        <Spacer height="xxl" />
        <ul>
          {recommendations.map((rec) => {
            return (
              <li key={rec._id}>
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
        <Spacer height="xxl" />
        <ul>
          <li>
            <Text color="foregroundNeutral">
              <a href="mailto:im.alexcarpenter@gmail.com">
                im.alexcarpenter@gmail.com
              </a>{" "}
              ↗
            </Text>
          </li>
          <li>
            <Text color="foregroundNeutral">
              <a href="https://twitter.com/hybrid_alex">Twitter</a> ↗
            </Text>
          </li>
          <li>
            <Text color="foregroundNeutral">
              <a href="https://github.com/alexcarpenter">Github</a> ↗
            </Text>
          </li>
          <li>
            <Text color="foregroundNeutral">
              <a href="https://www.linkedin.com/in/imalexcarpenter/">
                LinkedIn
              </a>{" "}
              ↗
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
