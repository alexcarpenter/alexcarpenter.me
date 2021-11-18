import RightArrow from './RightArrow';
import { cx } from '@/lib/utils';

const variants = {
  orange: 'bg-orange-200 text-orange-800 dark:bg-orange-600 dark:text-white',
  blue: 'bg-blue-200 text-blue-800',
  emerald:
    'bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-white',
  violet: 'bg-violet-200 text-violet-800 dark:bg-violet-800 dark:text-white',
  amber: 'bg-amber-200 text-amber-800',
  red: 'bg-red-200 text-red-800',
  gray: cx('bg-gray-200', 'dark:bg-gray-900'),
  ghost: cx('border', 'border-gray-200', 'dark:border-gray-800'),
};

export default function Note({
  variant = 'gray',
  label = 'Note',
  children,
}: {
  variant?: keyof typeof variants;
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cx('p-4 rounded-md flex', [variants[variant]])}>
      <span className="mr-2 flex-shrink-0">
        <RightArrow position="before" fill="currentColor" />
      </span>
      <p className="prose">
        <span className="uppercase">{label}</span>: {children}
      </p>
    </div>
  );
}
