import * as React from "react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import * as Grid from "components/Grid";
import * as List from "components/List";
import { Heading } from "components/Heading";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";

const Colophon: NextPage = () => {
  return (
    <>
      <NextSeo title="Colophon" />

      <Grid.Container>
        <Grid.Column
          colStart={{ xs: "1", md: "2" }}
          colEnd={{ xs: "-1", md: "4" }}
        >
          <Heading fontSize="xxl">Colophon</Heading>
          <Spacer height="xs" />
          <Text color="foregroundNeutral">
            <a href="https://github.com/alexcarpenter/alexcarpenter-next">
              View source on GitHub ↗
            </a>
          </Text>
        </Grid.Column>
      </Grid.Container>

      <Spacer height="xxxl" />

      <List.Container>
        <List.Item>
          <Grid.Container>
            <Grid.Column colStart={{ xs: "1" }} colEnd={{ xs: "-1", md: "1" }}>
              <Heading>Next.js</Heading>
            </Grid.Column>

            <Grid.Column
              colStart={{ xs: "1", md: "2" }}
              colEnd={{ xs: "-1", md: "4" }}
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam blanditiis totam velit exercitationem labore eum
                voluptatem ipsum earum? Commodi, distinctio?
              </Text>
            </Grid.Column>

            <Grid.Column
              colStart={{ xs: "1", md: "4" }}
              colEnd={{ xs: "-1", md: "4" }}
            >
              <Text color="foregroundNeutral" fontSize="sm">
                <a href="https://nextjs.org/">Visit ↗</a>
              </Text>
            </Grid.Column>
          </Grid.Container>
        </List.Item>

        <List.Item>
          <Grid.Container>
            <Grid.Column colStart={{ xs: "1" }} colEnd={{ xs: "-1", md: "1" }}>
              <Heading>vanilla-extract</Heading>
            </Grid.Column>

            <Grid.Column
              colStart={{ xs: "1", md: "2" }}
              colEnd={{ xs: "-1", md: "4" }}
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam blanditiis totam velit exercitationem labore eum
                voluptatem ipsum earum? Commodi, distinctio?
              </Text>
            </Grid.Column>

            <Grid.Column
              colStart={{ xs: "1", md: "4" }}
              colEnd={{ xs: "-1", md: "4" }}
            >
              <Text color="foregroundNeutral" fontSize="sm">
                <a href="https://vanilla-extract.style/">Visit ↗</a>
              </Text>
            </Grid.Column>
          </Grid.Container>
        </List.Item>

        <List.Item>
          <Grid.Container>
            <Grid.Column colStart={{ xs: "1" }} colEnd={{ xs: "-1", md: "1" }}>
              <Heading>Radix UI</Heading>
            </Grid.Column>

            <Grid.Column
              colStart={{ xs: "1", md: "2" }}
              colEnd={{ xs: "-1", md: "4" }}
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam blanditiis totam velit exercitationem labore eum
                voluptatem ipsum earum? Commodi, distinctio?
              </Text>
            </Grid.Column>

            <Grid.Column
              colStart={{ xs: "1", md: "4" }}
              colEnd={{ xs: "-1", md: "4" }}
            >
              <Text color="foregroundNeutral" fontSize="sm">
                <a href="https://www.radix-ui.com/">Visit ↗</a>
              </Text>
            </Grid.Column>
          </Grid.Container>
        </List.Item>

        <List.Item>
          <Grid.Container>
            <Grid.Column colStart={{ xs: "1" }} colEnd={{ xs: "-1", md: "1" }}>
              <Heading>Framer Motion</Heading>
            </Grid.Column>

            <Grid.Column
              colStart={{ xs: "1", md: "2" }}
              colEnd={{ xs: "-1", md: "4" }}
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam blanditiis totam velit exercitationem labore eum
                voluptatem ipsum earum? Commodi, distinctio?
              </Text>
            </Grid.Column>

            <Grid.Column
              colStart={{ xs: "1", md: "4" }}
              colEnd={{ xs: "-1", md: "4" }}
            >
              <Text color="foregroundNeutral" fontSize="sm">
                <a href="https://www.framer.com/motion/">Visit ↗</a>
              </Text>
            </Grid.Column>
          </Grid.Container>
        </List.Item>
      </List.Container>
    </>
  );
};

export default Colophon;
