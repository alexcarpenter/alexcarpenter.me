import clsx from 'clsx';

function Grid({
  children,
  gap = 4,
  gapX = null,
  gapY = null,
  cols = 2,
  colsXs = null,
  colsSm = null,
  colsMd = null,
  colsLg = null,
}: {
  children: React.ReactNode;
  gap?: number;
  gapX?: number;
  gapY?: number;
  cols?: number;
  colsXs?: number;
  colsSm?: number;
  colsMd?: number;
  colsLg?: number;
}) {
  return (
    <div
      className={clsx([
        'grid',
        `gap-${gap}`,
        gapX && `gap-y-${gapX}`,
        gapY && `gap-y-${gapY}`,
        `grid-cols-${cols}`,
        colsXs && `xs:grid-cols-${colsXs}`,
        colsSm && `sm:grid-cols-${colsSm}`,
        colsMd && `md:grid-cols-${colsMd}`,
        colsLg && `lg:grid-cols-${colsLg}`,
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
