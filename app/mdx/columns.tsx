import { Slot, type SlotProps } from "@radix-ui/react-slot";

export function Columns(props: SlotProps) {
  return <Slot className="columns-2" {...props} />;
}
