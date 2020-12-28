import ContactForm from '@/components/ContactForm';
import Page from '@/components/Page';
import Section from '@/components/Section';

export default function Contact() {
  return (
    <Page meta={{ title: 'Contact' }}>
      <Page.Header>
        <Page.Title>Contact</Page.Title>
        <Page.Description>
          Id consequat in fusce aenean dictumst ornare habitasse ante tempus
          enim rutrum pretium lacinia nec.
        </Page.Description>
      </Page.Header>
      <Section>
        <ContactForm />
      </Section>
    </Page>
  );
}
