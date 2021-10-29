import { cx, textSecondary } from '@/lib/utils';
function Meta({ children }) {
  return <dl className="-mt-4">{children}</dl>;
}

function Item({ title, description }) {
  return (
    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
  );
}

function Title({ children }) {
  return (
    <dt className={cx('mt-4 text-sm uppercase tracking-wider', textSecondary)}>
      {/* <span className="opacity-50" aria-hidden={true}>
        //
      </span>{' '} */}
      {children}
    </dt>
  );
}

function Description({ children }) {
  return <dd className="mt-2">{children}</dd>;
}

Meta.Item = Item;
Meta.Title = Title;
Meta.Description = Description;
export default Meta;
