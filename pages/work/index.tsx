import Header from "@/components/Header";
import Page from "@/components/Page";
import { CaseStudies, Experience, Recommendations } from "@/components/Work";

export default function Work() {
  return (
    <Page
      title='Work'
      description='Helping teams build consistent, high-quality and inclusive user interfaces. Working remotely, floating between design and engineering teams.'
    >
      <Header>
        <Header.Title>Work</Header.Title>
        <Header.Description>
          Helping teams build consistent, high-quality and inclusive user
          interfaces. Working remotely, floating between design and engineering
          teams.
        </Header.Description>
      </Header>
      <CaseStudies />
      <Experience />
      <Recommendations />
    </Page>
  );
}
