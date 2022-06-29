import { tokens } from "@/styles/tokens.css";
import { root } from "./Spacer.css";

interface SpacerProps {
  axis?: "x" | "y";
  size?: keyof typeof tokens.spacing;
}

export const Spacer = ({ axis = "y", size = "xs" }: SpacerProps) => {
  return (
    <span
      aria-hidden={true}
      className={root({
        axis,
        size,
      })}
    />
  );
};
