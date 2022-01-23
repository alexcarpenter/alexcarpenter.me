import { cx } from "@/lib/utils";
import * as React from "react";

const EntryList: React.FC = ({ children }) => {
  return (
    <ul
      className={cx(
        "divide-y -my-8",
        "divide-gray-200",
        "dark:divide-gray-700"
      )}
    >
      {React.Children.map(children, (child, index) => {
        return (
          <li key={index} className="py-8">
            {child}
          </li>
        );
      })}
    </ul>
  );
};

export default EntryList;
