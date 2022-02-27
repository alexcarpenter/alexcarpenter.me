import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import pageData from '@/data/work.json';
import { cx } from '@/lib/utils';
import Button from '@/components/Button';
import EntryList from '@/components/EntryList';
import Intro from '@/components/Intro';
import RightArrow from '@/components/RightArrow';
import Section from '@/components/Section';

type WorkProps = {
  title: string;
  description: string;
  experience: Array<{
    link?: string;
    company: string;
    title: string;
    start: string;
    end: string;
  }>;
  interests: Array<string>;
  recommendations: Array<{
    text: string;
    name: string;
    title: string;
    company: string;
    thumbnail: string;
  }>;
};

const Work: NextPage<WorkProps> = ({
  title,
  description,
  experience,
  interests,
  recommendations,
}) => {
  const [viewAllRecs, setViewAllRecs] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  return (
    <>
      <Intro title={title} description={description} />

      <Section heading="Experience">
        <div className="grid sm:grid-cols-2 gap-4">
          {experience.map((job, index) => {
            if (index === 0) {
              return (
                <article
                  key={index}
                  className="relative flex justify-between items-center p-4 rounded-md sm:col-span-2 bg-gradient-to-r from-[#844FBA] to-[#2E71E5]"
                >
                  <div>
                    <h3>
                      {job.link ? (
                        <Link href={job.link}>
                          <a className="after:absolute after:inset-0 underline hover:no-underline text-white">
                            {job.company}
                          </a>
                        </Link>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <p className="mt-0.5 text-sm text-white text-opacity-90">
                      {job.title}
                      <br />
                      {job.start} - {job.end}
                    </p>
                  </div>
                  <svg
                    className="flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 106.9 113.1"
                    width="60"
                    fill="white"
                  >
                    <path d="M44.5 0L0 25.7v61.7l16.7 9.7V35.3l27.8-16z" />
                    <path d="M62.3 0v49.2H44.5V30.8l-16.7 9.7v62.9l16.7 9.7v-49h17.8v18.2l16.8-9.6v-63z" />
                    <path d="M62.3 113.1l44.6-25.7V25.7l-16.8-9.6v61.7l-27.8 16z" />
                  </svg>
                </article>
              );
            }
            return (
              <article
                key={index}
                className={cx(
                  'p-4 rounded-md',
                  'dark:bg-gray-800',
                  'bg-gray-200',
                )}
              >
                <h3>{job.company}</h3>
                <p
                  className={cx(
                    'mt-0.5 text-sm',
                    'text-gray-600',
                    'dark:text-gray-300',
                  )}
                >
                  {job.title}
                  <br />
                  {job.start} - {job.end}
                </p>
              </article>
            );
          })}

          <div className="flex items-center justify-center p-4">
            <p>
              <a
                href="https://www.linkedin.com/in/imalexcarpenter/"
                className="underline hover:no-underline focus:no-underline"
              >
                View LinkedIn
              </a>
              <RightArrow position="end" />
            </p>
          </div>
        </div>
      </Section>

      <Section heading="Interests">
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((item, index) => (
            <li key={index}>
              <RightArrow position="start" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="Recommendations">
        <AnimatePresence initial={false}>
          <EntryList>
            {recommendations
              .slice(0, viewAllRecs ? recommendations.length : 3)
              .map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col sm:flex-row"
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.2,
                    }}
                  >
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
                  </motion.div>
                );
              })}
          </EntryList>
        </AnimatePresence>
        {!viewAllRecs && (
          <div className="mt-8 pl-0 md:pl-28 text-center md:text-left">
            <Button onClick={() => setViewAllRecs(true)} size="sm">
              Show more
            </Button>
          </div>
        )}
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

export default Work;
