import Link from 'next/link';
import { cx, formatDate, getHostname, isInternalLink } from '@/lib/utils';
import FacePile from '@/components/FacePile';
import RightArrowUp from '@/components/RightArrowUp';

export type WorkEntryProps = {
  link?: string;
  date: string;
  title: string;
  description?: string;
  teammates?: Array<{
    image: string;
    name: string;
    link: string;
  }>;
};

const WorkEntry = ({
  link,
  date,
  title,
  description,
  teammates,
}: WorkEntryProps) => {
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
        {teammates ? (
          <div className="mt-4">
            <span className="text-sm text-gray-600 dark:text-gray-300 mb-2 block">
              In collaboration with:
            </span>
            <FacePile people={teammates} />
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default WorkEntry;
