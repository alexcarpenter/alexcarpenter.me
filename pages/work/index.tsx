import Image from 'next/image';
import Link from 'next/link';
import { cx, groupBy, formatDate } from '@/lib/utils';
import data from '@/data/stream';
import Badge from '@/components/Badge';
import Page from '@/components/Page';
import List from '@/components/List';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a
          className="underline hover:no-underline focus:no-underline"
          {...props}
        />
      </Link>
    );
  }

  return (
    <a
      className="underline hover:no-underline focus:no-underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

export default function Work({ data }) {
  return (
    <Page title="Work">
      <div className="divide-y divide-gray-800 divide-opacity-10 -my-8">
        {data.map(([year, items]) => {
          return (
            <section className={cx('py-8')} key={year}>
              <h2 className={cx('mb-8 text-xl')}>{year}</h2>
              <List>
                {items.map((item, index) => {
                  return (
                    <List.Item key={index}>
                      {item.thumbnail && (
                        <figure className="mb-4">
                          <Image
                            src={`/images/${item.thumbnail.src}`}
                            width={item.thumbnail.width}
                            height={item.thumbnail.height}
                            alt={item.thumbnail.alt}
                            className="rounded-md"
                          />
                        </figure>
                      )}
                      <div className="flex flex-col sm:flex-row">
                        <div className="w-28 flex-shrink-0">
                          <time
                            className="mb-4 inline-block text-gray-800 text-opacity-75"
                            dateTime={item.date}
                          >
                            {formatDate(item.date)}
                          </time>
                        </div>
                        <div>
                          {
                            //@ts-ignore
                            item.title && !item.link && <h2>{item.title}</h2>
                          }
                          {
                            //@ts-ignore
                            item.title && item.link && (
                              <h2>
                                <CustomLink href={item.link}>
                                  {item.title}
                                </CustomLink>
                              </h2>
                            )
                          }
                          {item.description && (
                            <div
                              className={cx(
                                'prose text-gray-800 text-opacity-75',
                                {
                                  'mt-2': item.title,
                                },
                              )}
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            />
                          )}
                          {item.tags && (
                            <div className="mt-4">
                              {item.tags.map((tag) => (
                                <Badge key={tag}>#{tag}</Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </List.Item>
                  );
                })}
              </List>
            </section>
          );
        })}
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  const groupedData = groupBy(
    data.sort((a, b) => new Date(b.date) - new Date(a.date)),
    (obj) => new Date(obj.date).getFullYear().toString(),
  );
  return {
    props: {
      data: Object.entries(groupedData).reverse(),
    },
  };
}
