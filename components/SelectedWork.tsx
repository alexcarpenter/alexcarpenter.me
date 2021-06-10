import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import List from '@/components/List';

export default function SelectedWork({ work }) {
  return (
    <List>
      {work.map((item) => {
        const { title, date, description, slug, thumbnail } = item.frontMatter;
        return (
          <List.Item key={slug}>
            {thumbnail && (
              <figure className="mb-4">
                <Image {...thumbnail} className="rounded-md" />
              </figure>
            )}
            <div className="flex flex-col sm:flex-row">
              <div className="w-28 flex-shrink-0">
                <time
                  className="mb-2 inline-block text-white text-opacity-75"
                  dateTime={date}
                >
                  {date}
                </time>
              </div>
              <div className="flex-1">
                <h2>
                  <Link href={`/work/${slug}`}>
                    <a className="underline hover:no-underline focus:no-underline">
                      {title}
                    </a>
                  </Link>
                </h2>
                <div className="prose mt-2 text-white text-opacity-75">
                  {description}
                </div>
              </div>
            </div>
          </List.Item>
        );
      })}
    </List>
  );
}
