import Link from 'next/link';
import { cx } from '@/lib/utils';

type BadgeProps = {
  children: string;
  href?: string;
  variant?: keyof typeof variants;
};

const variants = {
  gray: cx('bg-gray-200 border-transparent', 'dark:bg-gray-800'),
  orange: cx(
    'bg-orange-100 text-orange-700 border-transparent',
    'dark:bg-orange-800/30 dark:text-orange-400 dark:border-orange-400/10',
  ),
  emerald: cx(
    'bg-emerald-100 text-emerald-700 border-transparent',
    'dark:bg-emerald-800/30 dark:text-emerald-400 dark:border-emerald-400/10',
  ),
  violet: cx(
    'bg-violet-100 text-violet-700 border-transparent',
    'dark:bg-violet-800/30 dark:text-violet-400 dark:border-violet-400/10',
  ),
};

const Badge: React.FC<BadgeProps> = ({ children, variant = 'gray', href }) => {
  const classNames = cx(
    'inline-block text-sm py-0.5 px-2.5 rounded-full border',
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
