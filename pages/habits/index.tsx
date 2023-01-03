import * as React from "react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Box } from "components/Box";
import { Card } from "components/Card";
import { Heading } from "components/Heading";
import { Link } from "components/Link";
import { Spacer } from "components/Spacer";
import { Text } from "components/Text";
import { iceBath } from "contentlayer/generated";

export async function getStaticProps() {
  const iceBathTotalSeconds = iceBath.data.reduce((acc, val) => {
    return acc + val.duration;
  }, 0);
  return {
    props: {
      iceBaths: {
        totalDuration: (iceBathTotalSeconds / 3600).toFixed(2),
        totalCount: iceBath.data.length,
        averageTemp:
          iceBath.data.reduce((acc, val) => acc + val.temp, 0) /
          iceBath.data.length,
      },
    },
  };
}

const HabitsPage: NextPage<{
  iceBaths: {
    totalDuration: string;
    totalCount: number;
    averageTemp: number;
  };
}> = ({ iceBaths }) => {
  return (
    <>
      <NextSeo
        title="Habits"
        description="Holding myself accountable."
        openGraph={{
          title: "Habits",
          description: "Holding myself accountable.",
        }}
      />

      <Box
        as="header"
        textAlign={{ md: "center" }}
        maxWidth="container"
        marginX="auto"
      >
        <Heading fontSize={{ xs: "xxl", sm: "xxxl" }} as="h1">
          Habits
        </Heading>
        <Spacer height="sm" />
        <Text
          fontSize={{ xs: "lg", sm: "xl" }}
          color="foregroundNeutral"
          style={{
            display: "inline-flex",
          }}
        >
          Holding myself accountable.
        </Text>
      </Box>

      <Spacer height="xxxxl" />

      <Box as="section" maxWidth={{ md: "text" }} marginX={{ md: "auto" }}>
        <Heading fontSize="xl">Ice Baths</Heading>
        <Spacer height="md" />
        <Text>
          Practicing{" "}
          <Link href="https://icebarrel.com/science/" variant="highlight">
            cold water therapy
          </Link>
          . Goal is to do an ice bath every other day for 3-6 minutes each
          session.
        </Text>
        <Spacer height="xxl" />
        <Box display="grid" gap="md" columns="1/2">
          <div
            style={{
              gridColumn: "1 / -1",
            }}
          >
            <Card>
              <Heading color="foregroundNeutral" as="h3" fontSize="sm">
                Total Duration
              </Heading>
              <Spacer height="xs" />
              <Text fontSize="xxxl" fontWeight="bold">
                {iceBaths.totalDuration}hrs
              </Text>
            </Card>
          </div>
          <Card>
            <Heading color="foregroundNeutral" as="h3" fontSize="sm">
              Total Count
            </Heading>
            <Spacer height="xs" />
            <Text fontSize="xxxl" fontWeight="bold">
              {iceBaths.totalCount}
            </Text>
          </Card>
          <Card>
            <Heading color="foregroundNeutral" as="h3" fontSize="sm">
              Average Temperature
            </Heading>
            <Spacer height="xs" />
            <Text fontSize="xxxl" fontWeight="bold">
              {iceBaths.averageTemp}
              &deg;F
            </Text>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default HabitsPage;
