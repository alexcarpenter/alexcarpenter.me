import { createElement, AllHTMLAttributes, ElementType } from "react";
import { sprinkles, Sprinkles } from "@/styles/sprinkle.css";
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
  alignItems,
  justifyContent,
  placeItems,
  gap,
  columnGap,
  rowGap,
  gridTemplateColumns,
  gridColumnStart,
  gridColumnEnd,
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
      alignItems,
      justifyContent,
      placeItems,
      gap,
      columnGap,
      rowGap,
      gridTemplateColumns,
      gridColumnStart,
      gridColumnEnd,
    }),
    className
  );
  return createElement(component, { className: atomClasses, ...restProps });
};
