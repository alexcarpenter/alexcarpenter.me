import {
  blackA,
  whiteA,
  gray,
  grayDark,
  blue,
  blueDark,
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
  surface: "color-surface",
  border: "color-border",
  borderFaint: "color-border-faint",
  underline: "color-underline",
  outline: "color-outline",
  overlay: "color-overlay",
});

createGlobalTheme(":root.light", color, {
  page: gray.gray1,
  foreground: gray.gray12,
  foregroundNeutral: gray.gray11,
  surface: gray.gray2,
  border: gray.gray7,
  borderFaint: gray.gray4,
  underline: gray.gray7,
  outline: blue.blue11,
  overlay: whiteA.whiteA11,
});

createGlobalTheme(":root.dark", color, {
  page: grayDark.gray1,
  foreground: grayDark.gray12,
  foregroundNeutral: grayDark.gray11,
  surface: grayDark.gray3,
  border: grayDark.gray7,
  borderFaint: grayDark.gray4,
  underline: grayDark.gray8,
  outline: blueDark.blue11,
  overlay: blackA.blackA11,
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
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    xxl: "1.5rem", // 24px
    xxxl: "2rem", // 32px
  },
  fontWeight: {
    normal: "400",
    semiBold: "500",
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
    md: "4px",
    lg: "6px",
    full: "9999px",
  },
  contentWidth: {
    prose: "60ch",
  },
});

export const vars = { ...globals, color };
