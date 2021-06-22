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
        'bg-white',
        'bg-opacity-10',
        'hover:bg-opacity-20',
        'focus:bg-opacity-20',
        'px-4',
        'py-1',
        'rounded-md',
        'transition-opacity',
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
