import social from '@/data/social';
import BulletList from '@/components/BulletList';
import Page from '@/components/Page';
import Experience from '@/components/Experience';
import Recommendations from '@/components/Recommendations';
import Section from '@/components/Section';

export default function Work() {
  return (
    <Page
      title="Work"
      description="Helping teams build consistent, high-quality and inclusive user interfaces with React. Working remotely, floating between design and engineering teams."
    >
      <Section heading="Experience">
        <Experience />
      </Section>
      <Section heading="Interests">
        <BulletList cols={['grid-cols-2', 'md:grid-cols-3']}>
          {[
            'CSS',
            'React',
            'Next.js',
            'TypeScript',
            'Design Systems',
            'Performance',
            'State Machines',
            'Accessibility',
          ].map((item, index) => (
            <BulletList.Item key={index}>{item}</BulletList.Item>
          ))}
        </BulletList>
      </Section>
      <Section heading="Recommendations">
        <Recommendations />
      </Section>
      {/* <Section heading="Connect">
        <BulletList cols={['grid-cols-2', 'md:grid-cols-3']}>
          {social.map((item, index) => (
            <BulletList.Item key={index}>
              <a
                {...item}
                className="underline hover:no-underline focus:no-underline"
              />
            </BulletList.Item>
          ))}
        </BulletList>
      </Section> */}
    </Page>
  );
}
