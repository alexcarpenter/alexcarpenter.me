import { getAllMdx } from '@/lib/mdx';
import social from '@/data/social';
import Page from '@/components/Page';
import Recommendations from '@/components/Recommendations';
import SelectedWork from '@/components/SelectedWork';
import BulletList from '@/components/BulletList';

export default function Work({ work }) {
  return (
    <Page
      title="Work"
      description="Helping teams build consistent, high-quality and inclusive user interfaces with React. Working remotely, floating between design and engineering teams."
    >
      <div className="divide-y divide-white divide-opacity-10 -my-8">
        {/* <section className="py-8">
          <h2 className="mb-8 text-xl">Selected work</h2>
          <SelectedWork work={work} />
        </section> */}
        <section className="py-8">
          <h2 className="mb-8 text-xl">Interests</h2>
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
        </section>
        <section className="py-8">
          <h2 className="mb-8 text-xl">Recommendations</h2>
          <Recommendations />
        </section>
        <section className="py-8">
          <h2 className="mb-8 text-xl">Connect</h2>
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
        </section>
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  const mdxFiles = getAllMdx('work');
  return {
    props: {
      work: mdxFiles,
    },
  };
}
