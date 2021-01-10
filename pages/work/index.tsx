import Page from '@/components/Page';
// import ExternalLink from '@/components/ExternalLink';
// import { Download } from 'react-feather';
import {
  CaseStudies,
  Experience,
  Interests,
  Recommendations,
} from '@/components/Work';

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
        {/* <ExternalLink href="https://alexcarpenter.me/resume.pdf" icon={Download}>Download resume</ExternalLink> */}
      </Page.Header>
      {/* <CaseStudies /> */}
      <Interests />
      <Experience />
      <Recommendations />
    </Page>
  );
}
