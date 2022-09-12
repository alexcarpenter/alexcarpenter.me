import type { Sprinkles } from "styles/sprinkles.css";
import { createElement, AllHTMLAttributes, ElementType } from "react";
import { sprinkles } from "styles/sprinkles.css";
import clsx from "clsx";

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      "content" | "height" | "translate" | "color" | "width" | "cursor"
    >,
    Sprinkles {
  component?: ElementType;
}

export const Box = ({
  as: component = "div",
  className,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  display,
  flexDirection,
  flexShrink,
  alignItems,
  justifyContent,
  placeItems,
  gap,
  columnGap,
  rowGap,
  ...restProps
}: BoxProps) => {
  const atomClasses = clsx(
    sprinkles({
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingX,
      paddingY,
      display,
      flexDirection,
      flexShrink,
      alignItems,
      justifyContent,
      placeItems,
      gap,
      columnGap,
      rowGap,
    }),
    className
  );
  return createElement(component, { className: atomClasses, ...restProps });
};
