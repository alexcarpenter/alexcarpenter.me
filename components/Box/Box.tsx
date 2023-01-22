import type { Sprinkles } from "styles/sprinkles.css";
import { createElement, AllHTMLAttributes, ElementType } from "react";
import { sprinkles } from "styles/sprinkles.css";
import { cn } from "lib/utils";

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
  position,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  marginTop,
  marginX,
  marginY,
  marginBottom,
  display,
  flexDirection,
  flexShrink,
  flexGrow,
  alignItems,
  justifyContent,
  placeItems,
  gap,
  columnGap,
  rowGap,
  columns,
  gridTemplateColumns,
  maxWidth,
  textAlign,
  color,
  ...restProps
}: BoxProps) => {
  const atomClasses = cn(
    sprinkles({
      position,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingX,
      paddingY,
      marginTop,
      marginX,
      marginY,
      marginBottom,
      display,
      flexDirection,
      flexShrink,
      flexGrow,
      alignItems,
      justifyContent,
      placeItems,
      gap,
      columnGap,
      rowGap,
      columns,
      gridTemplateColumns,
      maxWidth,
      textAlign,
      color,
    }),
    className
  );
  return createElement(component, { className: atomClasses, ...restProps });
};
