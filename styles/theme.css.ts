import {
  gray,
  grayDark,
  blackA,
  whiteA,
  blue,
  blueDark,
} from "@radix-ui/colors";
import {
  createGlobalThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";

export const themeVars = createGlobalThemeContract({
  color: {
    page: "color-page",
    foreground: "color-foreground",
    foregroundNeutral: "color-foreground-neutral",
    surface: "color-surface",
    border: "color-border",
    overlay: "color-overlay",
    outline: "color-outline",
  },
});

createGlobalTheme(":root.light", themeVars, {
  color: {
    page: gray.gray1,
    foreground: gray.gray12,
    foregroundNeutral: gray.gray11,
    surface: gray.gray2,
    border: gray.gray6,
    overlay: whiteA.whiteA11,
    outline: blue.blue11,
  },
});

createGlobalTheme(":root.dark", themeVars, {
  color: {
    page: grayDark.gray1,
    foreground: grayDark.gray12,
    foregroundNeutral: grayDark.gray11,
    surface: grayDark.gray3,
    border: grayDark.gray6,
    overlay: blackA.blackA11,
    outline: blueDark.blue11,
  },
});
