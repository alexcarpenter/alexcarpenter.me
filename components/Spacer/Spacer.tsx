import type { Sprinkles } from "@/styles/sprinkle.css";
import { Box } from "@/components/Box";

interface SpacerProps {
  height?: Sprinkles["height"];
  width?: Sprinkles["width"];
}

export const Spacer = ({ height, width }: SpacerProps) => {
  return <Box as="span" display="block" height={height} width={width} />;
};
