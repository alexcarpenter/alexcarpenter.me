import * as React from "react";
import type { NextPage } from "next";
import type { Post, Job, Recommendation } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, allJobs, allRecommendations } from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .slice(0, 3);

  const jobs = allJobs.sort((a, b) => {
    return compareDesc(new Date(a.startDate), new Date(b.startDate));
  });

  const recommendations = allRecommendations.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return {
    props: {
      posts,
      jobs,
      recommendations,
      interests: [
        "Accessibility",
        "CSS",
        "Design Systems",
        "Essentialism",
        "Next.js",
        "Performance",
        "Pragmatism",
        "React",
        "TypeScript",
      ],
    },
  };
}

const Home: NextPage<{
  posts: Post[];
  jobs: Job[];
  recommendations: Recommendation[];
  interests: string[];
}> = ({ posts, jobs, recommendations, interests }) => {
  const [allRecs, showAllRecs] = React.useReducer(() => true, false);
  return (
    <>
      <section className="mt-16">
        <h2 className="mb-8">
          About&nbsp;<span aria-hidden={true}>¬</span>
        </h2>

        <p>
          Hey, I&apos;m Alex. A detail oriented user interface engineer
          interested in CSS architecture, React, TypeScript, design systems, and
          state machines. Currently working at HashiCorp, helping build and
          maintain public-facing HashiCorp websites and web applications with
          Next.js.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="mb-8">
          Experience&nbsp;<span aria-hidden={true}>¬</span>
        </h2>

        <ol className="grid gap-8">
          {jobs.map((job, index) => {
            return (
              <li key={index}>
                <article className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <span className="w-28 flex-shrink-0">
                    {format(parseISO(job.startDate), "y")} &mdash;{" "}
                    {job.endDate ? format(parseISO(job.endDate), "y") : "Now"}
                  </span>
                  <div>
                    <h3>
                      <a href="https://hashicorp.com">
                        {job.title} at {job.company}&nbsp;
                        <span aria-hidden={true}>↗</span>
                      </a>
                    </h3>
                    <p>{job.location || "Remote"}</p>
                    {job.description ? (
                      <p className="mt-2">{job.description}</p>
                    ) : null}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="mb-8">
          Interests&nbsp;<span aria-hidden={true}>¬</span>
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {interests.map((interest, index) => {
            return <li key={index}>{interest}</li>;
          })}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="mb-8">
          Recommendations&nbsp;<span aria-hidden={true}>¬</span>
        </h2>

        <ul className="grid gap-8">
          {recommendations
            .slice(0, allRecs ? recommendations.length : 3)
            .map((recommendation, index) => {
              return (
                <li key={index}>
                  <article className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="w-28 flex-shrink-0">
                      <time dateTime={recommendation.date}>
                        {format(parseISO(recommendation.date), "y")}
                      </time>
                    </span>
                    <div>
                      <p>“{recommendation.text}”</p>
                      <div className="mt-4 flex items-start gap-4">
                        <span className="inline-flex rounded-full overflow-hidden">
                          <Image
                            src={recommendation.avatar}
                            width={32}
                            height={32}
                            alt="Jimmy Merritello avatar"
                          />
                        </span>
                        <p>
                          <span className="text-gray-800 dark:text-gray-200">
                            {recommendation.name}
                          </span>
                          <br />
                          {recommendation.title}, {recommendation.company}
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
        </ul>

        {!allRecs ? (
          <div className="mt-8 flex gap-4">
            <span className="hidden sm:block w-28 flex-shrink-0" />
            <button onClick={showAllRecs}>Load all</button>
          </div>
        ) : null}
      </section>

      <section className="mt-16">
        <h2 className="mb-8">
          Posts&nbsp;<span aria-hidden={true}>¬</span>
        </h2>

        <ul className="grid gap-8">
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <article className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <span className="w-28 flex-shrink-0">
                    <time dateTime={post.date}>
                      {format(parseISO(post.date), "LLL d")}
                    </time>
                  </span>
                  <div>
                    <h3>
                      <Link href={`/posts/${post.slug}`}>
                        <a className="underline">{post.title}</a>
                      </Link>
                    </h3>
                    {post.description ? <p>{post.description}</p> : null}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex gap-4">
          <span className="hidden sm:block w-28 flex-shrink-0" />
          <Link href="/posts">
            <a>View all</a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
