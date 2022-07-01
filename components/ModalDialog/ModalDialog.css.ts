import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";
import { tokens } from "@/styles/tokens.css";

export const root = style({
  position: "fixed",
  inset: 0,
  backdropFilter: "blur(4px)",
  zIndex: 9999,
  ":after": {
    content: "",
    position: "absolute",
    inset: 0,
    backgroundColor: themeVars.color.page,
    opacity: 0.75,
    zIndex: 0,
  },
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: tokens.sizing.lg,
  gap: tokens.sizing.lg,
});

export const dismiss = style({
  marginLeft: "auto",
});

export const overlay = style({
  position: "relative",
  zIndex: 1,
  padding: tokens.sizing.lg,
});
