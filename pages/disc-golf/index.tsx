import Page from '@/components/Page';
import InTheBag from '@/components/InTheBag';

export default function DiscGolf() {
  return (
    <Page
      meta={{
        title: 'Disc Golf',
        description: "What's in my disc golf bag as of the start of 2021.",
      }}
    >
      <Page.Header>
        <Page.Title>Disc Golf</Page.Title>
        <Page.Description>
          What's in my disc golf bag as of the start of 2021.
        </Page.Description>
      </Page.Header>
      <InTheBag />
    </Page>
  );
}
