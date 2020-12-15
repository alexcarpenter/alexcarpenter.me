import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Card from "@/components/Card";
import Stack from "@/components/Stack";

export default function Youtube() {
  const { data } = useSWR("/api/youtube", fetcher);
  const subscriberCount = data?.subscriberCount;
  const viewCount = data?.viewCount;

  return (
    <Stack grid>
      <Stack.Item>
        <Card>
          <Card.Eyebrow>Total subscribers</Card.Eyebrow>
          <Card.Stat>{subscriberCount ? subscriberCount : "-"}</Card.Stat>
        </Card>
      </Stack.Item>

      <Stack.Item>
        <Card>
          <Card.Eyebrow>Total views</Card.Eyebrow>
          <Card.Stat>
            {viewCount ? `${Math.round(viewCount / 1000)}K+` : "-"}
          </Card.Stat>
        </Card>
      </Stack.Item>
    </Stack>
  );
}
