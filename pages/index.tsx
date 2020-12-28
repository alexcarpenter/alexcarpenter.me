import Page from '@/components/Page';

export default function Home() {
  return (
    <Page
      meta={{
        description:
          "Hey, I'm Alex. User interface engineer currently interested in CSS architecture, React, TypeScript, design systems, and state machines.",
      }}
    >
      <Page.Header>
        <Page.Title>Hey, I'm Alex</Page.Title>
        <Page.Description>
          a detail oriented user interface engineer currently interested in CSS
          architecture, React, TypeScript, design systems, and state machines.
        </Page.Description>
      </Page.Header>
    </Page>
  );
}
