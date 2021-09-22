import { cx } from '@/lib/utils';

const variants = {
  white: 'bg-white bg-opacity-10',
};

interface BadgeProps {
  variant?: keyof typeof variants;
  children: string;
}

export default function Badge({ variant = 'white', children }: BadgeProps) {
  return (
    <span
      className={cx(
        'inline-block text-sm py-0.5 px-2.5 rounded-full border border-white border-opacity-10',
        variants[variant],
      )}
    >
      {children}
    </span>
  );
}
