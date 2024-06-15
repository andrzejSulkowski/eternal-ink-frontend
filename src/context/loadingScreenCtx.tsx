"use client";

import { createContext, useContext, useState } from "react";

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

function LoadingScreenProvider() {
  const [state, setState] = useState<IContext>({
    isVisible: false,
    loadingMessage: "",
    currentStage: 0,
    totalStages: 0,
  });

  function showLoadingScreen(
    loadingMessage: string,
    currentStage: number,
    totalStages: number
  ) {
    setState({
      isVisible: true,
      loadingMessage,
      currentStage: currentStage,
      totalStages,
    });
  }

  function hideLoadingScreen() {
    setState({
      isVisible: false,
      loadingMessage: "",
      currentStage: 0,
      totalStages: 0,
    });
  }

  return (
    <LoadingScreenContext.Provider
      value={{ showLoadingScreen, hideLoadingScreen, state }}
    ></LoadingScreenContext.Provider>
  );
}
export default LoadingScreenProvider;
export { useLoadingScreen };
