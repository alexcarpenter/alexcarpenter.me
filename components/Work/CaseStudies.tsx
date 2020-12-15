import Card from "@/components/Card";
import Stack from "@/components/Stack";
import Section from "@/components/Section";

export default function CaseStudies() {
  return (
    <Section>
      <Section.Title>Case studies</Section.Title>
      <Stack grid>
        <Card>
          <Card.Eyebrow as='p'>NationBuilder</Card.Eyebrow>
          <Card.Title>Automations</Card.Title>
          <Card.Description>
            Vitae fringilla est donec et mattis pellentesque massa at vivamus
            pretium conubia suspendisse porttitor hac nibh eget nascetur
            sociosqu primis mollis varius ullamcorper pharetra lobortis
            adipiscing fermentum magna urna iaculis
          </Card.Description>
        </Card>
        <Card>
          <Card.Eyebrow as='p'>Mighty in the Midwest</Card.Eyebrow>
          <Card.Title>Conservation Legacy</Card.Title>
          <Card.Description>
            Vitae fringilla est donec et mattis pellentesque massa at vivamus
            pretium conubia suspendisse porttitor hac nibh eget nascetur
            sociosqu primis mollis varius ullamcorper pharetra lobortis
            adipiscing fermentum magna urna iaculis
          </Card.Description>
        </Card>
      </Stack>
    </Section>
  );
}
