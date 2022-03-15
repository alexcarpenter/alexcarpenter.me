import Link from 'next/link';
import {
  cx,
  slugify,
  formatDate,
  getHostname,
  isInternalLink,
} from '@/lib/utils';
import RightArrowUp from '@/components/RightArrowUp';
import Badge from './Badge';

export type EntryProps = {
  link?: string;
  date: string;
  title: string;
  description?: string;
  tags?: Array<{
    path: string;
    tag: string;
  }>;
};

const Entry = ({ link, date, title, description, tags }: EntryProps) => {
  return (
    <article className="flex flex-col sm:flex-row flex-wrap">
      <div className="w-28 flex-shrink-0">
        <time
          className={cx(
            'mb-2 inline-block',
            'text-gray-600',
            'dark:text-gray-300',
          )}
          dateTime=""
        >
          {formatDate(date)}
        </time>
      </div>
      <div className="flex-1">
        <h3>
          {link ? (
            <>
              <Link href={link}>
                <a
                  className="underline hover:no-underline"
                  {...(isInternalLink(link)
                    ? {}
                    : {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                >
                  {title}
                </a>
              </Link>
              {isInternalLink(link) ? null : <RightArrowUp position="end" />}
            </>
          ) : (
            <>{title}</>
          )}
        </h3>
        {link ? (
          isInternalLink(link) ? null : (
            <p className={cx('text-sm', 'text-gray-600', 'dark:text-gray-300')}>
              {getHostname(link)}
            </p>
          )
        ) : null}
        {description ? (
          <p className={cx('mt-4', 'text-gray-600', 'dark:text-gray-300')}>
            {description}
          </p>
        ) : null}
        {tags ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map(({ path, tag }, index) => {
              const tagSlug = slugify(tag);
              return (
                <li key={index}>
                  <Badge href={path}>{tagSlug}</Badge>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </article>
  );
};

export default Entry;
