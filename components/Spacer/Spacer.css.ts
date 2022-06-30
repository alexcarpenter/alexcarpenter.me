import { style } from "@vanilla-extract/css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { tokens } from "@/styles/tokens.css";

const space = tokens.sizing;

const responsiveProperties = defineProperties({
  conditions: {
    sm: {},
    md: { "@media": "screen and (min-width: 768px)" },
    lg: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "sm",
  properties: {
    width: space,
    height: space,
  },
});

export const root = style({
  display: "block",
});
export const spacerSprinkles = createSprinkles(responsiveProperties);
export type SpacerSprinkles = Parameters<typeof spacerSprinkles>[0];
