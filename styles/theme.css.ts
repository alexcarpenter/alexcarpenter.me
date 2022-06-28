import {
  createGlobalThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";
import { tokens } from "./tokens.css";

export const vars = createGlobalThemeContract({
  color: {
    page: "color-page",
    foreground: "color-foreground",
    foregroundHighlight: "color-foreground-highlight",
  },
});

createGlobalTheme("html.light", vars, {
  color: {
    page: tokens.color.gray.light.gray1,
    foreground: tokens.color.gray.light.gray11,
    foregroundHighlight: tokens.color.gray.light.gray12,
  },
});

createGlobalTheme("html.dark", vars, {
  color: {
    page: tokens.color.gray.dark.gray1,
    foreground: tokens.color.gray.dark.gray11,
    foregroundHighlight: tokens.color.gray.dark.gray12,
  },
});
