import type { NextPage } from "next/types";
import { NextSeo } from "next-seo";
import type { Activity } from "contentlayer/generated";
import { allActivities } from "contentlayer/generated";
import { Box } from "components/Box";
import { ActivityItem } from "components/ActivityItem";

export async function getStaticPaths() {
  return {
    paths: allActivities.map((activity) => ({
      params: { slug: activity.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const item = allActivities.find((activity) => activity.slug === params.slug);
  return {
    props: {
      item,
    },
  };
}

const ActivityItemPage: NextPage<{ item: Activity }> = ({ item }) => {
  return (
    <>
      <NextSeo
        title={`Update: ${item.formattedDate}`}
        openGraph={{
          title: `Update: ${item.formattedDate}`,
          url: `https://alexcarpenter.me/activity/${item.slug}`,
        }}
      />
      <Box maxWidth="text" marginX="auto">
        <ActivityItem {...item} />
      </Box>
    </>
  );
};

export default ActivityItemPage;
