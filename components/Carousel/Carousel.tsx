import * as React from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { cn } from "lib/utils";
import { ArrowRight, ArrowLeft } from "react-feather";
import { VisuallyHidden } from "components/VisuallyHidden";
import * as styles from "./Carousel.css";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const count = React.Children.count(children);
  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className={styles.root}>
        <motion.div
          className={styles.carousel}
          animate={{ x: `-${activeIndex * 100}%` }}
        >
          {React.Children.map(children, (child) => {
            return <div className={styles.item}>{child}</div>;
          })}
        </motion.div>
        <nav className={styles.pagination}>
          <AnimatePresence initial={false}>
            {activeIndex > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{ opacity: 1 }}
                onClick={() => setActiveIndex(activeIndex - 1)}
                className={styles.button}
              >
                <VisuallyHidden>Previous</VisuallyHidden>
                <ArrowLeft width="16" height="16" />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {activeIndex + 1 < count && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0, pointerEvents: "none" }}
                whileHover={{ opacity: 1 }}
                onClick={() => setActiveIndex(activeIndex + 1)}
                className={cn(styles.button, styles.next)}
              >
                <VisuallyHidden>Next</VisuallyHidden>
                <ArrowRight width="16" height="16" />
              </motion.button>
            )}
          </AnimatePresence>
        </nav>
        {/* <nav>
          {React.Children.map(children, (child, index) => {
            return (
              <button
                className={styles.item}
                onClick={() => setActiveIndex(index)}
              >
                Set {index}
              </button>
            );
          })}
        </nav> */}
      </div>
    </MotionConfig>
  );
};

export { Carousel };
