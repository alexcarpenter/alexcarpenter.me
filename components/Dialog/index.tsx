import * as React from 'react';
import * as style from './style.css';
import { useOverlay, usePreventScroll, useModal } from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';

export default function Dialog(props) {
  let { title, children } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  let ref = React.useRef();
  let { overlayProps, underlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  let { modalProps } = useModal();

  // Get props for the dialog and its title
  let { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div className={style.underlay} {...underlayProps}>
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          className={style.dialog}
        >
          <h3 {...titleProps}>{title}</h3>
          {children}
        </div>
      </FocusScope>
    </div>
  );
}
