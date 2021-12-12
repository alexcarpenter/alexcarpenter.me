import { cx, widont, formatDate } from '@/lib/utils';
import Views from '@/components/Views';

const Component = (props) => (
  <header className={cx('border-b mb-12 pb-12 borderColor')} {...props} />
);

export default function Header({ title, description, type, date, link, slug }) {
  if (!title || type === 'feed') return null;

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
            className="mt-2 inline-block textSecondary text-sm"
            rel="noopener noreferrer"
            target="_blank"
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
