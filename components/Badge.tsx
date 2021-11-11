import { cx } from '@/lib/utils';

const variants = {
  white: cx('bg-gray-200', 'dark:bg-gray-800'),
  orange: 'bg-orange-200 text-orange-800 dark:bg-orange-600 dark:text-white',
  blue: 'bg-blue-200 text-blue-800',
  emerald:
    'bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-white',
  violet: 'bg-violet-200 text-violet-800 dark:bg-violet-800 dark:text-white',
  amber: 'bg-amber-200 text-amber-800',
  red: 'bg-red-200 text-red-800',
};

interface BadgeProps {
  variant?: keyof typeof variants;
  children: string;
}

export default function Badge({ variant = 'white', children }: BadgeProps) {
  return (
    <span
      className={cx(
        'inline-block text-sm py-0.5 px-2.5 rounded-full',
        variants[variant],
      )}
    >
      {children}
    </span>
  );
}
