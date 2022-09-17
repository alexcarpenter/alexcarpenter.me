import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

globalStyle("[cmdk-overlay]", {
  position: "fixed",
  inset: 0,
  backgroundColor: themeVars.color.overlay,
  backdropFilter: "blur(8px)",
});

globalStyle("[cmdk-dialog]", {
  position: "fixed",
  top: tokens.spacing.xxxxl,
  left: "50%",
  transform: "translateX(-50%)",
  maxWidth: 640,
  width: "100%",
  paddingInline: tokens.spacing.md,
  "@media": {
    "screen and (min-width: 576px)": {
      paddingTop: "8rem",
    },
  },
});

globalStyle("[cmdk-root]", {
  width: "100%",
  backgroundColor: themeVars.color.surface,
  border: `1px solid ${themeVars.color.border}`,
  borderRadius: tokens.radius.md,
});

globalStyle("[cmdk-input]", {
  position: "relative",
  fontFamily: tokens.font.sans,
  fontSize: tokens.fontSize.md,
  width: "100%",
  padding: tokens.spacing.md,
  borderBottom: `1px solid ${themeVars.color.border}`,
});

globalStyle("[cmdk-input]::placeholder", {
  color: themeVars.color.foregroundNeutral,
});

globalStyle("[cmdk-list]", {
  height: "min(300px, calc(var(--cmdk-list-height)) + 32px)",
  maxHeight: 400,
  overflow: "auto",
  overscrollBehavior: "contain",
  transition: "100ms ease",
  transitionProperty: "height",
  paddingBlock: tokens.spacing.md,
  scrollPaddingBlock: tokens.spacing.md,
});

globalStyle("*:not([hidden]) + [cmdk-group]", {
  marginBlockStart: tokens.spacing.md,
});

globalStyle("[cmdk-group-heading]", {
  userSelect: "none",
  fontSize: tokens.fontSize.sm,
  color: themeVars.color.foregroundNeutral,
  paddingInline: tokens.spacing.md,
  marginBlockEnd: tokens.spacing.sm,
});

globalStyle("[cmdk-item]", {
  display: "flex",
  alignItems: "center",
  contentVisibility: "auto",
  cursor: "pointer",
  height: 48,
  paddingInline: tokens.spacing.md,
});

globalStyle("[cmdk-item]::after", {
  content: "",
  position: "absolute",
  inset: `0 ${tokens.spacing.sm}`,
  backgroundColor: themeVars.color.surfaceHover,
  borderRadius: tokens.radius.md,
  opacity: 0,
  zIndex: -1,
});

globalStyle("[cmdk-item][aria-selected='true']::after", {
  opacity: 1,
});

globalStyle("[cmdk-empty]", {
  textAlign: "center",
  color: themeVars.color.foregroundNeutral,
});
