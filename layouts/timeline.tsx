import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import type { Event } from "contentlayer/generated";
// import Lightbox from "@/components/Lightbox";
import { Heading } from "@/components/Heading";
import { Link } from "@/components/Link";
import { Spacer } from "@/components/Spacer";
import { List, ListItem } from "@/components/List";
import { Item, ItemMeta, ItemContent } from "@/components/Item";

const Timeline: NextPage<{
  events: Record<string, Event[]>;
}> = ({ events }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <header>
        <Heading decorated>Timeline</Heading>
        <Spacer size="sm" />
        <p>
          Filter by{" "}
          <Link
            href="/timeline"
            aria-current={category === undefined ? "page" : undefined}
          >
            all
          </Link>
          ,{" "}
          <Link
            href="/timeline/work"
            aria-current={category === "work" ? "page" : undefined}
          >
            work
          </Link>
          ,{" "}
          <Link
            href="/timeline/life"
            aria-current={category === "life" ? "page" : undefined}
          >
            life
          </Link>
          .
        </p>
      </header>
      <Spacer size="xl" />
      {Object.entries(events)
        .reverse()
        .map(([year, events], index) => {
          return (
            <React.Fragment key={year}>
              {index !== 0 ? <Spacer size="xxl" /> : null}
              <section>
                <Heading>{year}</Heading>
                <Spacer size="xl" />
                <List as="ol">
                  {events.map((event, index) => {
                    return (
                      <ListItem key={index}>
                        <Item>
                          <ItemMeta>
                            <time dateTime={event.date}>
                              {format(parseISO(event.date), "LLL d")}
                            </time>
                          </ItemMeta>
                          <ItemContent>
                            <Heading as="h3">
                              {event.link ? (
                                <Link href={event.link}>
                                  {event.title}&nbsp;
                                </Link>
                              ) : (
                                event.title
                              )}
                            </Heading>
                            {event.link || event.description ? (
                              <Spacer size="xs" />
                            ) : null}
                            {event.link ? (
                              <p>{new URL(event.link).hostname}</p>
                            ) : null}
                            {event.description ? (
                              <p>{event.description}</p>
                            ) : null}
                            {/* {event.media ? (
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
                          ) : null} */}
                          </ItemContent>
                        </Item>
                      </ListItem>
                    );
                  })}
                </List>
              </section>
            </React.Fragment>
          );
        })}
    </>
  );
};

export default Timeline;
