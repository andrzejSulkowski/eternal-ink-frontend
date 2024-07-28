import type CustomWindow from "@/models/window";
import { useEffect, useMemo, useState } from "react";

type WindowFn = (window: CustomWindow) => void;

export const useWindow = () => {
  const [customWindow, setWindow] = useState<CustomWindow | null>(null);
  const fnStack: Array<WindowFn> = useMemo(() => [], []);

  useEffect(() => {
    const newWindow: CustomWindow = window as any as CustomWindow;
    if (window) {
      setWindow(newWindow);
    }
  }, []);

  useEffect(() => {
    if (customWindow) {
      fnStack.forEach((fn) => {
        fn(customWindow);
      });
    }
  }, [customWindow, fnStack]);

  const runFn = (fn: WindowFn) => {
    if (customWindow) {
      fn(customWindow);
    } else {
      fnStack.push(fn);
    }
  };

  return {
    window: customWindow,
    runFn,
  };
};
