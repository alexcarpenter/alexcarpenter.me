import Entry from '@/components/Entry';
import List from '@/components/List';
import Page from '@/components/Page';
import data from '@/data/bookmarks';

export default function Bookmarks() {
  return (
    <Page title="Bookmarks" description="Saving for reference later.">
      <List>
        {data.map((item) => (
          <List.Item key={item.date}>
            <Entry {...item} />
          </List.Item>
        ))}
      </List>
    </Page>
  );
}
