import {
  createGlobalThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";
import { tokens } from "./tokens.css";

export const themeVars = createGlobalThemeContract({
  color: {
    page: "color-page",
    foreground: "color-foreground",
  },
});

createGlobalTheme(":root.light", themeVars, {
  color: {
    page: tokens.color.light.gray2,
    foreground: tokens.color.light.gray12,
  },
});

createGlobalTheme(":root.dark", themeVars, {
  color: {
    page: tokens.color.dark.gray2,
    foreground: tokens.color.dark.gray12,
  },
});
