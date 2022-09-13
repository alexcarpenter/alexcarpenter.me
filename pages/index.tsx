import * as React from "react";
import type { NextPage } from "next";
import type { Job, Recommendation } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { Box } from "components/Box";
import { Heading } from "components/Heading";
import { Link } from "components/Link";
import { List } from "components/List";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import { allJobs, allRecommendations } from "contentlayer/generated";

const formatTags = new Intl.ListFormat("en", { type: "conjunction" });

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
        <Heading fontSize={{ sm: "xxl", md: "xxxl" }} as="h1">
          Alex Carpenter{" "}
          <span role="separator" aria-orientation="vertical">
            {"//"}
          </span>{" "}
          Design Engineer
        </Heading>
        <Spacer height="xl" />
        <Text fontSize={{ sm: "lg", md: "xl" }} color="foregroundNeutral">
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
        <List>
          {jobs.map((job) => {
            return (
              <List.Item key={job._id}>
                <Box display="flex" gap="md">
                  {job.logo ? (
                    <Box display="flex" alignItems="flex-start" flexShrink={0}>
                      <Image
                        src={job.logo}
                        width={32}
                        height={32}
                        alt=""
                        style={{ borderRadius: 6 }}
                      />
                    </Box>
                  ) : null}
                  <Box flexGrow={1}>
                    <Box
                      display="flex"
                      flexDirection={{
                        sm: "column",
                        md: "row-reverse",
                      }}
                      alignItems={{ md: "center" }}
                      justifyContent={{ md: "space-between" }}
                      gap="sm"
                      maxWidth="characterWidth"
                    >
                      <Text color="foregroundNeutral" fontSize="sm">
                        {format(parseISO(job.startDate), "y")} &mdash;{" "}
                        {job.endDate
                          ? format(parseISO(job.endDate), "y")
                          : "Now"}
                      </Text>
                      <Heading>
                        {job.title} at {job.company}
                      </Heading>
                    </Box>
                    <Spacer height="sm" />
                    <Text>{job.location ? job.location : "Remote"}</Text>
                    {job.tags ? (
                      <>
                        <Spacer height="sm" />
                        <Text fontSize="sm" color="foregroundNeutral">
                          {formatTags.format(job.tags)}
                        </Text>
                      </>
                    ) : null}
                  </Box>
                </Box>
              </List.Item>
            );
          })}
        </List>
      </section>

      <Spacer height="xxxxl" />

      <section>
        <Heading fontSize="xl">Recommendations</Heading>
        <Spacer height="xxl" />
        <List>
          {recommendations.map((rec) => {
            return (
              <List.Item key={rec._id}>
                <Box display="flex" gap="md">
                  {rec.avatar ? (
                    <Box display="flex" alignItems="flex-start" flexShrink={0}>
                      <Image
                        src={rec.avatar}
                        width={32}
                        height={32}
                        alt=""
                        style={{ borderRadius: 6 }}
                      />
                    </Box>
                  ) : null}
                  <figure key={rec._id}>
                    <blockquote>
                      <Text>{rec.text}</Text>
                    </blockquote>
                    <Spacer height="sm" />
                    <figcaption>
                      <Text color="foregroundNeutral" fontSize="sm">
                        {rec.name}, {rec.title}, {rec.company}
                      </Text>
                    </figcaption>
                  </figure>
                </Box>
              </List.Item>
            );
          })}
        </List>
      </section>

      <Spacer height="xxxxl" />

      <section>
        <Heading fontSize="xl">Connect</Heading>
        <Spacer height="xxl" />
        <List>
          <List.Item>
            <Text color="foregroundNeutral">
              <Link href="mailto:im.alexcarpenter@gmail.com">
                im.alexcarpenter@gmail.com
              </Link>
            </Text>
          </List.Item>
          <List.Item>
            <Text color="foregroundNeutral">
              <Link href="https://twitter.com/hybrid_alex">Twitter</Link>
            </Text>
          </List.Item>
          <List.Item>
            <Text color="foregroundNeutral">
              <Link href="https://github.com/alexcarpenter">Github</Link>
            </Text>
          </List.Item>
          <List.Item>
            <Text color="foregroundNeutral">
              <Link href="https://www.linkedin.com/in/imalexcarpenter/">
                LinkedIn
              </Link>
            </Text>
          </List.Item>
        </List>
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
