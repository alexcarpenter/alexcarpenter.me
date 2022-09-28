import * as React from "react";
import type { NextPage } from "next";
import type { Job, Recommendation } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { partition } from "lib/utils";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { Box } from "components/Box";
import { Card } from "components/Card";
import { Heading } from "components/Heading";
import { Link } from "components/Link";
import { List } from "components/List";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";
import { allJobs, allRecommendations } from "contentlayer/generated";

const formatTags = new Intl.ListFormat("en", { type: "conjunction" });

const Experience: NextPage<{}> = () => {
  return (
    <>
      <NextSeo title="Experience" />

      <Box
        as="header"
        textAlign={{ md: "center" }}
        maxWidth="container"
        marginX="auto"
      >
        <Heading fontSize={{ xs: "xxl", sm: "xxxl" }} as="h1">
          HashiCorp
        </Heading>
        <Spacer height="xl" />
        <Text
          fontSize={{ xs: "lg", sm: "xl" }}
          color="foregroundNeutral"
          style={{
            display: "inline-flex",
          }}
        >
          A detail oriented user interface engineer interested in CSS
          architecture, React, TypeScript, and design systems. Currently working
          at HashiCorp, helping build and maintain public-facing HashiCorp
          websites and web applications with&nbsp;Next.js.
        </Text>
      </Box>

      <Spacer height="xxxxl" />
    </>
  );
};

export default Experience;

export async function getStaticProps() {
  return {
    props: {},
  };
}
