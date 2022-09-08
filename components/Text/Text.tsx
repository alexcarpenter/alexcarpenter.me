import * as React from "react";
import clsx from "clsx";
import type { PolymorphicComponentProps } from "types";
import * as styles from "./Text.css";

type TextProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    as?: "p" | "span" | "strong" | "em" | "time";
    children: React.ReactNode;
  }
>;

const Text = <C extends React.ElementType = "p">({
  as,
  ...restProps
}: TextProps<C>) => {
  const component = as || "p";
  return React.createElement(component, {
    className: clsx(styles.root),
    ...restProps,
  });
};

export { Text };
