import { cx } from '@/lib/utils';

const variants = {
  yellow: 'bg-yellow-500',
  orange: 'bg-orange-500',
  green: 'bg-green-500',
  gray: 'bg-white bg-opacity-10 !text-white',
};

export default function Note({
  variant = 'yellow',
  label = 'Note',
  children,
}: {
  variant?: keyof typeof variants;
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx('p-4 rounded-md text-black flex text-base', [
        variants[variant],
      ])}
    >
      <span className="mr-4 flex-shrink-0" aria-hidden={true}>
        &#8594;{' '}
      </span>
      <p className="prose">
        <span className="uppercase">{label}</span>: {children}
      </p>
    </div>
  );
}
