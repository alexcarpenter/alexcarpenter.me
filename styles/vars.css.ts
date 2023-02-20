import { gray, grayDark, blue, blueDark } from "@radix-ui/colors";
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
  border: "color-border",
  borderFaint: "color-border-faint",
  outline: "color-outline",
  underline: "color-underline",
});

createGlobalTheme(":root.light", color, {
  page: gray.gray1,
  foreground: gray.gray12,
  foregroundNeutral: gray.gray11,
  border: gray.gray6,
  borderFaint: gray.gray4,
  outline: blue.blue11,
  underline: blue.blue11,
});

createGlobalTheme(":root.dark", color, {
  page: grayDark.gray1,
  foreground: grayDark.gray12,
  foregroundNeutral: grayDark.gray11,
  border: grayDark.gray6,
  borderFaint: grayDark.gray4,
  outline: blueDark.blue11,
  underline: blueDark.blue11,
});

////////////////////////////////////////////////////////////////////////////////
// Globals

const globals = createGlobalTheme(":root", {
  font: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    mono: "'JetBrainsMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  fontSize: {
    xs: ".75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    xxl: "2rem", // 32px
  },
  fontWeight: {
    normal: "400",
    bold: "575",
  },
  spacing: {
    none: "0",
    xxs: "0.25rem", // 4px
    xs: "0.5rem", // 8px
    sm: ".75rem", // 12px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    xxl: "3rem", // 48px
    xxxl: "4rem", // 64px
    xxxxl: "6rem", // 96px
  },
  radii: {
    none: "0",
    full: "9999px",
  },
  contentWidth: {
    prose: "60ch",
  },
});

export const vars = { ...globals, color };
