import { cx } from '@/lib/utils';

type RightArrowUpProps = {
  position: 'start' | 'end';
  fill?: string;
};

const RightArrowUp = ({ position, fill }: RightArrowUpProps) => {
  const NBSP = '\u00a0';
  return (
    <>
      {position === 'end' && NBSP}
      <span
        role="img"
        aria-hidden="true"
        className={cx(
          'flex-shrink-0',
          fill ? fill : ['text-gray-600', 'dark:text-gray-300'],
        )}
      >
        ↗
      </span>
      {position === 'start' && NBSP}
    </>
  );
};

export default RightArrowUp;
