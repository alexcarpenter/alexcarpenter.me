import { widont, formatDate } from '@/lib/utils';
import Image from 'next/image';
import Views from '@/components/Views';

const Component = (props) => (
  <header
    className="border-b border-white border-opacity-10 mb-8 pb-8"
    {...props}
  />
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
  if (!title) return null;

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
            className="text-white text-opacity-75 hover:text-opacity-100 inline-block"
          >
            {new URL(link).hostname}&nbsp;&#8594;
          </a>
        )}
        <h1 className="text-xl mt-2">{widont(title)}</h1>
        {description && (
          <p className="mt-2 text-white text-opacity-75">{description}</p>
        )}
      </Component>
    );
  }

  if (type === 'post') {
    return (
      <Component>
        <p className="text-white text-opacity-75 space-x-1">
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
            className="text-white text-opacity-75 hover:text-opacity-100 mt-2 inline-block"
          >
            {new URL(link).hostname}&nbsp;&#8594;
          </a>
        )}
      </Component>
    );
  }

  return (
    <Component>
      <h1 className="text-xl mt-1">{widont(title)}</h1>
      {description && (
        <p className="mt-2 text-white text-opacity-75">{description}</p>
      )}
    </Component>
  );
}
