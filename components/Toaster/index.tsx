import { toast, useToaster } from "react-hot-toast";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle, X } from "react-feather";
import clsx from "clsx";
import * as styles from "./Toaster.css";
import { VisuallyHidden } from "../VisuallyHidden";

export const Toaster = () => {
  const { toasts, handlers } = useToaster({
    duration: 5000,
  });
  const { startPause, endPause } = handlers;
  const reducedMotion = useReducedMotion();
  return (
    <div className={styles.root}>
      <div
        onMouseEnter={startPause}
        onMouseLeave={endPause}
        className={styles.toasts}
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
                className={styles.toast}
              >
                <>
                  {t.type === "success" ? (
                    <CheckCircle
                      className={styles.toastIcon}
                      width="1rem"
                      height="1rem"
                    />
                  ) : null}
                  {t.message}
                  <button
                    onClick={() => toast.remove(t.id)}
                    className={styles.toastDismiss}
                  >
                    <VisuallyHidden>Dismiss toast</VisuallyHidden>
                    <X width="1rem" height="1rem" />
                  </button>
                </>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
