import clsx from 'clsx';

const GAP_MAP = {
  1: 'gap-1',
  2: 'gap-2',
  4: 'gap-4',
  8: 'gap-8',
  16: 'gap-16',
};

const GAP_X_MAP = {
  1: 'gap-x-1',
  2: 'gap-x-2',
  4: 'gap-x-4',
  8: 'gap-x-8',
  16: 'gap-x-16',
};

const GAP_Y_MAP = {
  1: 'gap-Y-1',
  2: 'gap-Y-2',
  4: 'gap-Y-4',
  8: 'gap-Y-8',
  12: 'gap-Y-12',
  16: 'gap-Y-16',
};

const COLS_MAP = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
};

const SM_COLS_MAP = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
};

const MD_COLS_MAP = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
};

const LG_COLS_MAP = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
};

function Grid({
  children,
  gap = 4,
  gapX = null,
  gapY = null,
  cols = 2,
  colsSm = null,
  colsMd = null,
  colsLg = null,
}: {
  children: React.ReactNode;
  gap?: keyof typeof GAP_MAP;
  gapX?: keyof typeof GAP_X_MAP;
  gapY?: keyof typeof GAP_Y_MAP;
  cols?: keyof typeof COLS_MAP;
  colsSm?: keyof typeof SM_COLS_MAP;
  colsMd?: keyof typeof MD_COLS_MAP;
  colsLg?: keyof typeof LG_COLS_MAP;
}) {
  return (
    <div
      className={clsx([
        'grid',
        `gap-${gap}`,
        gapX && GAP_X_MAP[gapX],
        gapY && GAP_Y_MAP[gapY],
        `grid-cols-${cols}`,
        colsSm && SM_COLS_MAP[colsSm],
        colsMd && MD_COLS_MAP[colsMd],
        colsLg && LG_COLS_MAP[colsLg],
      ])}
    >
      {children}
    </div>
  );
}

function Item({ children }) {
  return <div className="flex flex-col flex-grow">{children}</div>;
}

Grid.Item = Item;

export default Grid;
