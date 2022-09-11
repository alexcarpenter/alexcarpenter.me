import * as React from "react";
import type { PolymorphicComponentProps } from "types";
import * as styles from "./VisuallyHidden.css";

type VisuallyHiddenProps<C extends React.ElementType> =
  PolymorphicComponentProps<
    C,
    {
      as?: "h2" | "h3" | "p" | "span";
      children: React.ReactNode;
    }
  >;

const VisuallyHidden = <C extends React.ElementType = "span">({
  as,
  ...restProps
}: VisuallyHiddenProps<C>) => {
  const component = as || "span";
  return React.createElement(component, {
    className: styles.root,
    ...restProps,
  });
};

export { VisuallyHidden };
