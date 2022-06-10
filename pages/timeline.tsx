import * as React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import type { Event } from "contentlayer/generated";
import { allEvents } from "contentlayer/generated";

export async function getStaticProps() {
  const events = allEvents
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .reduce((years, event) => {
      const year = format(parseISO(event.date), "Y");
      if (!years[year]) {
        years[year] = [];
      }
      years[year].push(event);
      return years;
    }, {} as Record<string, Event[]>);

  return {
    props: {
      events,
    },
  };
}

const Timeline: NextPage<{
  events: Record<string, Event[]>;
}> = ({ events }) => {
  return (
    <>
      <header className="mt-16 mb-8">
        <h2>
          Timeline&nbsp;<span aria-hidden={true}>¬</span>
        </h2>
      </header>
      {Object.entries(events)
        .reverse()
        .map(([year, events]) => {
          return (
            <section key={year} className="mt-16">
              <h2>
                {year}&nbsp;<span aria-hidden={true}>¬</span>
              </h2>
              <ol className="mt-8 grid gap-8">
                {events.map((event, index) => {
                  return (
                    <li key={index}>
                      <article className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        <span className="w-28 flex-shrink-0">
                          <time dateTime={event.date}>
                            {format(parseISO(event.date), "LLL d")}
                          </time>
                        </span>
                        <div>
                          <h3>
                            {event.link ? (
                              <Link href={event.link}>
                                <a>
                                  {event.title}&nbsp;
                                  <span aria-hidden={true}>↗</span>
                                </a>
                              </Link>
                            ) : (
                              event.title
                            )}
                          </h3>
                          {event.link ? (
                            <p>{new URL(event.link).hostname}</p>
                          ) : null}
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}
    </>
  );
};

export default Timeline;
