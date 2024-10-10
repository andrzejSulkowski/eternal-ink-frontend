import type CustomWindow from "@/models/window";
import { useCallback, useEffect, useMemo, useState } from "react";

type WindowFn = (window: CustomWindow) => void;

export const useWindow = () => {
  const [customWindow, setWindow] = useState<CustomWindow | null>(null);
  const [fnStack, setFnStack] = useState<Array<WindowFn>>([]);

  useEffect(() => {
    const newWindow: CustomWindow = window as any as CustomWindow;
    if (window) {
      setWindow(newWindow);
    }
  }, [setWindow]);

  useEffect(() => {
    if (customWindow) {
      fnStack.forEach((fn) => {
        fn(customWindow);
      });
    }
  }, [customWindow, fnStack]);

  const runFn = useCallback(
    (fn: WindowFn) => {
      if (customWindow) {
        fn(customWindow);
      } else {
        setFnStack((fnStack) => {
          return [...fnStack, fn];
        });
      }
    },
    [customWindow, fnStack]
  );

  return {
    window: customWindow,
    runFn,
  };
};
