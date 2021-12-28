import * as React from 'react';
import { cx } from '@/lib/utils';

interface MetaProps {
  items?: Array<{
    title: string;
    description: string;
  }>;
  children?: React.ReactNode;
}

function Meta({ items, children }: MetaProps) {
  return (
    <dl>
      {children
        ? React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                index,
              });
            }
            return child;
          })
        : items.map((item, index) => {
            return (
              <Item
                key={index}
                index={index}
                title={item.title}
                description={item.description}
              />
            );
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
