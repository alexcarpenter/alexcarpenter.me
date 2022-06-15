import { compareDesc, format, parseISO } from "date-fns";
import type { Event } from "contentlayer/generated";
import { allEvents } from "contentlayer/generated";
import Timeline from "@/layouts/timeline";

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

export default Timeline;
