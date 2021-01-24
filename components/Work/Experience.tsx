import Grid from '@/components/Grid';
import Section from '@/components/Section';

export default function Experience() {
  return (
    <Section>
      <Section.Title>Experience</Section.Title>
      <Grid cols={1}>
        <Grid.Item>
          <h3 className="text-xl font-bold">NationBuilder</h3>
          <p className="mt-1 text-gray-600">UI Engineer • Nov 2018 - Present</p>
          <ul className="pl-5 mt-2 list-disc">
            <li>
              Maintain and implement new features within our design system
              Radius.
            </li>
            <li>
              Implement new components and features using React, Redux, and
              React Router.
            </li>
            <li>
              Implement marketing landing pages for different product verticals.
            </li>
          </ul>
        </Grid.Item>

        <Grid.Item>
          <h3 className="text-xl font-bold">Mighty in the Midwest</h3>
          <p className="mt-1 text-gray-600">
            Senior Developer • Oct 2015 - Nov 2018
          </p>
          <ul className="pl-5 mt-2 list-disc">
            <li>
              Architected solutions and estimate project scope for new and
              existing client features.
            </li>
            <li>
              Introduced modern Javascript practices with Webpack and Rollup.
            </li>
          </ul>
        </Grid.Item>

        <Grid.Item>
          <h3 className="text-xl font-bold">Masuga Design</h3>
          <p className="mt-1 text-gray-600">
            Front-end Developer • Feb 2012 - Oct 2015
          </p>
          <ul className="pl-5 mt-2 list-disc">
            <li>Designed and developed a SaaS app built on Laravel.</li>
            <li>
              Developed mobile-first front-end templates for clients such as FOX
              Networks Info and A+E Networks Affiliates.
            </li>
          </ul>
        </Grid.Item>
      </Grid>
    </Section>
  );
}
