import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/app/mdx";
import { parseDateToString } from "@/lib/formatting";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(params: PageProps["params"]) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPosts.map(({ slug }) => ({
    slug,
  }));
}

export default async function Post({ params }: PageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article>
        <header className="mt-16 grid gap-16 md:grid-cols-4">
          <div className="md:col-span-3 md:col-start-2 lg:col-span-2 lg:col-start-2">
            <p className="text-foreground-neutral">
              <time dateTime={post.date}>{parseDateToString(post.date)}</time>
            </p>
            <h1 className="font-variable-semibold mt-2 text-3xl tracking-tight text-foreground">
              {post.title}
            </h1>
          </div>
        </header>

        <section className="mt-8 border-t pt-8">
          <div className="md:grid md:grid-cols-4 md:gap-16">
            <div className="md:col-span-3 md:col-start-2 lg:col-span-2 lg:col-start-2">
              <div className="prose">
                <Mdx code={post.body.code} />
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
