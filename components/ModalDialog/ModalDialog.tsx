import * as React from "react";
import { useOverlay, usePreventScroll, useModal } from "@react-aria/overlays";
import { useDialog } from "@react-aria/dialog";
import { FocusScope } from "@react-aria/focus";
import * as styles from "./ModalDialog.css";
import { VisuallyHidden } from "../VisuallyHidden";

export const ModalDialog = (props: any) => {
  let { onClose, title, children } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  let ref = React.useRef<HTMLDivElement>(null);
  let { overlayProps, underlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  let { modalProps } = useModal();

  // Get props for the dialog and its title
  let { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div className={styles.root} {...underlayProps}>
      <FocusScope contain restoreFocus autoFocus>
        <div
          className={styles.overlay}
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
        >
          <header className={styles.header}>
            <h2 {...titleProps}>{title}</h2>
            <button onClick={() => onClose()} className={styles.dismiss}>
              Close
            </button>
          </header>
          {children}
        </div>
      </FocusScope>
    </div>
  );
};
