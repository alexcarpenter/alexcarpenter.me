import {
  defineProperties,
  createSprinkles,
  createMapValueFn,
  createNormalizeValueFn,
} from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";

const space = vars.spacing;
const borderRadius = vars.radii;
const fontSize = vars.fontSize;
const fontWeight = vars.fontWeight;
const fontFamily = vars.font;
const maxWidth = vars.contentWidth;
const columns = ["1", "2", "3", "4", "-1"] as const;
const rows = ["1", "-1"] as const;

const responsiveProperties = defineProperties({
  conditions: {
    xs: {},
    sm: { "@media": "screen and (min-width: 576px)" },
    md: { "@media": "screen and (min-width: 768px)" },
    lg: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "xs",
  properties: {
    display: ["block", "inline", "inline-flex", "inline-block", "flex", "grid"],
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
    maxWidth: maxWidth,
    width: space,
    height: space,
    fontSize,
    gridColumnStart: columns,
    gridColumnEnd: columns,
    gridRowStart: rows,
    gridRowEnd: rows,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginRight", "marginLeft"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    color: vars.color,
    borderRadius: borderRadius,
    fontFamily: fontFamily,
    fontWeight: fontWeight,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

export const mapResponsiveValue = createMapValueFn(responsiveProperties);
export const normalizeResponsiveValue =
  createNormalizeValueFn(responsiveProperties);
