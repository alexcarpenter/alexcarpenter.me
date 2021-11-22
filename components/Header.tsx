import { cx, widont, formatDate } from '@/lib/utils';
import Image from 'next/image';
import Views from '@/components/Views';

const Component = (props) => (
  <header className={cx('border-b mb-12 pb-12 borderColor')} {...props} />
);

export default function Header({
  title,
  thumbnail,
  description,
  type,
  date,
  link,
  slug,
}) {
  if (!title || type === 'feed') return null;

  if (type === 'work') {
    return (
      <Component>
        {thumbnail && (
          <figure className="mb-4">
            <Image {...thumbnail} className="rounded-md" />
          </figure>
        )}
        {link && (
          <a
            href={link}
            className="text-gray-300 hover:text-white inline-block"
          >
            {new URL(link).hostname}&nbsp;&#8594;
          </a>
        )}
        <h1 className="text-xl mt-2">{widont(title)}</h1>
        {description && (
          <p className={cx('mt-2 textSecondary')}>{description}</p>
        )}
      </Component>
    );
  }

  if (type === 'post') {
    return (
      <Component>
        <p className={cx('mt-2 space-x-1 textSecondary text-sm')}>
          <time dateTime={date}>{formatDate(date, 'long')}</time>
          {slug && (
            <>
              <span role="separator" aria-orientation="vertical">
                &#183;
              </span>
              <Views slug={slug} />
            </>
          )}
        </p>
        <h1 className="text-xl mt-1">{widont(title)}</h1>
        {link && (
          <a
            href={link}
            className="text-gray-300 hover:text-white mt-2 inline-block"
          >
            {new URL(link).hostname}&nbsp;&#8594;
          </a>
        )}
      </Component>
    );
  }

  return (
    <Component>
      <h1 className="text-xl mt-1">
        {widont(title)}
        <span aria-hidden={true}>&nbsp;&#xAC;</span>
      </h1>
      {description && <p className={cx('mt-2 textSecondary')}>{description}</p>}
    </Component>
  );
}
