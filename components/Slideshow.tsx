import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { ChevronRight, ChevronLeft } from 'react-feather';
import { cx } from '@/lib/utils';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Slideshow = ({ caption, children }) => {
  const [grabbing, setGrabbing] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);
  const activeIndex = wrap(0, React.Children.count(children), page);
  const images = React.Children.map(children, (child) => {
    return React.cloneElement(
      child,
      {
        draggable: false,
      },
      null,
    );
  });

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <figure>
        <div className="relative grid bg-gray-50 dark:bg-gray-900 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              onPointerDown={() => setGrabbing(true)}
              onPointerUp={() => setGrabbing(false)}
              className="flex area-1/1"
              style={{
                cursor: grabbing ? 'grabbing' : 'grab',
              }}
            >
              {images[activeIndex]}
            </motion.div>
          </AnimatePresence>
          <button
            className="shadow-md grid place-items-center w-8 h-8 bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 absolute right-4 top-1/2 -translate-y-1/2 rounded-md z-10"
            onClick={() => paginate(1)}
          >
            <span className="sr-only">Next image</span>
            <ChevronRight />
          </button>
          <button
            className="shadow-md grid place-items-center w-8 h-8 bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 absolute left-4 top-1/2 -translate-y-1/2 rounded-md z-10"
            onClick={() => paginate(-1)}
          >
            <span className="sr-only">Previous image</span>
            <ChevronLeft />
          </button>
        </div>
        <figcaption
          className={cx(
            'text-sm textSecondary text-center pt-4 flex flex-wrap',
            [caption ? 'justify-between' : 'justify-center'],
          )}
        >
          <span>
            {activeIndex + 1}
            <span aria-label="of" className="px-1">
              /
            </span>
            {React.Children.count(children)}
          </span>
          {caption ? <span>{caption}</span> : null}
        </figcaption>
      </figure>
    </>
  );
};

export default Slideshow;
