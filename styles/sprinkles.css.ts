import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";

const space = vars.spacing;
const radius = vars.radius;
const fontSize = vars.fontSize;
const fontWeight = vars.fontWeight;
const fontFamily = vars.font;
const maxWidth = vars.contentWidth;

const columns = {
  "1/1": `repeat(1, 1fr)`,
  "1/2": `repeat(2, 1fr)`,
  "1/3": `repeat(3, 1fr)`,
  "1/4": `repeat(4, 1fr)`,
} as const;

const responsiveProperties = defineProperties({
  conditions: {
    xs: {},
    sm: { "@media": "screen and (min-width: 576px)" },
    md: { "@media": "screen and (min-width: 768px)" },
    lg: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "xs",
  properties: {
    position: ["relative", "absolute"],
    display: ["none", "flex", "inline-flex", "grid", "block", "inline"],
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
    marginTop: space,
    marginRight: space,
    marginBottom: space,
    marginLeft: space,
    gap: space,
    rowGap: space,
    columnGap: space,
    gridTemplateColumns: columns,
    aspectRatio: ["1/1", "4/3"],
    maxWidth: maxWidth,
    width: space,
    height: space,
    fontSize,
    textAlign: ["left", "center", "right"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    columns: ["gridTemplateColumns"],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    color: vars.color,
    borderRadius: radius,
    border: { true: `1px solid ${vars.color.border}` },
    flexShrink: [0],
    flexGrow: [0, 1],
    fontFamily,
    fontWeight,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
