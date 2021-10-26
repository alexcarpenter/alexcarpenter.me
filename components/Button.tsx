import { cx } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm';
}

export default function Button({ size, children, ...props }: ButtonProps) {
  return (
    <button
      className={cx(
        'border',
        'px-4',
        'py-1',
        'rounded-md',
        'transition-colors',
        {
          'text-sm': size === 'sm',
        },
        ['bg-gray-200 border-gray-300 hover:bg-gray-300'],
        ['dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-800'],
      )}
      {...props}
    >
      {children}
    </button>
  );
}
