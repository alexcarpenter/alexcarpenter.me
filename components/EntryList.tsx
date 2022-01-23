import * as React from "react";

const EntryList: React.FC = ({ children }) => {
  return (
    <ul className="divide-y -my-8">
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
