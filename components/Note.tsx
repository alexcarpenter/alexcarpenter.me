import RightArrow from './RightArrow';
import { cx } from '@/lib/utils';

const variants = {
  orange: 'bg-[#fbd6b7] text-[#a03516]',
  blue: 'bg-[#C8E7FA] text-[#005B94]',
  green: 'bg-[#BFE0D6] text-[#31636E]',
  purple: 'bg-[#F0EBF5] text-[#3c053c]',
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
    <div className={cx('p-4 rounded-md flex text-base', [variants[variant]])}>
      <span className="mr-2 flex-shrink-0">
        <RightArrow position="before" fill="currentColor" />
      </span>
      <p className="prose">
        <span className="uppercase">{label}</span>: {children}
      </p>
    </div>
  );
}
