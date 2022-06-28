import {
  createGlobalThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";
import { tokens } from "./tokens.css";

export const themeVars = createGlobalThemeContract({
  color: {
    page: "color-page",
    foreground: "color-foreground",
    foregroundHighlight: "color-foreground-highlight",
    surface: "color-surface",
    surfaceHover: "color-surface-hover",
    border: "color-border",
    outline: "color-outline",
  },
});

createGlobalTheme(":root.light", themeVars, {
  color: {
    page: tokens.color.light.gray1,
    foreground: tokens.color.light.gray11,
    foregroundHighlight: tokens.color.light.gray12,
    surface: tokens.color.light.gray3,
    surfaceHover: tokens.color.light.gray5,
    border: tokens.color.light.gray6,
    outline: tokens.color.light.blue9,
  },
});

createGlobalTheme(":root.dark", themeVars, {
  color: {
    page: tokens.color.dark.gray1,
    foreground: tokens.color.dark.gray11,
    foregroundHighlight: tokens.color.dark.gray12,
    surface: tokens.color.dark.gray3,
    surfaceHover: tokens.color.dark.gray5,
    border: tokens.color.dark.gray6,
    outline: tokens.color.dark.blue9,
  },
});
