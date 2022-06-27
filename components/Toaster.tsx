import { toast, useToaster } from "react-hot-toast";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle, X } from "react-feather";
import clsx from "clsx";

export const Toaster = () => {
  const { toasts, handlers } = useToaster({
    duration: 5000,
  });
  const { startPause, endPause } = handlers;
  const reducedMotion = useReducedMotion();
  return (
    <div className="fixed inset-0 p-4 pointer-events-none grid items-end justify-end">
      <div
        onMouseEnter={startPause}
        onMouseLeave={endPause}
        className="grid gap-4"
      >
        <AnimatePresence initial={false}>
          {toasts
            .filter((t) => t.visible)
            .map((t) => (
              <motion.div
                key={t.id}
                layout={reducedMotion ? false : "position"}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  scale: reducedMotion ? 1 : 0.75,
                  transition: { duration: 0.2 },
                }}
                {...t.ariaProps}
              >
                <div
                  key={t.id}
                  {...t.ariaProps}
                  className={clsx(
                    "pointer-events-auto max-w-xs w-full flex gap-2 items-center px-4 py-2 rounded-md border",
                    "bg-gray-100 border-gray-200",
                    "dark:bg-gray-800 dark:border-gray-700"
                  )}
                >
                  <>
                    {t.type === "success" ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : null}
                    {t.message}
                    <button
                      onClick={() => toast.remove(t.id)}
                      className="ml-4 w-8 h-8 grid place-items-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <span className="sr-only">View menu</span>
                      <X className="w-4 h-4" />
                    </button>
                  </>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
