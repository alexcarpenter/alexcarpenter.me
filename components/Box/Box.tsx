import { createElement, AllHTMLAttributes, ElementType } from "react";
import type { Sprinkles } from "@/styles/sprinkle.css";
import { sprinkles } from "@/styles/sprinkle.css";
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
  width,
  height,
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
      width,
      height,
    }),
    className
  );
  return createElement(component, { className: atomClasses, ...restProps });
};
