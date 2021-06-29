import { cx } from '@/lib/utils';

const variants = {
  orange: 'bg-orange-500 text-black',
  gray: 'bg-white bg-opacity-10',
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
      <span className="mr-4 flex-shrink-0" aria-hidden={true}>
        &#8594;{' '}
      </span>
      <p className="prose">
        <span className="uppercase">{label}</span>: {children}
      </p>
    </div>
  );
}
