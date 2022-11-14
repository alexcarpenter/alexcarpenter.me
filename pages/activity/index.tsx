import * as React from "react";
import type { NextPage } from "next";
import type { Activity } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import { ActivityItem } from "components/ActivityItem";
import { Box } from "components/Box";
import { Heading } from "components/Heading";
import { List } from "components/List";
import { Spacer } from "components/Spacer";
import { Text } from "components/Text";
import { allActivities } from "contentlayer/generated";

const ActivityPage: NextPage<{ activities: Activity[] }> = ({ activities }) => {
  return (
    <>
      <NextSeo title="Activity" />

      <Box
        as="header"
        textAlign={{ md: "center" }}
        maxWidth="container"
        marginX="auto"
      >
        <Heading fontSize={{ xs: "xxl", sm: "xxxl" }} as="h1">
          Activity
        </Heading>
        <Spacer height="xl" />
        <Text
          fontSize={{ xs: "lg", sm: "xl" }}
          color="foregroundNeutral"
          style={{
            display: "inline-flex",
          }}
        >
          Short form thoughts and updates.
        </Text>
      </Box>

      <Spacer height="xxxxl" />

      <Box as="section" maxWidth={{ md: "text" }} marginX={{ md: "auto" }}>
        <List>
          {activities.map((activity) => {
            return (
              <List.Item key={activity._id}>
                <ActivityItem {...activity} />
              </List.Item>
            );
          })}
        </List>
      </Box>
    </>
  );
};

export default ActivityPage;

export async function getStaticProps() {
  const activities = allActivities;
  return {
    props: {
      activities,
    },
  };
}
