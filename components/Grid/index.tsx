import clsx from 'clsx';

const COLS_MAP = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 md:grid-cols-3',
};

function Grid({
  children,
  gap = 4,
  cols = 2,
}: {
  children: React.ReactNode;
  gap?: number;
  cols?: keyof typeof COLS_MAP;
}) {
  return (
    <div className={clsx(['grid', `gap-${gap}`, COLS_MAP[cols]])}>
      {children}
    </div>
  );
}

function Item({ children }) {
  return <div className="flex flex-col flex-grow">{children}</div>;
}

Grid.Item = Item;

export default Grid;
