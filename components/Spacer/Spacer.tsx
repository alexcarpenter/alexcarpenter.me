import type { heightVariants, widthVariants } from "./Spacer.css";
import * as styles from "./Spacer.css";
import clsx from "clsx";

interface SpacerProps {
  height?: keyof typeof heightVariants;
  width?: keyof typeof widthVariants;
}

export const Spacer = ({ height, width }: SpacerProps) => {
  return (
    <span
      className={clsx(
        height && styles.heightVariants[height],
        width && styles.widthVariants[width]
      )}
    />
  );
};
