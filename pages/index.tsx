import * as React from "react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Design Engineer" />
      <Text fontSize="xxxl">
        Hey, I&apos;m Alex. A detail oriented user interface engineer interested
        in CSS architecture, React, TypeScript, design systems, and state
        machines. Currently working at HashiCorp, helping build and maintain
        public-facing HashiCorp websites and web applications with Next.js.
      </Text>
    </>
  );
};

export default Home;
