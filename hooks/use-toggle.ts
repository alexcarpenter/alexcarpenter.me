import * as React from "react";

const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = React.useState<boolean>(initialState);
  const toggle = React.useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
};

export { useToggle };
