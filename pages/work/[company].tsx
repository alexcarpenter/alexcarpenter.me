import type { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';
import type { ParsedUrlQuery } from 'querystring';
import Image from 'next/image';
import { cx } from '@/lib/utils';
import EntryList from '@/components/EntryList';
import Intro from '@/components/Intro';
import Meta from '@/components/Meta';
import Section from '@/components/Section';
import Symbol from '@/components/Symbol';

interface ContextProps extends ParsedUrlQuery {
  company: string;
}

type CompanyProps = {
  title: string;
  description: string;
  link: string;
  logo: {
    src: string;
    width: number;
    height: number;
  };
  meta: { [key: string]: string };
  highlights: Array<string>;
  recommendations: Array<{
    text: string;
    name: string;
    title: string;
    company: string;
    thumbnail: string;
  }>;
};

const Company: NextPage<CompanyProps> = ({
  title,
  description,
  link,
  logo,
  meta,
  // highlights,
  recommendations,
}) => {
  return (
    <>
      <Intro title={title} description={description} />

      <Section>
        <a href={link} className="inline-flex sm:float-right mb-8">
          <Image
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={`${title} logo`}
            priority={true}
          />
        </a>

        <Meta
          items={Object.entries(meta).map(([title, description]) => {
            return {
              title,
              description,
            };
          })}
        />
      </Section>

      {/* {highlights.length > 0 ? (
        <Section heading="Highlights">
          <ul>
            {highlights.map((item, index) => {
              return (
                <li key={index} className="flex">
                  <Symbol name="right-arrow" position="start" />
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </Section>
      ) : null} */}

      <Section heading="Recommendations">
        <EntryList>
          {recommendations.map((item, index) => {
            return (
              <div key={index} className="flex flex-col sm:flex-row">
                <div className="w-28 flex-shrink-0">
                  <div className="mb-4">
                    <Image
                      src={item.thumbnail}
                      alt={`${item.name} portrait`}
                      width={48}
                      height={48}
                      className="rounded-md w-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p style={{ textIndent: '-.65rem' }}>“{item.text}”</p>
                  <p
                    className={cx(
                      'mt-4',
                      'text-gray-600',
                      'dark:text-gray-300',
                    )}
                  >
                    &mdash; {item.name}, {item.title}, {item.company}
                  </p>
                </div>
              </div>
            );
          })}
        </EntryList>
      </Section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['nationbuilder', 'mighty'].map((company) => {
      return {
        params: { company },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { company } = context.params as ContextProps;
  const workData = await import('../../data/work.json');
  const pageData = await import(`../../data/${company}.json`);
  return {
    props: {
      ...pageData,
      recommendations: workData.recommendations.filter(
        (r) => r.company.toLowerCase() === company.toLowerCase(),
      ),
    },
  };
};

export default Company;
