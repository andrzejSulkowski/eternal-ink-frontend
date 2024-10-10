"use client";
import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

// Config
const APPEAR_DURATION = 4500;

interface BannerProps {
  isVisible: boolean;
  message: string;
  danger: boolean;
}

interface IContext {
  banner: BannerProps;
  showBanner: (
    message: string,
    opt?: { ms?: number; danger?: boolean }
  ) => void;
  hideBanner: () => void;
}
const BannerContext = createContext<IContext>({
  banner: { isVisible: false, message: "", danger: true },
  showBanner: () => {},
  hideBanner: () => {},
});

// Use this to get vars from the context
export const useBanner = () => {
  return useContext(BannerContext);
};

export const BannerProvider = ({ children }: PropsWithChildren) => {
  const [banner, setBanner] = useState<BannerProps>({
    isVisible: false,
    message: "",
    danger: true,
  });

const hideBanner = useCallback(() => {
    setBanner({ isVisible: false, message: "", danger: banner.danger });
  }, [setBanner]);

  const showBanner = useCallback((
    message: string,
    opt: { ms?: number; danger?: boolean } = {
      ms: APPEAR_DURATION,
      danger: true,
    }
  ) => {
    setBanner({ isVisible: true, message: message, danger: opt.danger ?? true });
    let timeout = opt.ms ?? APPEAR_DURATION;
    setTimeout(hideBanner, timeout);
  }, [setBanner, hideBanner]);


  const props: IContext = {
    banner,
    showBanner,
    hideBanner,
  };
  return (
    <BannerContext.Provider value={props}>{children}</BannerContext.Provider>
  );
};
