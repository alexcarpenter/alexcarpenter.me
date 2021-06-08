import { cx, mapResponsiveValues } from '@/lib/utils';

function BulletList({
  children,
  cols,
}: {
  children: React.ReactNode;
  cols?: (null | 1 | 2 | 3)[];
}) {
  return (
    <ul
      className={cx('grid gap-4 !list-none !pl-0', [
        ...mapResponsiveValues(cols, 'grid-cols'),
      ])}
    >
      {children}
    </ul>
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
