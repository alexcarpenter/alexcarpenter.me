import * as React from "react";
import { createElement } from "react";
import type { PolymorphicComponentProps } from "types";
import type { Sprinkles } from "@/styles/sprinkle.css";
import { sprinkles } from "@/styles/sprinkle.css";
import clsx from "clsx";

export type BoxProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  Sprinkles
>;

export const Box = <C extends React.ElementType = "div">({
  as,
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
  borderRadius,
  overflow,
  border,
  ...restProps
}: BoxProps<C>) => {
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
      borderRadius,
      overflow,
      border,
    }),
    className
  );
  const component = as || "div";
  return createElement(component, { className: atomClasses, ...restProps });
};
