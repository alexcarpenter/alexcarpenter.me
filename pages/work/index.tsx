import social from '@/data/social';
import Page from '@/components/Page';
import Experience from '@/components/Experience';
import Interests from '@/components/Interests';
import Recommendations from '@/components/Recommendations';
import Work from '@/components/Work';

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
          <h2 className="mb-8 text-xl">Work</h2>
          <Work />
        </section> */}
        <section className="py-8">
          <h2 className="mb-8 text-xl">Interests</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'CSS',
              'React',
              'Next.js',
              'TypeScript',
              'Design Systems',
              'Performance',
              'State Machinces',
              'Accessibility',
            ].map((item) => (
              <li>
                <span
                  role="img"
                  aria-hidden="true"
                  className="text-white text-opacity-75"
                >
                  &#8594;
                </span>{' '}
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="py-8">
          <h2 className="mb-8 text-xl">Recomendations</h2>
          <Recommendations />
        </section>
        <section className="py-8">
          <h2 className="mb-8 text-xl">Connect</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {social.map((item, index) => (
              <li key={index}>
                <span
                  role="img"
                  aria-hidden="true"
                  className="text-white text-opacity-75"
                >
                  &#8594;
                </span>
                &nbsp;
                <a
                  {...item}
                  className="underline hover:no-underline focus:no-underline"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Page>
  );
}
