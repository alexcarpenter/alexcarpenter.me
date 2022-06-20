import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import type { Event } from "contentlayer/generated";
import Lightbox from "@/components/Lightbox";

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
        <p className="mt-2">
          Filter by{" "}
          <Link href="/timeline">
            <a
              className="underline"
              aria-current={category === undefined ? "page" : undefined}
            >
              all
            </a>
          </Link>
          ,{" "}
          <Link href="/timeline/work">
            <a
              className="underline"
              aria-current={category === "work" ? "page" : undefined}
            >
              work
            </a>
          </Link>
          ,{" "}
          <Link href="/timeline/life">
            <a
              className="underline"
              aria-current={category === "life" ? "page" : undefined}
            >
              life
            </a>
          </Link>
          .
        </p>
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
                      <article className="flex flex-col sm:flex-row sm:gap-4">
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
                              <Lightbox
                                title={`${event.title} images`}
                                images={event.media}
                              >
                                {({ images, handlers }) => {
                                  return images.map((image, index) => {
                                    return (
                                      <button
                                        key={index}
                                        onClick={() => handlers.show(index)}
                                        className="cursor-zoom-in"
                                      >
                                        <span className="sr-only">{`View image ${
                                          index + 1
                                        } in lightbox`}</span>
                                        <div className="flex border border-gray-200 dark:border-gray-700 rounded-sm aspect-square overflow-hidden">
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
                                  });
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
