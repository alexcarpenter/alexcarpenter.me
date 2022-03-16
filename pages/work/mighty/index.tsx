import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { groupByYear, cx } from '@/lib/utils';
import pageData from '@/data/mighty.json';
import workData from '@/data/work.json';
import Intro from '@/components/Intro';
import Note from '@/components/Note';
import Meta from '@/components/Meta';
import Section from '@/components/Section';
import EntryList from '@/components/EntryList';

type MightyProps = {
  title: string;
  description: string;
  meta: { [key: string]: string };
};

const Mighty: NextPage<MightyProps> = ({ title, description, meta }) => {
  const recommendations = workData.recommendations.filter(
    (r) => r.company === 'Mighty',
  );
  return (
    <>
      <Intro title={title} description={description} />

      <Section>
        <a
          href="https://nationbuilder.com"
          className="inline-flex float-right mb-8"
        >
          <span className="sr-only">Mighty</span>
          <svg
            width="108"
            height="18"
            viewBox="0 0 108 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.68 1l3.344 10.303L13.32 1h5.54L20 18h-4.398l-.555-9.953L11.794 18H8.207L4.913 7.99 4.4 18H0L1.167 1H6.68zM30 1v17h-5V1h5zm30.471 0v6.39h6.057V1H71v17h-4.472v-6.776h-6.057V18H56V1h4.471zM88 1v3.616h-4.267V18h-4.467V4.616H75V1h13zm8.184 0L99.5 7.23 102.816 1H108l-6.186 10.25V18h-4.63v-6.75L91 1h5.184zM43.2 0c2.397 0 4.52.783 6.311 2.33l-2.59 3.154c-1.124-1.052-2.366-1.585-3.697-1.585-2.604 0-4.568 2.194-4.568 5.101 0 3.05 1.826 5.1 4.544 5.1 1.158 0 2.4-.484 3.324-1.295l.062-.056v-1.703h-2.798V7.291H51v7.01l-.051.07C49.199 16.745 46.528 18 43.223 18 37.879 18 34 14.215 34 9c0-5.046 4.04-9 9.199-9z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...pageData,
    },
  };
};

export default Mighty;
