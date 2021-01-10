import Card from '@/components/Card';
import ExternalLink from '@/components/ExternalLink';
import Grid from '@/components/Grid';
import Section from '@/components/Section';

export default function CaseStudies() {
  return (
    <Section>
      <Section.Title>Case studies</Section.Title>
      <Grid>
        <Grid.Item>
          <Card>
            <Card.Eyebrow as="p">NationBuilder</Card.Eyebrow>
            <Card.Title>Automations</Card.Title>
            <Card.Description>
              Vitae fringilla est donec et mattis pellentesque massa at vivamus
              pretium conubia suspendisse porttitor hac nibh eget nascetur
              sociosqu primis mollis varius ullamcorper pharetra lobortis
              adipiscing fermentum magna urna iaculis
            </Card.Description>
            <div className="pt-4 mt-auto">
              <ExternalLink href="https://conservationlegacy.org">
                Learn more
              </ExternalLink>
            </div>
          </Card>
        </Grid.Item>
        <Grid.Item>
          <Card>
            <Card.Eyebrow as="p">Mighty in the Midwest</Card.Eyebrow>
            <Card.Title>Conservation Legacy</Card.Title>
            <Card.Description>
              Vitae fringilla est donec et mattis pellentesque massa at vivamus
              pretium conubia suspendisse porttitor hac nibh eget nascetur
              sociosqu primis mollis varius ullamcorper pharetra lobortis
              adipiscing fermentum magna urna iaculis
            </Card.Description>
            <div className="pt-4 mt-auto">
              <ExternalLink href="https://conservationlegacy.org">
                Visit website
              </ExternalLink>
            </div>
          </Card>
        </Grid.Item>
      </Grid>
    </Section>
  );
}
