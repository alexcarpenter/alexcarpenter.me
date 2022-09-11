import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

globalStyle("[cmdk-overlay]", {
  position: "fixed",
  inset: 0,
  backgroundColor: themeVars.color.overlay,
  backdropFilter: "blur(4px)",
});

globalStyle("[cmdk-dialog]", {
  position: "fixed",
  top: "8rem",
  left: "50%",
  maxWidth: "40rem",
  width: "100%",
  transform: "translateX(-50%)",
});

globalStyle("[cmdk-input]", {
  backgroundColor: themeVars.color.page,
  width: "100%",
  padding: tokens.spacing.md,
  outline: "none",
  border: "1px solid",
  borderColor: themeVars.color.border,
  borderRadius: 0,
  borderTopLeftRadius: tokens.radius.md,
  borderTopRightRadius: tokens.radius.md,
});

globalStyle("[cmdk-input]::placeholder", {
  color: themeVars.color.foregroundNeutral,
});

globalStyle("[cmdk-list]", {
  minHeight: 150,
  backgroundColor: themeVars.color.page,
  height: "var(--cmdk-list-height)",
  maxHeight: 350,
  transition: "height 100ms ease",
  overflowY: "auto",
  paddingInline: tokens.spacing.sm,
  paddingBlock: tokens.spacing.lg,
  scrollPaddingBlock: tokens.spacing.lg,
  border: "1px solid",
  borderColor: themeVars.color.border,
  borderTop: 0,
  borderBottomLeftRadius: tokens.radius.md,
  borderBottomRightRadius: tokens.radius.md,
});

globalStyle("*:not([hidden]) + [cmdk-group]", {
  marginTop: tokens.spacing.sm,
});

globalStyle("[cmdk-group-heading]", {
  marginBottom: tokens.spacing.sm,
  fontSize: tokens.fontSize.sm,
  paddingInline: tokens.spacing.md,
  color: themeVars.color.foregroundNeutral,
});

globalStyle("[cmdk-item]", {
  position: "relative",
  contentVisibility: "auto",
  cursor: "pointer",
  borderRadius: tokens.radius.md,
  fontSize: tokens.fontSize.md,
  padding: tokens.spacing.md,
  userSelect: "none",
});

globalStyle("[cmdk-item] + [cmdk-item]", {
  marginTop: tokens.spacing.sm,
});

globalStyle('[cmdk-item][aria-selected="true"]', {
  backgroundColor: themeVars.color.surface,
});

export const root = style({
  position: "fixed",
  inset: 0,
});
