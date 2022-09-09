import * as React from "react";
import type { Sprinkles } from "styles/sprinkles.css";
import { sprinkles } from "styles/sprinkles.css";
import clsx from "clsx";

interface SpacerProps {
  width?: Sprinkles["width"];
  height?: Sprinkles["height"];
}

const Spacer = ({ width, height }: SpacerProps) => {
  return React.createElement("span", {
    className: clsx(sprinkles({ display: "block", width, height })),
  });
};

export { Spacer };
