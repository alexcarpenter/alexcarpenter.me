import { cx } from '@/lib/utils';

type SymbolProps = {
  name: keyof typeof SYMBOL_MAP;
  position: 'start' | 'end';
  fill?: string;
};

const SYMBOL_MAP = {
  'right-arrow': '→',
  'right-arrow-up': '↗',
};

const Symbol = ({ position, fill, name }: SymbolProps) => {
  const NBSP = '\u00a0';
  return (
    <>
      {position === 'end' && NBSP}
      <span
        role="img"
        aria-hidden="true"
        className={cx(
          'flex-shrink-0',
          fill ? fill : ['text-gray-600', 'dark:text-gray-300'],
        )}
      >
        {SYMBOL_MAP[name]}
      </span>
      {position === 'start' && NBSP}
    </>
  );
};

export default Symbol;
