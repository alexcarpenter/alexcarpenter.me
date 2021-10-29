import { cx, textSecondary } from '@/lib/utils';
function Meta({ children }) {
  return (
    <dl className="meta -mt-4 sm:gap-x-8 sm:gap-y-4">
      <style jsx>{`
        @media (min-width: 640px) {
          .meta {
            display: grid;
            grid-template-columns: auto 1fr;
          }
        }
      `}</style>
      {children}
    </dl>
  );
}

function Title({ children }) {
  return <dt className={cx('mt-4 sm:mt-0', textSecondary)}>{children}</dt>;
}

function Description({ children }) {
  return <dd className="mt-2 sm:mt-0">{children}</dd>;
}

Meta.Title = Title;
Meta.Description = Description;
export default Meta;
