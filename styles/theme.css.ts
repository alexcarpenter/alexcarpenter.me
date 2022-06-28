import { createGlobalTheme } from "@vanilla-extract/css";
import { gray, grayDark } from "@radix-ui/colors";

export const vars = createGlobalTheme(":root", {
  font: {
    sans: "Inter",
  },
  color: {
    ...gray,
  },
});
