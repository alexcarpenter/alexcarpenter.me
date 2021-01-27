import * as React from 'react';
import { useOverlayTriggerState } from '@react-stately/overlays';
import {
  useOverlay,
  usePreventScroll,
  useModal,
  OverlayContainer,
} from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { useButton } from '@react-aria/button';
import { Search } from 'react-feather';
import SeachInput from '@/components/SearchInput';
import clsx from 'clsx';
import tinykeys from 'tinykeys';

function ModalDialog(props) {
  let { children } = props;
  let ref = React.useRef();
  let { overlayProps } = useOverlay(props, ref);
  usePreventScroll();
  let { modalProps } = useModal();
  let { dialogProps } = useDialog(props, ref);

  return (
    <div
      className="fixed inset-0 px-4 py-8 md:py-16 flex justify-center items-start bg-gray-50 z-100"
      // @ts-ignore
      style={{ '--tw-bg-opacity': 0.95 }}
    >
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          className="w-full max-w-screen-sm"
        >
          {children}
        </div>
      </FocusScope>
    </div>
  );
}

export default function SearchDialog() {
  let state = useOverlayTriggerState({});
  let openButtonRef = React.useRef();
  let { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef,
  );
  React.useEffect(() => {
    let unsubscribe = tinykeys(window, {
      '/': () => state.open(),
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <>
      <button
        {...openButtonProps}
        ref={openButtonRef}
        className="relative w-8 h-8 rounded-full flex items-center justify-center group focus:outline-none"
      >
        <span className="sr-only">Search</span>
        <span
          aria-hidden="true"
          className={clsx(
            'bg-gray-200 absolute inset w-8 h-8 rounded-full transform transition-transform transition-background group-hover:scale-150 group-focus:scale-150',
          )}
        />
        <Search
          aria-hidden="true"
          focusable={false}
          width=".85em"
          className="relative"
        />
      </button>
      {state.isOpen && (
        <OverlayContainer>
          <ModalDialog isOpen onClose={state.close} isDismissable>
            <SeachInput onClose={state.close} />
          </ModalDialog>
        </OverlayContainer>
      )}
    </>
  );
}
