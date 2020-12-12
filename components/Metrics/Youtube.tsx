import useSWR from "swr";
import Fetcher from "@/lib/fetcher";
import Card from "@/components/Card";
import Grid from "@/components/Grid";

export default function Youtube() {
  const { data } = useSWR("/api/youtube", Fetcher);
  const subscriberCount = data?.subscriberCount;
  const viewCount = data?.viewCount;

  return (
    <Grid>
      <Card>
        <Card.Eyebrow>Total subscribers</Card.Eyebrow>
        <Card.Stat>{subscriberCount ? subscriberCount : "-"}</Card.Stat>
      </Card>
      <Card>
        <Card.Eyebrow>Total views</Card.Eyebrow>
        <Card.Stat>{viewCount ? `${Math.round(viewCount / 1000)}K+` : "-"}</Card.Stat>
      </Card>
    </Grid>
  );
}
