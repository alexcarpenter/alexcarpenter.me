import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allActivities } from "@/.contentlayer/generated";
import { Mdx } from "@/app/mdx";
import { parseDateTimeToString } from "@/lib/formatting";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getActivityFromParams(params: PageProps["params"]) {
  const activity = allActivities.find(
    (activity) => activity.slug === params.slug
  );

  if (!activity) {
    null;
  }

  return activity;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const activity = await getActivityFromParams(params);

  if (!activity) {
    return {};
  }

  return {};
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allActivities.map(({ slug }) => ({
    slug,
  }));
}

export default async function Activity({ params }: PageProps) {
  const activity = await getActivityFromParams(params);

  if (!activity) {
    notFound();
  }

  return (
    <>
      <article className="mt-16 border-t pt-8">
        <div className="grid gap-8 md:grid-cols-4 md:gap-16">
          <div className="md:col-span-3 md:col-start-2 lg:col-span-2 lg:col-start-2">
            <div className="prose">
              <Mdx code={activity.body.code} />
            </div>
          </div>

          <div className="md:col-start-1 md:row-start-1">
            <time
              className="text-sm text-foreground-neutral"
              dateTime={activity.date}
            >
              {parseDateTimeToString(activity.date)}
            </time>
          </div>
        </div>
      </article>
    </>
  );
}
