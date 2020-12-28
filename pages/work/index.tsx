import Page from '@/components/Page';
import { CaseStudies, Experience, Recommendations } from '@/components/Work';

export default function Work() {
  return (
    <Page
      meta={{
        title: 'Work',
        description:
          'Helping teams build consistent, high-quality and inclusive user interfaces with React. Working remotely, floating between design and engineering teams.',
      }}
    >
      <Page.Header>
        <Page.Title>Work</Page.Title>
        <Page.Description>
          Helping teams build consistent, high-quality and inclusive user
          interfaces with React. Working remotely, floating between design and
          engineering teams.
        </Page.Description>
      </Page.Header>
      {/* <CaseStudies /> */}
      <Experience />
      <Recommendations />
    </Page>
  );
}
