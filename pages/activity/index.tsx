import * as React from "react";
import type { NextPage } from "next";
import type { Activity } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import { Components } from "components/MdxComponents";
import * as Grid from "components/Grid";
import * as List from "components/List";
import { Heading } from "components/Heading";
import { Prose } from "components/Prose";
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

function ActivityItem({ activity }: { activity: Activity }) {
  const MDXContent = useMDXComponent(activity.body.code);
  return (
    <Prose>
      <MDXContent components={Components} />
    </Prose>
  );
}

const Activity: NextPage<{ activities: Activity[] }> = ({ activities }) => {
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

      <Grid.Container>
        <Grid.Column
          colStart={{ xs: "1", md: "2" }}
          colEnd={{ xs: "-1", md: "4" }}
        >
          <Heading fontSize="xxl" as="h1">
            Activity
          </Heading>
          <Spacer height="xxs" />
          <Text fontSize="lg" color="foregroundNeutral">
            Short form thoughts and updates.
          </Text>
        </Grid.Column>
      </Grid.Container>

      <Spacer height="xxxl" />

      <List.Container>
        {activities.map((activity) => {
          return (
            <List.Item key={activity._id}>
              <Grid.Container rowGap="md">
                <Grid.Column
                  colStart={{ xs: "1", sm: "2" }}
                  colEnd={{ xs: "-1", md: "4" }}
                >
                  <ActivityItem activity={activity} />
                </Grid.Column>

                <Grid.Column
                  colStart={{ xs: "1" }}
                  colEnd={{ xs: "-1", sm: "1" }}
                  rowStart={{ sm: "1" }}
                >
                  <Text
                    as="time"
                    dateTime={activity.date}
                    color="foregroundNeutral"
                    fontSize="sm"
                  >
                    {activity.formattedDate}
                  </Text>
                </Grid.Column>
              </Grid.Container>
            </List.Item>
          );
        })}
      </List.Container>
    </>
  );
};

export default Activity;
