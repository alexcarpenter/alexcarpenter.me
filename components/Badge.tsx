import { cx } from '@/lib/utils';

const variants = {
  white: cx(
    ['bg-gray-200 border-gray-300'],
    ['dark:bg-gray-900 dark:border-gray-800'],
  ),
};

interface BadgeProps {
  variant?: keyof typeof variants;
  children: string;
}

export default function Badge({ variant = 'white', children }: BadgeProps) {
  return (
    <span
      className={cx(
        'inline-block text-sm py-0.5 px-2.5 rounded-full border',
        variants[variant],
      )}
    >
      {children}
    </span>
  );
}
