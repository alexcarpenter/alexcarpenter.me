import * as React from "react";
import { useOverlay, usePreventScroll, useModal } from "@react-aria/overlays";
import { useDialog } from "@react-aria/dialog";
import { FocusScope } from "@react-aria/focus";

const ModalDialog = (props: any) => {
  let { title, children } = props;

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
    <div
      className="fixed z-50 inset-0 bg-white/75 backdrop-blur-sm"
      {...underlayProps}
    >
      <div className="p-4 grid place-items-center w-full h-full overflow-auto">
        <FocusScope contain restoreFocus autoFocus>
          <div
            {...overlayProps}
            {...dialogProps}
            {...modalProps}
            ref={ref}
            className="max-w-3xl mx-auto"
          >
            <h3 {...titleProps} className="sr-only">
              {title}
            </h3>
            {children}
          </div>
        </FocusScope>
      </div>
    </div>
  );
};

export default ModalDialog;
