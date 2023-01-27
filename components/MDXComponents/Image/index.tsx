import type { ImageProps as NextImageProps } from "next/legacy/image";
import NextImage from "next/legacy/image";
import { cn } from "lib/utils";
import * as styles from "./Image.css";

const Image = (
  props: NextImageProps & {
    rounded?: boolean;
    bordered?: boolean;
  }
) => {
  const { rounded = true, bordered = false } = props;
  return (
    <div
      className={cn(
        styles.root,
        rounded && styles.rounded,
        bordered && styles.bordered
      )}
    >
      <NextImage {...props} alt={props.alt} />
    </div>
  );
};

export { Image };
