import { cx } from '@/lib/utils';
import Prose from '@/components/Prose';
import RightArrow from '@/components/RightArrow';

interface NoteProps {
  variant?: keyof typeof variants;
  label?: string;
  children: React.ReactNode;
}

const variants = {
  orange: cx(
    'bg-orange-200 text-orange-800 border-transparent',
    'dark:bg-orange-800/30 dark:text-orange-400 dark:border-orange-400/10',
  ),
  emerald: cx(
    'bg-emerald-200 text-emerald-800  border-transparent',
    'dark:bg-emerald-800/30 dark:text-emerald-400 dark:border-emerald-400/10',
  ),
  violet: cx(
    'bg-violet-200 text-violet-800 border-transparent',
    'dark:bg-violet-800/30 dark:text-violet-400 dark:border-violet-400/10',
  ),
  gray: cx('bg-gray-200  border-transparent', 'dark:bg-gray-900'),
  ghost: cx('border-gray-200', 'dark:border-gray-800'),
};

export default function Note({
  variant = 'gray',
  label = 'Note',
  children,
}: NoteProps) {
  return (
    <div className={cx('p-4 rounded-md flex border', [variants[variant]])}>
      <span className="mr-2 flex-shrink-0">
        <RightArrow position="start" fill="currentColor" />
      </span>
      <Prose>
        <span className="uppercase">{label}</span>: {children}
      </Prose>
    </div>
  );
}
