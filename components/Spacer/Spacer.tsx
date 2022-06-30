import clsx from "clsx";
import { root, spacerSprinkles, SpacerSprinkles } from "./Spacer.css";

export const Spacer = ({ height, width }: SpacerSprinkles) => {
  return <span className={clsx(root, spacerSprinkles({ width, height }))} />;
};
