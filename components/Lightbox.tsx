import * as React from "react";
import type { ImageProps } from "next/image";
import Image from "next/image";
import { OverlayContainer } from "@react-aria/overlays";
import { useKeyboard } from "@react-aria/interactions";
import { motion } from "framer-motion";
import useWrappingIndex from "@alexcarpenter/use-wrapping-index";
import ModalDialog from "./ModalDialog";

interface LightboxProps {
  title: string;
  children: any;
  images: Array<ImageProps>;
}

const Lightbox = (props: LightboxProps) => {
  const { title, children, images } = props;
  const { activeIndex, setActiveIndex, moveToNextIndex, moveToPreviousIndex } =
    useWrappingIndex({
      maxIndex: images.length,
    });
  const [isOpen, setIsOpen] = React.useState(false);
  const handlers = React.useMemo(
    () => ({
      show: (index: number) => {
        setActiveIndex(index);
        setIsOpen(true);
      },
      hide: () => {
        setActiveIndex(0);
        setIsOpen(false);
      },
    }),
    [setActiveIndex]
  );
  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      switch (e.key) {
        case "ArrowLeft": {
          moveToNextIndex();
          break;
        }
        case "ArrowRight": {
          moveToNextIndex();
          break;
        }
        default: {
        }
      }
    },
  });

  return (
    <>
      {children({ images, handlers })}
      {isOpen ? (
        <OverlayContainer {...keyboardProps}>
          <ModalDialog
            title={title}
            isOpen
            onClose={handlers.hide}
            isDismissable
          >
            <div className="grid">
              {images.map((image, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: {
                        opacity: 0,
                      },
                      visible: {
                        opacity: 1,
                      },
                    }}
                    initial="hidden"
                    animate={index === activeIndex ? "visible" : "hidden"}
                    className="grid"
                    style={{ gridArea: "1/1" }}
                  >
                    <Image
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      alt={image.alt}
                    />
                  </motion.div>
                );
              })}
            </div>
          </ModalDialog>
        </OverlayContainer>
      ) : null}
    </>
  );
};

export default Lightbox;
