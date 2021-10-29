import LinkedHeading from './LinkedHeading';
import { cx } from '@/lib/utils';

function Section({
  heading,
  headingGap = 'md',
  children,
  id,
}: {
  heading?: string;
  headingGap?: 'md' | 'lg';
  children: React.ReactNode;
  id?: string;
}) {
  const gap = {
    md: 'mb-6',
    lg: 'mb-12',
  };
  return (
    <section className="section" id={id}>
      {heading && (
        <LinkedHeading className={cx('text-xl', gap[headingGap])}>
          {heading}
        </LinkedHeading>
      )}
      {children}
    </section>
  );
}

export default Section;
