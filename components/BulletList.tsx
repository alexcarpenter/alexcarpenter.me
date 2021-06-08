import { cx } from '@/lib/utils';

type GridCols =
  | 'grid-cols-1'
  | 'sm:grid-cols-1'
  | 'md:grid-cols-1'
  | 'grid-cols-2'
  | 'sm:grid-cols-2'
  | 'md:grid-cols-2'
  | 'grid-cols-3'
  | 'sm:grid-cols-3'
  | 'md:grid-cols-3';

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
