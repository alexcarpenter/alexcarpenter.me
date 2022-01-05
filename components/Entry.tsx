import Link from 'next/link';
import { cx, formatDate } from '@/lib/utils';
import RightArrow from '@/components/RightArrow';
import Tags from '@/components/Tags';

interface EntryProps {
  date: string;
  titleAs?: 'h2' | 'h3';
  title: string | React.ReactNode;
  description?: string;
  tags?: string[];
  link?: string;
  children?: React.ReactNode;
}

export default function Entry({
  date,
  title,
  titleAs: Component = 'h2',
  description,
  tags,
  link,
  children,
}: EntryProps) {
  const isInternalLink = (href) =>
    href && (href.startsWith('/') || href.startsWith('#'));

  const CustomLink = ({ href, children }) => {
    if (isInternalLink(href)) {
      return (
        <Link href={href}>
          <a className="underline hover:no-underline focus:no-underline">
            {children}
          </a>
        </Link>
      );
    }

    return (
      <>
        <a
          className="underline hover:no-underline focus:no-underline"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          {children}
        </a>
        <RightArrow position="after" />
      </>
    );
  };

  return (
    <article className="flex flex-col sm:flex-row flex-wrap">
      <div className="w-28 flex-shrink-0">
        <time className={cx('mb-2 inline-block textSecondary')} dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
      <div className="flex-1">
        <Component>
          {link ? <CustomLink href={link}>{title}</CustomLink> : <>{title}</>}
        </Component>
        {link && !isInternalLink(link) && (
          <p className={cx('mt-0.5 text-sm textSecondary')}>
            {new URL(link).hostname}
          </p>
        )}
        {description && (
          <p className={cx('mt-4 textSecondary')}>{description}</p>
        )}
        {children && (
          <div className={cx('mt-4 prose textSecondary')}>
            {typeof children === 'string' ? <p>{children}</p> : children}
          </div>
        )}
        {tags && <Tags items={tags} />}
      </div>
    </article>
  );
}
