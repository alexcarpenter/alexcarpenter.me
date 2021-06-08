import { cx, mapResponsiveValues } from '@/lib/utils';

function Grid({
  children,
  cols,
}: {
  children: React.ReactNode;
  cols?: (null | 1 | 2 | 3)[];
}) {
  return (
    <div
      className={cx('grid', 'gap-4', [
        ...mapResponsiveValues(cols, 'grid-cols'),
      ])}
    >
      {children}
    </div>
  );
}

function GridItem({ children }) {
  return <div className="flex flex-col flex-1">{children}</div>;
}

Grid.Item = GridItem;

export default Grid;
