import type { NextPage } from "next/types";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { title: "Posts", posts } };
}

const Posts: NextPage<{
  posts: Post[];
}> = ({ posts }) => {
  return (
    <>
      <section className="mt-12">
        <h2 className="mb-8">
          Posts&nbsp;<span aria-hidden={true}>¬</span>
        </h2>
        <ul className="grid gap-8">
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <article className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <span className="w-28 flex-shrink-0">
                    <time dateTime={post.date}>
                      {format(parseISO(post.date), "LLL d")}
                    </time>
                  </span>
                  <div>
                    <h3>
                      <Link href={post.url}>
                        <a className="underline">{post.title}</a>
                      </Link>
                    </h3>
                    {post.description ? <p>{post.description}</p> : null}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Posts;
