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
  position,
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
  aspectRatio,
  ...restProps
}: BoxProps) => {
  const atomClasses = clsx(
    sprinkles({
      position,
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
      aspectRatio,
    }),
    className
  );
  return createElement(component, { className: atomClasses, ...restProps });
};
