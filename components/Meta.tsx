import * as React from 'react';
import { cx } from '@/lib/utils';

function Meta({ children }) {
  return (
    <dl>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          index,
        });
      })}
    </dl>
  );
}

function Item({
  index,
  title,
  description,
}: {
  index?: number;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}) {
  return (
    <>
      <Title index={index}>{title}</Title>
      <Description>{description}</Description>
    </>
  );
}

function Title({
  index,
  children,
}: {
  index?: number;
  children: string | React.ReactNode;
}) {
  return (
    <dt
      className={cx(
        'text-sm uppercase tracking-wider textSecondary',
        index > 0 && 'mt-4',
      )}
    >
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
