"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

type ILayoutMode = "concise" | "full";

type ILayoutContextState = {
  mode: ILayoutMode;
};

type ILayoutContext = {
  set: (state: ILayoutContextState) => void;
  state: ILayoutContextState;
};

const LayoutContext = createContext<ILayoutContext>({
  set: () => {},
  state: {
    mode: "full",
  },
});

const usePageLayout = () => useContext(LayoutContext);

function LayoutProvider({ children }: PropsWithChildren<{}>) {
  const [state, setState] = useState<ILayoutContextState>({
    mode: "full",
  });

  const set = useCallback(
    (state: ILayoutContextState) => {
      setState(state);
    },
    [setState]
  );

  return (
    <LayoutContext.Provider value={{ state, set }}>
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutProvider;
export { usePageLayout };
