import type { ToastProps as RadixToastProps } from "@radix-ui/react-toast";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "react-feather";
import * as styles from "./Toast.css";

interface ToastProps extends RadixToastProps {
  content: string;
}

const Toast = ({ title, content, ...props }: ToastProps) => {
  return (
    <ToastPrimitive.Root {...props} className={styles.root}>
      {title && (
        <ToastPrimitive.Title className={styles.title}>
          {title}
        </ToastPrimitive.Title>
      )}
      <ToastPrimitive.Description className={styles.description}>
        {content}
      </ToastPrimitive.Description>
      <ToastPrimitive.Close aria-label="Close" className={styles.close}>
        <span className={styles.closeHighlight} />
        <span aria-hidden>
          <X width={16} />
        </span>
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
};

export { Toast };
