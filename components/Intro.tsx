import { cx, formatDate, getHostname } from '@/lib/utils';
import RightArrow from './RightArrow';

type IntroProps = {
  date?: string;
  title: string;
  description?: string;
  link?: string;
};

const Intro = ({ date, title, description, link }: IntroProps) => {
  return (
    <header
      className={cx(
        'mb-12 pb-12 border-b',
        'border-gray-200',
        'dark:border-gray-700',
      )}
    >
      {date ? (
        <time
          className={cx(
            'block mb-2 text-sm',
            'text-gray-600',
            'dark:text-gray-300',
          )}
        >
          {formatDate(date, 'long')}
        </time>
      ) : null}
      <h1 className="text-xl">
        {title}
        {date ? null : <span aria-hidden={true}>&nbsp;&#xAC;</span>}
      </h1>
      {description ? (
        <p className={cx('mt-2', 'text-gray-600', 'dark:text-gray-300')}>
          {description}
        </p>
      ) : null}
      {link ? (
        <p className={cx('mt-2', 'text-gray-600', 'dark:text-gray-300')}>
          <a href={link}>{getHostname(link)}</a>
          <RightArrow position="end" />
        </p>
      ) : null}
    </header>
  );
};

export default Intro;
