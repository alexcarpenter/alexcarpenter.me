import Entry from '@/components/Entry';
import List from '@/components/List';
import Page from '@/components/Page';
import Section from '@/components/Section';

export default function Changelog() {
  return (
    <Page
      title="Changelog"
      description="Personal and professional life updates."
    >
      {/* <Section heading="2021">
        <List>
          <List.Item>
            <Entry
              image={{
                src: '/images/changelog/hashicorp.svg',
                alt: 'HashiCorp',
              }}
              date="2021-07-14"
              title="Joined HashiCorp as a Web Engineer"
              description="Lorem neque gravida potenti blandit erat ante felis leo venenatis cubilia sem in posuere pharetra fames feugiat et donec phasellus"
              tags={['professional']}
            />
          </List.Item>
        </List>
      </Section> */}
      <Section heading="2018">
        <List>
          <List.Item>
            <Entry
              image={{
                src: '/images/changelog/nationbuilder.svg',
                alt: 'NationBuilder',
              }}
              date="2021-11-20"
              title="Joined NationBuilder as a UI Engineer"
              description="Lorem neque gravida potenti blandit erat ante felis leo venenatis cubilia sem in posuere pharetra fames feugiat et donec phasellus"
              tags={['professional']}
            />
          </List.Item>
          <List.Item>
            <Entry
              image={{
                src: '/images/changelog/frankie.jpg',
                alt: 'Frankie',
              }}
              date="2021-07-07"
              title="Got a new puppy!"
              description="Meet Frankie, our chocolate dapple long-haired mini dachshund."
              tags={['personal']}
            />
          </List.Item>
        </List>
      </Section>
      <Section heading="2014">
        <List>
          <List.Item>
            <Entry
              date="2014-09-07"
              title="Launched I Brew My Own Coffee podcast"
              link="https://ibrewmyowncoffee.simplecast.com"
              description="A podcast for people who care about coffee."
              tags={['personal']}
            />
          </List.Item>
        </List>
      </Section>
      <Section heading="2013">
        <List>
          <List.Item>
            <Entry
              image={{
                src: '/images/changelog/wedding.jpeg',
                alt: 'Wedding day',
              }}
              date="2021-08-24"
              title="Got married!"
              description="Best day of my life."
              tags={['personal']}
            />
          </List.Item>
        </List>
      </Section>
      <Section heading="1988">
        <List>
          <List.Item>
            <Entry date="1988-01-03" title="Born" tags={['personal']} />
          </List.Item>
        </List>
      </Section>
    </Page>
  );
}
