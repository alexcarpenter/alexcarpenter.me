import type { PartialPick } from "types";
import type { BoxProps } from "@/components/Box";
import { Box } from "@/components/Box";

interface SpacerProps extends PartialPick<BoxProps, "width" | "height"> {}

export const Spacer = ({ height, width }: SpacerProps) => {
  return <Box as="span" display="block" height={height} width={width} />;
};
