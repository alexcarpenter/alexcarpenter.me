import * as React from 'react';
import * as style from './style.css';
import { motion, AnimatePresence } from 'framer-motion';
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
    <AnimatePresence>
      <motion.div
        {...underlayProps}
        className={style.underlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <FocusScope contain restoreFocus autoFocus>
          <motion.div
            {...overlayProps}
            {...dialogProps}
            {...modalProps}
            ref={ref}
            className={style.dialog}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <h3 {...titleProps}>{title}</h3>
            {children}
          </motion.div>
        </FocusScope>
      </motion.div>
    </AnimatePresence>
  );
}
