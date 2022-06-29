import { gray, grayDark, blue, blueDark } from "@radix-ui/colors";
import { createGlobalTheme } from "@vanilla-extract/css";

export const tokens = createGlobalTheme(":root", {
  font: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  },
  color: {
    light: {
      ...gray,
      ...blue,
    },
    dark: {
      ...grayDark,
      ...blueDark,
    },
  },
  spacing: {
    xs: "0.125rem",
    sm: ".25rem",
    md: ".5rem",
    lg: "1rem",
    xl: "2rem",
    xxl: "3rem",
    xxxl: "4rem",
  },
  sizing: {
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
  maxWidth: {
    md: "70ch",
  },
  transition: {
    easing: "ease-in-out",
    duration: "0.1s",
  },
});
