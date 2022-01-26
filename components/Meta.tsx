import { cx } from "@/lib/utils";
import { Fragment } from "react";

type MetaProps = {
  items: Array<{
    title: string;
    description: string;
  }>;
};

const Meta = ({ items }: MetaProps) => {
  return (
    <dl>
      {items.map((item, index) => {
        return (
          <Fragment key={index}>
            <dt
              className={cx(
                "text-sm uppercase tracking-wider",
                "text-gray-600",
                "dark:text-gray-300",
                index > 0 && "mt-4"
              )}
            >
              {item.title}
            </dt>
            <dd className="mt-2">{item.description}</dd>
          </Fragment>
        );
      })}
    </dl>
  );
};

export default Meta;
