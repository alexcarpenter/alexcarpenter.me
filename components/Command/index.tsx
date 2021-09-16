import * as React from 'react';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { OverlayContainer } from '@react-aria/overlays';
import Dialog from '@/components/Dialog';
import tinykeys from '@/lib/tinykeys';

export default function Command() {
  let state = useOverlayTriggerState({});

  React.useEffect(() => {
    tinykeys(window, { '$mod+k': () => state.open() });
  });

  return (
    <>
      {state.isOpen && (
        <OverlayContainer>
          <Dialog
            title="Command palette"
            isOpen
            onClose={state.close}
            isDismissable
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quas
            delectus odio culpa, nobis earum! Qui voluptatum cum quasi nostrum
            iusto assumenda repellat animi eligendi maxime tempora! Possimus,
            voluptatum quae?
          </Dialog>
        </OverlayContainer>
      )}
    </>
  );
}
