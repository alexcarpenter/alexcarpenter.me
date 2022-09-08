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
    page: tokens.color.light.gray1,
    foreground: tokens.color.light.gray11,
  },
});

createGlobalTheme(":root.dark", themeVars, {
  color: {
    page: tokens.color.dark.gray1,
    foreground: tokens.color.dark.gray11,
  },
});
