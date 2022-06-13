import type { AriaTooltipProps } from "@react-types/tooltip";
import type { TooltipTriggerState } from "@react-stately/tooltip";
import { useTooltip } from "@react-aria/tooltip";
import { mergeProps } from "@react-aria/utils";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const Tooltip: React.FC<
  AriaTooltipProps & { children: React.ReactNode; state: TooltipTriggerState }
> = ({ state, ...props }) => {
  let { tooltipProps } = useTooltip(props, state);

  return (
    <AnimatePresence>
      {state.isOpen ? (
        <span {...mergeProps(props, tooltipProps)}>
          <motion.span
            className={clsx(
              "absolute left-1/2 -translate-x-1/2 -translate-y-3 bottom-full text-sm whitespace-nowrap p-2 rounded-md border z-10",
              "bg-white border-gray-200",
              "dark:bg-gray-800 dark:border-gray-700"
            )}
            initial={{
              opacity: 0,
              y: "-6px",
              x: "-50%",
            }}
            animate={{
              opacity: 1,
              y: "-12px",
              x: "-50%",
              transition: {
                duration: 0.15,
              },
            }}
            exit={{
              opacity: 0,
              y: "-6px",
              x: "-50%",
              transition: {
                duration: 0.1,
              },
            }}
          >
            <span
              className={clsx(
                "block w-3 h-3 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 border border-r-0 border-t-0 -z-10",
                "bg-white border-gray-200",
                "dark:bg-gray-800 dark:border-gray-700"
              )}
            />
            {props.children}
          </motion.span>
        </span>
      ) : null}
    </AnimatePresence>
  );
};

export default Tooltip;
