import Card from "@/components/Card";
import ExternalLink from "@/components/ExternalLink";
import Stack from "@/components/Stack";
import Section from "@/components/Section";

export default function CaseStudies() {
  return (
    <Section>
      <Section.Title>Case studies</Section.Title>
      <Stack grid>
        <Card>
          <Card.Media
            color='#D0021B'
            src='/conservation-legacy.png'
            width='800'
            height='450'
          />
          <Card.Eyebrow as='p'>NationBuilder</Card.Eyebrow>
          <Card.Title>Automations</Card.Title>
          <Card.Description>
            Vitae fringilla est donec et mattis pellentesque massa at vivamus
            pretium conubia suspendisse porttitor hac nibh eget nascetur
            sociosqu primis mollis varius ullamcorper pharetra lobortis
            adipiscing fermentum magna urna iaculis
          </Card.Description>
          <div className='mt-auto pt-4'>
            <ExternalLink href='https://nationbuilder.com/automations'>
              Learn more
            </ExternalLink>
          </div>
        </Card>
        <Card>
          <Card.Media
            color='#4f4c08'
            src='/conservation-legacy.png'
            width='800'
            height='450'
          />
          <Card.Eyebrow as='p'>Mighty in the Midwest</Card.Eyebrow>
          <Card.Title>Conservation Legacy</Card.Title>
          <Card.Description>
            Vitae fringilla est donec et mattis pellentesque massa at vivamus
            pretium conubia suspendisse porttitor hac nibh eget nascetur
            sociosqu primis mollis varius ullamcorper pharetra lobortis
            adipiscing fermentum magna urna iaculis
          </Card.Description>
          <div className='mt-auto pt-4'>
            <ExternalLink href='https://conservationlegacy.org'>
              Visit website
            </ExternalLink>
          </div>
        </Card>
      </Stack>
    </Section>
  );
}
