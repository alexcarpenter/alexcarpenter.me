import {
  gray,
  grayDark,
  blackA,
  whiteA,
  blue,
  blueDark,
  yellow,
  yellowDark,
} from "@radix-ui/colors";
import {
  createGlobalThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";

////////////////////////////////////////////////////////////////////////////////
// Colors

const color = createGlobalThemeContract({
  page: "color-page",
  foreground: "color-foreground",
  foregroundNeutral: "color-foreground-neutral",
  foregroundAction: "color-foreground-action",
  surface: "color-surface",
  surfaceHover: "color-surface-hover",
  surfaceFaint: "color-surface-faint",
  border: "color-border",
  borderFaint: "color-border-faint",
  overlay: "color-overlay",
  outline: "color-outline",
  underline: "color-underline",
  underlineNeutral: "color-underline-neutral",
  highlight: "color-highlight",
  codeHighlight: "color-code-highlight",
});

createGlobalTheme(":root.light", color, {
  page: gray.gray1,
  foreground: gray.gray12,
  foregroundNeutral: gray.gray11,
  foregroundAction: blue.blue11,
  surface: gray.gray2,
  surfaceHover: gray.gray4,
  surfaceFaint: gray.gray2,
  border: gray.gray6,
  borderFaint: gray.gray4,
  overlay: whiteA.whiteA11,
  outline: blue.blue11,
  underline: blue.blue11,
  underlineNeutral: gray.gray9,
  highlight: yellow.yellow4,
  codeHighlight: gray.gray3,
});

createGlobalTheme(":root.dark", color, {
  page: grayDark.gray1,
  foreground: grayDark.gray12,
  foregroundNeutral: grayDark.gray11,
  foregroundAction: blueDark.blue11,
  surface: grayDark.gray3,
  surfaceHover: grayDark.gray4,
  surfaceFaint: grayDark.gray2,
  border: grayDark.gray6,
  borderFaint: grayDark.gray4,
  overlay: blackA.blackA11,
  outline: blueDark.blue11,
  underline: blueDark.blue11,
  underlineNeutral: grayDark.gray9,
  highlight: yellowDark.yellow7,
  codeHighlight: grayDark.gray4,
});

////////////////////////////////////////////////////////////////////////////////
// Globals

const globals = createGlobalTheme(":root", {
  font: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    mono: "'JetBrainsMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    xxxl: "2rem",
  },
  fontWeight: {
    normal: "400",
    bold: "575",
  },
  spacing: {
    none: "0",
    xs: "0.25rem",
    sm: ".5rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    xxxl: "2rem",
    xxxxl: "4rem",
    auto: "auto",
  },
  radius: {
    sm: "2px",
    md: "6px",
    lg: "10px",
    full: "9999px",
  },
  contentWidth: {
    text: "60ch",
    container: "50rem",
  },
  transition: {
    duration: "200ms",
  },
});

export const vars = { ...globals, color };
