import { cx } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm';
}

export default function Button({ size, children, ...props }: ButtonProps) {
  return (
    <button
      className={cx(
        'border',
        'border-white',
        'border-opacity-10',
        'bg-gray-900',
        'hover:bg-gray-800',
        'px-4',
        'py-1',
        'rounded-md',
        'transition-colors',
        {
          'text-sm': size === 'sm',
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
}
