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

export async function getStaticProps() {
  const activities = allActivities.sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });
  return {
    props: {
      activities,
    },
  };
}

const ActivityPage: NextPage<{ activities: Activity[] }> = ({ activities }) => {
  return (
    <>
      <NextSeo
        title="Activity"
        description="Short form thoughts and updates."
        openGraph={{
          title: "Activity",
          description: "Short form thoughts and updates.",
        }}
      />

      <Box
        as="header"
        textAlign={{ md: "center" }}
        maxWidth="container"
        marginX="auto"
      >
        <Box display="inline-flex" gap="xs">
          <Heading fontSize={{ xs: "xxl", sm: "xxxl" }} as="h1">
            Activity
          </Heading>
          <Box flexShrink={0} color="foregroundAction">
            <svg
              width="1.25em"
              viewBox="0 0 24 24"
              aria-label="Verified account"
              role="img"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
                ></path>
              </g>
            </svg>
          </Box>
        </Box>
        <Spacer height="sm" />
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
