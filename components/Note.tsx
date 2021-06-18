import { cx } from '@/lib/utils';

const variants = {
  yellow: 'bg-yellow-500',
  orange: 'bg-orange-500',
  green: 'bg-green-500',
  gray: 'bg-gray-300',
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
      className={cx('p-4 mb-8 text-black rounded-md flex', [variants[variant]])}
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
