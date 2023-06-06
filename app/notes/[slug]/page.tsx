import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allNotes } from "@/.contentlayer/generated";
import { Mdx } from "@/app/mdx";
import { parseDateTimeToString } from "@/lib/formatting";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getNoteFromParams(params: PageProps["params"]) {
  const note = allNotes.find((note) => note.slug === params.slug);

  if (!note) {
    null;
  }

  return note;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const note = await getNoteFromParams(params);

  if (!note) {
    return {};
  }

  return {
    title: `Note: ${parseDateTimeToString(note.date)}`,
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allNotes.map(({ slug }) => ({
    slug,
  }));
}

export default async function Note({ params }: PageProps) {
  const note = await getNoteFromParams(params);

  if (!note) {
    notFound();
  }

  return (
    <>
      <article className="mt-16 border-t pt-8">
        <div className="grid gap-8 md:grid-cols-4 md:gap-16">
          <div className="md:col-span-3 md:col-start-2 lg:col-span-2 lg:col-start-2">
            <div className="prose">
              <Mdx code={note.body.code} />
            </div>
          </div>

          <div className="md:col-start-1 md:row-start-1">
            <time
              className="text-sm text-foreground-neutral"
              dateTime={note.date}
            >
              {parseDateTimeToString(note.date)}
            </time>
          </div>
        </div>
      </article>
    </>
  );
}
