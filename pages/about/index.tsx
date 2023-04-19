import * as React from "react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import * as Grid from "components/Grid";
import * as List from "components/List";
import { Heading } from "components/Heading";
import { Text } from "components/Text";
import { VisuallyHidden } from "components/VisuallyHidden";
import { Spacer } from "components/Spacer";
import { Prose } from "components/Prose";

const About: NextPage = () => {
  return (
    <>
      <NextSeo title="About" />

      <Grid.Container>
        <Grid.Column
          colStart={{ xs: "1", md: "2" }}
          colEnd={{ xs: "-1", md: "4" }}
        >
          <VisuallyHidden as="h1">About</VisuallyHidden>
          <Text fontSize="xl" gradient={true}>
            Serial hobbyist currently interested in smoking meats, disc golf,
            and ball golf.
          </Text>
        </Grid.Column>
      </Grid.Container>
    </>
  );
};

export default About;
