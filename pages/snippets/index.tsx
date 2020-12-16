import Link from "next/link";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { snippetsFilePaths, SNIPPETS_PATH } from "../../lib/mdxUtils";
import Header from "@/components/Header";
import Card from "@/components/Card";
import Page from "@/components/Page";
import Stack from "@/components/Stack";

export default function Snippets({ snippets }) {
  const router = useRouter();
  let category = router.query.category;
  return (
    <Page
      title='Snippets'
      description='Writing it down so I remember it later.'
    >
      <Header>
        <Header.Title>Snippets</Header.Title>
      </Header>
      <div className='mt-8'>
        <ul className='flex space-x-2 mb-8'>
          <li>
            <Link
              href={{
                pathname: "/snippets",
              }}
              scroll={false}
            >
              <a
                className={`${
                  category === undefined
                    ? "bg-gray-600 text-white"
                    : "bg-gray-200"
                } hover:bg-gray-600 hover:text-white py-1 px-2 text-sm rounded-lg transition-colors`}
              >
                All
              </a>
            </Link>
          </li>
          {["CSS", "JavaScript"].map((c) => (
            <li key={c}>
              <Link
                href={{
                  pathname: "/snippets",
                  query: { category: c.toLowerCase() },
                }}
                scroll={false}
              >
                <a
                  className={`${
                    category === c.toLowerCase()
                      ? "bg-gray-600 text-white"
                      : "bg-gray-200"
                  } hover:bg-gray-600 hover:text-white py-1 px-2 text-sm rounded-lg transition-colors`}
                >
                  {c}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <Stack grid>
          {snippets
            .filter((snippet) => {
              if (!category) {
                return snippet;
              } else {
                return snippet.data.tags
                  .map((c) => c.toLowerCase())
                  .includes(category);
              }
            })
            .map((snippet) => {
              const { title, tags } = snippet.data;
              return (
                <Stack.Item key={snippet.filePath}>
                  <Card>
                    <Card.Title>
                      <Link
                        as={`/snippets/${snippet.filePath.replace(
                          /\.mdx?$/,
                          "",
                        )}`}
                        href={`/snippets/[slug]`}
                      >
                        <a className='hover:text-blue transition-colors'>
                          {title}
                        </a>
                      </Link>
                    </Card.Title>
                    <Card.Tags items={tags} />
                  </Card>
                </Stack.Item>
              );
            })}
        </Stack>
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  const snippets = snippetsFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(SNIPPETS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { snippets } };
}
