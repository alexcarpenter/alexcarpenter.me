import * as React from "react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import * as Grid from "components/Grid";
import { Heading } from "components/Heading";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";

const FourOhFour: NextPage = () => {
  return (
    <>
      <NextSeo title="404" />

      <Grid.Container>
        <Grid.Column
          colStart={{ xs: "1", md: "2" }}
          colEnd={{ xs: "-1", md: "4" }}
        >
          <Heading fontSize="xxl">404</Heading>
          <Spacer height="sm" />
          <Text fontSize="lg" color="foregroundNeutral">
            Page not found
          </Text>
        </Grid.Column>
      </Grid.Container>
    </>
  );
};

export default FourOhFour;
