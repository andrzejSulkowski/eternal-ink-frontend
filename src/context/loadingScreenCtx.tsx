"use client";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import LoadingSpinner from "@/components/1.atoms/LoadingSpinner/LoadingSpinner";

interface IContext {
  isVisible: boolean;
  loadingMessage: string;
  currentStage: number;
  totalStages: number;
}

const LoadingScreenContext = createContext<{
  showLoadingScreen: (
    loadingMessage: string,
    currentState: number,
    totalStages: number
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
  });

  const showLoadingScreen = useCallback(
    (loadingMessage: string, currentStage: number, totalStages: number) => {
      setState({
        isVisible: true,
        loadingMessage,
        currentStage: currentStage,
        totalStages,
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
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/40 z-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <LoadingSpinner
              innerText={state.currentStage + "/" + state.totalStages}
              label={state.loadingMessage}
            />
          </div>
        </div>
      )}

      {children}
    </LoadingScreenContext.Provider>
  );
}
export default LoadingScreenProvider;
export { useLoadingScreen };
