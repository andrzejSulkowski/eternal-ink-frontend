"use client";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import LoadingSpinner from "@/components/1.atoms/LoadingSpinner/LoadingSpinner";
import { motion } from "framer-motion";

type Options = {
  label: {
    position: "bottom";
    textContent: string;
  };
};

interface IContext {
  isVisible: boolean;
  loadingMessage: string;
  currentStage: number;
  totalStages: number;
  opt?: Options;
}

const LoadingScreenContext = createContext<{
  showLoadingScreen: (
    loadingMessage: string,
    currentState: number,
    totalStages: number,
    opt?: Options
  ) => void;
  hideLoadingScreen: () => void;
  state: IContext;
}>({
  showLoadingScreen: () => {},
  hideLoadingScreen: () => {},
  state: {
    isVisible: false,
    loadingMessage: "",
    currentStage: 0,
    totalStages: 0,
  },
});
const useLoadingScreen = () => useContext(LoadingScreenContext);

function LoadingScreenProvider({ children }: PropsWithChildren<{}>) {
  const [state, setState] = useState<IContext>({
    isVisible: false,
    loadingMessage: "",
    currentStage: 0,
    totalStages: 0,
    opt: undefined,
  });

  const showLoadingScreen = useCallback(
    (
      loadingMessage: string,
      currentStage: number,
      totalStages: number,
      opt?: Options
    ) => {
      setState({
        isVisible: true,
        loadingMessage,
        currentStage: currentStage,
        totalStages,
        opt,
      });
    },
    [setState]
  );

  const hideLoadingScreen = useCallback(() => {
    setState({
      isVisible: false,
      loadingMessage: "",
      currentStage: 0,
      totalStages: 0,
    });
  }, [setState]);

  return (
    <LoadingScreenContext.Provider
      value={{ showLoadingScreen, hideLoadingScreen, state }}
    >
      {state.isVisible && (
        <motion.div
          className="absolute top-0 left-0 bottom-0 right-0 bg-black/40 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <LoadingSpinner
              innerText={state.currentStage + "/" + state.totalStages}
              label={state.loadingMessage}
            />
          </div>

          {state.opt && (
            <motion.div
              className="text-white text-xl absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-ei-void/50 rounded-xl border-ei-twilight-blue border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={state.opt.label.textContent}
            >
              {state.opt.label?.textContent}
            </motion.div>
          )}
        </motion.div>
      )}

      {children}
    </LoadingScreenContext.Provider>
  );
}
export default LoadingScreenProvider;
export { useLoadingScreen };
