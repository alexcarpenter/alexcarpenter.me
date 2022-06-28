import { themeVars } from "@/styles/theme.css";
import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100vh",
  display: "grid",
  alignItems: "end",
  placeItems: "end",
  pointerEvents: "none",
  padding: tokens.spacing.lg,
});

export const toasts = style({
  display: "grid",
  gap: tokens.spacing.md,
});

export const toast = style({
  pointerEvents: "auto",
  display: "flex",
  alignItems: "center",
  gap: tokens.spacing.md,
  padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
  backgroundColor: themeVars.color.surface,
  border: "1px solid",
  borderColor: themeVars.color.border,
  borderRadius: tokens.radius.sm,
});

export const toastIcon = style({
  color: themeVars.color.foregroundHighlight,
});

export const toastDismiss = style({
  display: "grid",
  placeItems: "center",
  width: "2rem",
  height: "2rem",
  backgroundColor: "transparent",
  cursor: "pointer",
  borderRadius: tokens.radius.sm,
  ":hover": {
    backgroundColor: themeVars.color.surfaceHover,
  },
  ":focus": {
    backgroundColor: themeVars.color.surfaceHover,
  },
  ":focus-visible": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineColor: themeVars.color.outline,
  },
});
