import Link from 'next/link';
import { slugify } from '@/lib/utils';
import Page from '@/components/Page';
import Section from '@/components/Section';

export const featuredTags = [
  {
    heading: 'Accessibility',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quo.',
    slug: 'a11y',
  },
  {
    heading: 'CSS',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quo.',
    slug: 'css',
  },
  {
    heading: 'React',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quo.',
    slug: 'react',
  },
];

export default function Search() {
  return (
    <Page title="Search" description="">
      <Section heading="Popular tags">
        <div className="grid sm:grid-cols-2 gap-4">
          {featuredTags.map(({ heading, description, slug }) => {
            return (
              <article className="relative bg-gray-900 p-4 rounded-md">
                <h3>
                  <Link href={`/search/${slugify(slug)}`}>
                    <a className="after:absolute after:inset-0 underline hover:no-underline">
                      {heading}
                    </a>
                  </Link>
                </h3>
                <p className="mt-0.5 text-sm text-gray-300">{description}</p>
              </article>
            );
          })}
        </div>
      </Section>
    </Page>
  );
}
