import * as React from "react";
import { cn } from "lib/utils";
import type { PolymorphicComponentProps } from "types";
import type { Sprinkles } from "styles/sprinkles.css";
import { sprinkles } from "styles/sprinkles.css";
import * as styles from "./Heading.css";

type HeadingProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    fontSize?: Sprinkles["fontSize"];
    color?: Extract<
      Sprinkles["color"],
      "foreground" | "foregroundNeutral" | "foregroundAction"
    >;
    children: React.ReactNode;
  }
>;

const Heading = <C extends React.ElementType = "p">({
  as,
  fontSize = "md",
  color = "foreground",
  ...restProps
}: HeadingProps<C>) => {
  const component = as || "h2";
  return React.createElement(component, {
    className: cn(
      styles.root,
      styles.tracking[component],
      sprinkles({ fontSize, color })
    ),
    ...restProps,
  });
};

export { Heading };
