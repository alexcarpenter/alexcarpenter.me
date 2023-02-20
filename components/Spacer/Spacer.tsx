import * as React from "react";
import type { Sprinkles } from "styles/sprinkles.css";
import { sprinkles } from "styles/sprinkles.css";
import { cn } from "lib/utils";

interface SpacerProps {
  width?: Sprinkles["width"];
  height?: Sprinkles["height"];
}

const Spacer = ({ width, height }: SpacerProps) => {
  return React.createElement("span", {
    "aria-hidden": "",
    className: cn(
      sprinkles({ display: width ? "inline-block" : "block", width, height })
    ),
  });
};

export { Spacer };
