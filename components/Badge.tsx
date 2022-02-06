import Link from 'next/link';
import { cx } from '@/lib/utils';

type BadgeProps = {
  children: string;
  href?: string;
  variant?: keyof typeof variants;
};

const variants = {
  gray: cx('bg-gray-200', 'dark:bg-gray-800'),
  orange: cx(
    'bg-orange-200 text-orange-800',
    'dark:bg-orange-800/30 dark:text-orange-400 border border-orange-400/10',
  ),
  emerald: cx(
    'bg-emerald-200 text-emerald-800',
    'dark:bg-emerald-800/30 dark:text-emerald-400 border border-emerald-400/10',
  ),
  violet: cx(
    'bg-violet-200 text-violet-800',
    'dark:bg-violet-800/30 dark:text-violet-400 border border-violet-400/10',
  ),
};

const Badge: React.FC<BadgeProps> = ({ children, variant = 'gray', href }) => {
  const classNames = cx(
    'inline-block text-sm py-0.5 px-2.5 rounded-full',
    variants[variant],
    [href && 'hover:underline'],
  );
  if (href) {
    return (
      <Link href={href}>
        <a className={classNames}>{children}</a>
      </Link>
    );
  }
  return <span className={classNames}>{children}</span>;
};

export default Badge;
