import { PartialPick } from "types";
import type { BoxProps } from "@/components/Box";
import { Box } from "@/components/Box";

export const Spacer = ({
  height,
  width,
}: PartialPick<BoxProps<"span">, "width" | "height">) => {
  return <Box as="span" display="block" height={height} width={width} />;
};
