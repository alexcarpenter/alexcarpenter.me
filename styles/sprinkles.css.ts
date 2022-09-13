import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { themeVars } from "./theme.css";
import { tokens } from "./tokens.css";

const space = tokens.spacing;
export type Space = keyof typeof space;
const radius = tokens.radius;
export type Radius = keyof typeof radius;
const fontSize = tokens.fontSize;
export type FontSize = keyof typeof fontSize;
const maxWidth = tokens.contentWidth;
export type MaxWidth = keyof typeof maxWidth;

const responsiveProperties = defineProperties({
  conditions: {
    sm: {},
    md: { "@media": "screen and (min-width: 768px)" },
    lg: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "sm",
  properties: {
    position: ["relative", "absolute"],
    display: ["none", "flex", "grid", "block", "inline"],
    flexDirection: ["row", "row-reverse", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    gap: space,
    rowGap: space,
    columnGap: space,
    aspectRatio: ["1/1", "4/3"],
    maxWidth: maxWidth,
    width: space,
    height: space,
    fontSize,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    color: themeVars.color,
    borderRadius: radius,
    border: { true: `1px solid ${themeVars.color.border}` },
    flexShrink: [0],
    flexGrow: [0, 1],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
