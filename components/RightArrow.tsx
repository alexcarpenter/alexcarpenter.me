import { cx, textSecondary } from '@/lib/utils';

export default function RightArrow({
  position,
  fill,
}: {
  position: 'before' | 'after';
  fill?: string;
}) {
  const NBSP = '\u00a0';
  return (
    <>
      {position === 'after' && NBSP}
      <span
        role="img"
        aria-hidden="true"
        className={cx('flex-shrink-0', fill ? fill : textSecondary)}
      >
        &#8594;
      </span>
      {position === 'before' && NBSP}
    </>
  );
}
