import { cx } from '@/lib/utils';
import type { GridCols } from '../types';

function BulletList({
  children,
  cols = [],
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
    <li className="flex">
      <span
        role="img"
        aria-hidden="true"
        className="text-gray-300 flex-shrink-0"
      >
        &#8594;
      </span>
      &nbsp;
      <span>{children}</span>
    </li>
  );
}

BulletList.Item = BulletListItem;

export default BulletList;
