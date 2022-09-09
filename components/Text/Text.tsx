import * as React from "react";
import clsx from "clsx";
import type { PolymorphicComponentProps } from "types";
import type { Sprinkles } from "styles/sprinkles.css";
import { sprinkles } from "styles/sprinkles.css";
import * as styles from "./Text.css";

type TextProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    as?: "p" | "span" | "strong" | "em" | "time";
    fontSize?: Sprinkles["fontSize"];
    children: React.ReactNode;
  }
>;

const Text = <C extends React.ElementType = "p">({
  as,
  fontSize = "md",
  ...restProps
}: TextProps<C>) => {
  const component = as || "p";
  return React.createElement(component, {
    className: clsx(styles.root, sprinkles({ fontSize })),
    ...restProps,
  });
};

export { Text };
