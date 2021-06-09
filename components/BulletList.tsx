import { cx } from '@/lib/utils';
import type { GridCols } from '../types';

function BulletList({
  children,
  cols,
}: {
  children: React.ReactNode;
  cols?: Array<GridCols>;
}) {
  return (
    <ul className={cx('grid gap-4 !list-none !pl-0', [...cols])}>{children}</ul>
  );
}

function BulletListItem({ children }) {
  return (
    <li>
      <span
        role="img"
        aria-hidden="true"
        className="text-white text-opacity-75"
      >
        &#8594;
      </span>{' '}
      {children}
    </li>
  );
}

BulletList.Item = BulletListItem;

export default BulletList;
