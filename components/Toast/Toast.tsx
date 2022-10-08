import createStore from "zustand";
import { nanoid } from "nanoid";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "react-feather";
import * as styles from "./Toast.css";

export interface Toast {
  id?: string;
  title?: string;
  content: string;
}

interface ToastStore {
  toasts: Toast[];
  toast: (data: Toast) => string;
  removeToast: (id: string) => void;
}

const useStore = createStore<ToastStore>((set) => ({
  toasts: [],
  toast: (data) => {
    const id = nanoid();
    set((state) => ({
      toasts: [
        {
          ...data,
          id,
        },
        ...state.toasts,
      ],
    }));

    return id;
  },
  removeToast: (id: string) =>
    set(({ toasts }) => {
      const i = toasts.findIndex((t) => t.id === id);
      if (i === -1) return { toasts };
      return {
        toasts: [...toasts.slice(0, i), ...toasts.slice(i + 1)],
      };
    }),
}));

export const toast = (...args: Parameters<ToastStore["toast"]>) =>
  useStore.getState().toast(...args);

export const removeToast = (...args: Parameters<ToastStore["removeToast"]>) =>
  useStore.getState().removeToast(...args);

export const Toaster = () => {
  const { toasts, removeToast } = useStore();
  const reducedMotion = useReducedMotion();

  return (
    <ToastPrimitive.Provider>
      <AnimatePresence>
        {toasts.map(({ id, title, content }) => {
          return (
            <ToastPrimitive.Root
              key={id}
              className={styles.root}
              asChild
              forceMount
              open
              onOpenChange={(open) => {
                if (open === false) {
                  removeToast(id!);
                }
              }}
              duration={8000}
            >
              <motion.div
                layout={reducedMotion ? false : "position"}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: reducedMotion ? 1 : 0.75,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.2,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 300 }}
              >
                {title && (
                  <ToastPrimitive.Title className={styles.title}>
                    {title}
                  </ToastPrimitive.Title>
                )}
                <ToastPrimitive.Description className={styles.description}>
                  {content}
                </ToastPrimitive.Description>
                <ToastPrimitive.Close
                  aria-label="Close"
                  className={styles.close}
                >
                  <span className={styles.closeHighlight} />
                  <span aria-hidden className={styles.closeIcon}>
                    <X width={16} />
                  </span>
                </ToastPrimitive.Close>
              </motion.div>
            </ToastPrimitive.Root>
          );
        })}
      </AnimatePresence>
      <ToastPrimitive.Viewport className={styles.viewport} />
    </ToastPrimitive.Provider>
  );
};
