import { globalStyle, keyframes } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { vars } from "styles/vars.css";

const fadeIn = keyframes({
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
});

const fadeOut = keyframes({
  "0%": { opacity: "1" },
  "100%": { opacity: "0" },
});

const enter = keyframes({
  "0%": { opacity: "0", transform: "scale(.85) translateX(-50%)" },
  "100%": { opacity: "1", transform: "scale(1) translateX(-50%)" },
});

const exit = keyframes({
  "0%": { opacity: "1", transform: "scale(1) translateX(-50%)" },
  "100%": { opacity: "0", transform: "scale(.95) translateX(-50%)" },
});

globalStyle(`[cmdk-overlay]`, {
  position: "fixed",
  inset: 0,
  backgroundColor: vars.color.overlay,
  backdropFilter: "blur(8px)",
});

globalStyle("[cmdk-dialog]", {
  transformOrigin: "0 0",
  position: "fixed",
  top: vars.spacing.xxxxl,
  left: "50%",
  transform: "translateX(-50%)",
  maxWidth: 640,
  width: calc.subtract("100%", calc.multiply(vars.spacing.md, 2)),
  zIndex: 9999,
  "@media": {
    "screen and (min-width: 576px)": {
      marginTop: "8rem",
    },
  },
});

globalStyle('[cmdk-overlay][data-state="open"]', {
  animationName: fadeIn,
  animationDuration: "150ms",
});

globalStyle('[cmdk-overlay][data-state="closed"]', {
  animationName: fadeOut,
  animationDuration: "200ms",
});

globalStyle('[cmdk-dialog][data-state="open"]', {
  animationName: enter,
  animationDuration: "200ms",
});

globalStyle('[cmdk-dialog][data-state="closed"]', {
  animationName: exit,
  animationDuration: "150ms",
});

globalStyle("[cmdk-root]", {
  width: "100%",
  backgroundColor: vars.color.page,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radii.md,
});

globalStyle("[cmdk-header]", {
  position: "relative",
});

globalStyle("[cmdk-header-esc]", {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: vars.spacing.md,
  fontSize: vars.fontSize.xs,
  padding: `${vars.spacing.xxs} ${vars.spacing.xs}`,
  color: vars.color.foregroundNeutral,
  borderRadius: vars.radii.md,
  cursor: "pointer",
  border: `1px solid ${vars.color.border}`,
});

globalStyle("[cmdk-input]", {
  position: "relative",
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.md,
  width: "100%",
  padding: vars.spacing.md,
  paddingInlineEnd: calc.add(calc.multiply(vars.spacing.md, 2), "45px"),
  borderBottom: `1px solid ${vars.color.border}`,
});

globalStyle("[cmdk-input]::placeholder", {
  color: vars.color.foregroundNeutral,
});

globalStyle("[cmdk-list]", {
  height: "min(300px, calc(var(--cmdk-list-height)) + 32px)",
  maxHeight: 400,
  overflow: "auto",
  overscrollBehavior: "contain",
  transition: "100ms ease",
  transitionProperty: "height",
  paddingBlock: vars.spacing.md,
  scrollPaddingBlock: vars.spacing.md,
});

globalStyle("*:not([hidden]) + [cmdk-group]", {
  marginBlockStart: vars.spacing.md,
});

globalStyle("[cmdk-group-heading]", {
  position: "relative",
  userSelect: "none",
  fontSize: vars.fontSize.sm,
  color: vars.color.foregroundNeutral,
  paddingInline: vars.spacing.md,
  marginBlockEnd: vars.spacing.sm,
  zIndex: 10,
});

globalStyle("[cmdk-item]", {
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.sm,
  position: "relative",
  cursor: "pointer",
  fontSize: vars.fontSize.sm,
  paddingInline: vars.spacing.md,
  paddingBlock: vars.spacing.xs,
});

globalStyle("[cmdk-item] .content", {
  display: "flex",
  alignItems: "center",
  gap: vars.spacing.sm,
  position: "relative",
  zIndex: 10,
});

globalStyle("[cmdk-item] .highlight", {
  position: "absolute",
  inset: `0 ${vars.spacing.xs}`,
  borderRadius: vars.radii.md,
  backgroundColor: vars.color.surface,
});

globalStyle("[cmdk-item] svg", {
  width: ".9rem",
  color: vars.color.foregroundNeutral,
  transition: "ease-in-out 0.1s",
  transitionDelay: "0.1s",
});

globalStyle("[cmdk-item][aria-selected='true'] svg", {
  color: vars.color.foreground,
});

globalStyle("[cmdk-empty]", {
  textAlign: "center",
  color: vars.color.foregroundNeutral,
  fontSize: vars.fontSize.sm,
});
