import useSWR from 'swr';
import Card from "@/components/Card";
import Grid from "@/components/Grid";

const fetcher = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const formatNumber = num => {
  if (isNaN(num)) return num;

  if (num < 9999) {
    return num;
  }

  if (num < 1000000) {
    return `${Math.round(num / 1000)}K+`;
  }
  if (num < 10000000) {
    return `${(num / 1000000).toFixed(2)}M+`;
  }

  return num;
}

export default function ScreencastStats() {
  const { data, error } = useSWR('/api/youtube', fetcher);
  if (error) {
    throw new Error('Error loading data');
  }
  return (
    <Grid>
      <Card>
        <Card.Eyebrow>Total subscribers</Card.Eyebrow>
        <Card.Stat>{data ? data.subscriberCount : '-'}</Card.Stat>
      </Card>
      <Card>
        <Card.Eyebrow>Total views</Card.Eyebrow>
        <Card.Stat>{data ? formatNumber(data.viewCount) : '-'}</Card.Stat>
      </Card>
    </Grid>
  )
}
