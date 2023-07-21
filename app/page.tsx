import Image from "next/image";
import Link from "next/link";
import { formatTags, compareDesc } from "@/lib/formatting";
import { allRecommendations, allJobs } from "contentlayer/generated";
import { buttonVariants } from "@/styles/button";
import { Recommendations } from "./recommendations";

export default function Home() {
  const sortedJobs = allJobs.sort(({ startDate: a }, { startDate: b }) =>
    compareDesc(new Date(a), new Date(b))
  );
  const sortedRecommendations = allRecommendations.sort(
    ({ date: a }, { date: b }) => compareDesc(new Date(a), new Date(b))
  );
  return (
    <>
      <h1 className="sr-only">Alex Carpenter</h1>

      <header className="mt-16 grid gap-x-16 gap-y-8 md:grid-cols-4">
        <div className="md:col-start-2 lg:col-start-4 lg:row-start-1">
          <Image
            className="rounded-md opacity-60 grayscale"
            src="/images/me.jpeg"
            width={100}
            height={100}
            alt="Headshot of Alex Carpenter at his desk"
          />
        </div>

        <div className="md:col-span-3 md:col-start-2 lg:col-span-2 lg:col-start-2">
          <p className="max-w-2xl bg-gradient-to-br from-text-gradient-start to-text-gradient-end bg-clip-text font-serif text-2xl italic text-transparent md:text-4xl">
            A detail oriented user interface engineer interested in CSS
            architecture, React, TypeScript, animation, and design systems.
          </p>
          <div className="mt-8">
            <Link href="/about" className={buttonVariants()}>
              Learn more
            </Link>
          </div>
        </div>
      </header>

      <section className="mt-16">
        <header className="grid gap-16 md:grid-cols-4">
          <div className="md:col-span-2 md:col-start-2">
            <h2 className="font-variable-semibold text-lg">
              Experience <span aria-hidden="true">¬</span>
            </h2>
          </div>
        </header>

        <ul className="mt-8">
          {sortedJobs.map(
            ({ _id, company, description, tags, startDate, endDate }) => {
              return (
                <li
                  key={_id}
                  className="grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4"
                >
                  <div>
                    <h3 className="font-variable-semibold">{company}</h3>
                  </div>

                  <div className="col-span-2">
                    <p className="max-w-prose">{description}</p>

                    {tags ? (
                      <p className="mt-2 text-foreground-neutral">
                        <span className="sr-only">Tools used:</span>
                        {formatTags(tags)}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <p className="text-foreground-neutral">
                      {new Date(startDate).getFullYear()} &mdash;{" "}
                      {endDate ? new Date(endDate).getFullYear() : "Now"}
                    </p>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </section>

      <section className="mt-16">
        <header className="grid gap-16 md:grid-cols-4">
          <div className="md:col-span-2 md:col-start-2">
            <h2 className="font-variable-semibold text-lg">
              Recommendations <span aria-hidden="true">¬</span>
            </h2>
          </div>
        </header>

        <Recommendations recommendations={sortedRecommendations} />
      </section>
    </>
  );
}
