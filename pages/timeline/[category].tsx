import * as React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { compareDesc, format, parseISO } from "date-fns";
import type { Event } from "contentlayer/generated";
import { allEvents } from "contentlayer/generated";
import Lightbox from "@/components/Lightbox";

export async function getStaticPaths() {
  return {
    paths: ["work", "life"].map((category) => {
      return {
        params: {
          category,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context: {
  params: { category: Event["category"] };
}) {
  const { category } = context.params;
  const events = allEvents
    .filter((event) => event.category === category)
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
      title: "Timeline",
      events,
    },
  };
}

const Timeline: NextPage<{
  events: Record<string, Event[]>;
}> = ({ events }) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <header className="mt-16 mb-8">
        <h2>
          Timeline&nbsp;<span aria-hidden={true}>¬</span>
        </h2>
        <div className="mt-2">
          <label htmlFor="category">Filter by:</label>
          <select
            name="category"
            id="category"
            onChange={(e) => {
              router.push(`/timeline/${e.target.value}`);
            }}
            value={category || ""}
          >
            <option value="">all</option>
            <option value="work">work</option>
            <option value="life">life</option>
          </select>
        </div>
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
                          {event.description ? (
                            <p>{event.description}</p>
                          ) : null}
                          {event.media ? (
                            <div className="mt-4 grid grid-cols-5 gap-4">
                              <Lightbox images={event.media}>
                                {({
                                  images,
                                  handlers,
                                }: {
                                  images: any;
                                  handlers: any;
                                }) => {
                                  return images.map(
                                    (image: any, index: number) => {
                                      return (
                                        <button
                                          key={index}
                                          onClick={() => handlers.show(index)}
                                          className="cursor-zoom-in"
                                        >
                                          <div className="flex border rounded-sm aspect-square overflow-hidden">
                                            <Image
                                              objectFit="cover"
                                              src={image.src}
                                              width={image.width}
                                              height={image.height}
                                              alt={image.alt}
                                            />
                                          </div>
                                        </button>
                                      );
                                    }
                                  );
                                }}
                              </Lightbox>
                            </div>
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
