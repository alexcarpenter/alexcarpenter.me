import { cx } from '@/lib/utils';
import type { GridCols } from '../types';
import RightArrow from '@/components/RightArrow';

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
      <RightArrow position="before" />
      <span>{children}</span>
    </li>
  );
}

BulletList.Item = BulletListItem;

export default BulletList;
