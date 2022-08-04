import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
// import { format, parseISO } from "date-fns";
import type { Event } from "contentlayer/generated";
import { Box } from "@/components/Box";
import { Heading } from "@/components/Heading";
import { Link } from "@/components/Link";
import { Spacer } from "@/components/Spacer";
import { List, ListItem } from "@/components/List";

const Timeline: NextPage<{
  events: Record<string, Event[]>;
}> = ({ events }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <header>
        <Heading decorated>Timeline</Heading>
        <Spacer height="sm" />
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
      <Spacer height="xxl" />
      <section>
        <Box
          display="grid"
          columnGap="xl"
          gridTemplateColumns={{
            sm: "1fr",
            md: "8rem 1fr",
          }}
        >
          <Heading>Currently</Heading>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              molestias doloribus pariatur consequatur quaerat tenetur nisi
              recusandae voluptate sunt molestiae? Repellat deserunt in, laborum
              eligendi suscipit repellendus dicta labore repudiandae.
            </p>
          </div>
        </Box>
      </section>
      <Spacer height="xl" />
      {Object.entries(events)
        .reverse()
        .map(([year, events], index) => {
          return (
            <React.Fragment key={year}>
              {index !== 0 ? <Spacer height="xxl" /> : null}
              <section>
                <Heading>{year}</Heading>
                <Spacer height="xl" />
                <List as="ol">
                  {events.map((event, index) => {
                    return (
                      <ListItem key={index}>
                        <Box
                          display="grid"
                          columnGap="xl"
                          gridTemplateColumns={{
                            sm: "1fr",
                            md: "8rem 1fr",
                          }}
                        >
                          <span>
                            <time dateTime={event.date}>
                              {/* {format(parseISO(event.date), "LLL d")} */}
                            </time>
                            <Spacer height="xs" />
                          </span>
                          <div>
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
                              <Spacer height="xs" />
                            ) : null}
                            {event.link ? (
                              <p>{new URL(event.link).hostname}</p>
                            ) : null}
                            {event.description ? (
                              <p>{event.description}</p>
                            ) : null}
                          </div>
                        </Box>
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
