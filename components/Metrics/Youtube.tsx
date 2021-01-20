import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import Card from '@/components/Card';
import Grid from '@/components/Grid';

export default function Youtube() {
  const { data } = useSWR('/api/youtube', fetcher);
  const subscriberCount = data?.subscriberCount;
  const viewCount = data?.viewCount;

  return (
    <Grid>
      <Grid.Item>
        <Card>
          <Card.Eyebrow>Total subscribers</Card.Eyebrow>
          <Card.Stat>{subscriberCount ? subscriberCount : '-'}</Card.Stat>
        </Card>
      </Grid.Item>

      <Grid.Item>
        <Card>
          <Card.Eyebrow>Total views</Card.Eyebrow>
          <Card.Stat>
            {viewCount ? `${Math.round(viewCount / 1000)}K+` : '-'}
          </Card.Stat>
        </Card>
      </Grid.Item>
    </Grid>
  );
}
