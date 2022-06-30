import {
  gray,
  grayDark,
  blue,
  blueDark,
  yellow,
  yellowDark,
} from "@radix-ui/colors";
import { createGlobalTheme } from "@vanilla-extract/css";

export const tokens = createGlobalTheme(":root", {
  font: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  color: {
    light: {
      ...gray,
      ...blue,
      ...yellow,
    },
    dark: {
      ...grayDark,
      ...blueDark,
      ...yellowDark,
    },
  },
  sizing: {
    none: "0",
    xs: "0.125rem",
    sm: ".25rem",
    md: ".5rem",
    lg: "1rem",
    xl: "2rem",
    xxl: "3rem",
    xxxl: "4rem",
  },
  radius: {
    xs: "0.125rem",
    sm: "0.25rem",
    full: "9999px",
  },
  contentWidth: {
    standard: "70ch",
    itemMeta: "8rem",
  },
  transition: {
    easing: "ease-in-out",
    duration: "0.1s",
  },
});
