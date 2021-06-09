import social from '@/data/social';
import Page from '@/components/Page';
// import Experience from '@/components/Experience';
import Recommendations from '@/components/Recommendations';
import Work from '@/components/Work';
import BulletList from '@/components/BulletList';

export default function WorkPage() {
  return (
    <Page
      title="Work"
      description="Helping teams build consistent, high-quality and inclusive user interfaces with React. Working remotely, floating between design and engineering teams."
    >
      <div className="divide-y divide-white divide-opacity-10 -my-8">
        {/* <section className="py-8">
          <h2 className="mb-8 text-xl">Experience</h2>
          <Experience />
        </section> */}
        {/* <section className="py-8">
          <h2 className="mb-8 text-xl">Selected work</h2>
          <Work />
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
            ].map((item) => (
              <BulletList.Item>{item}</BulletList.Item>
            ))}
          </BulletList>
        </section>
        <section className="py-8">
          <h2 className="mb-8 text-xl">Recomendations</h2>
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
