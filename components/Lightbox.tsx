import * as React from "react";
import type { ImageProps } from "next/image";
import Image from "next/image";
import { OverlayContainer } from "@react-aria/overlays";
import { useKeyboard } from "@react-aria/interactions";
import { motion } from "framer-motion";
import useWrappingIndex from "@alexcarpenter/use-wrapping-index";
import ModalDialog from "./ModalDialog";
import clsx from "clsx";

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
            {images.length > 1 ? (
              <nav className="absolute bottom-4 left-0 right-0">
                <ol className="flex justify-center gap-2">
                  {images.map((_, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <li key={index}>
                        <button
                          onClick={() => setActiveIndex(index)}
                          className="w-8 h-8 grid place-items-center"
                        >
                          <span className="sr-only">
                            View image {index + 1}
                          </span>
                          <span
                            className={clsx(
                              "block w-3 h-3 rounded-full z-20 transition-colors",
                              { "bg-gray-200 dark:bg-gray-500": !isActive },
                              { "bg-gray-500 dark:bg-gray-200": isActive }
                            )}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            ) : null}
          </ModalDialog>
        </OverlayContainer>
      ) : null}
    </>
  );
};

export default Lightbox;
