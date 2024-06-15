"use client";
import React, {
  PropsWithChildren,
  createContext,
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

  const showBanner = (
    message: string,
    opt: { ms?: number; danger?: boolean } = {
      ms: APPEAR_DURATION,
      danger: true,
    }
  ) => {
    console.log("set banner message: ", message);
    setBanner({ isVisible: true, message: message, danger: opt.danger ?? true });
    let timeout = opt.ms ?? APPEAR_DURATION;
    setTimeout(hideBanner, timeout);
  };

  const hideBanner = () => {
    setBanner({ isVisible: false, message: "", danger: banner.danger });
  };

  const props: IContext = {
    banner,
    showBanner,
    hideBanner,
  };
  return (
    <BannerContext.Provider value={props}>{children}</BannerContext.Provider>
  );
};
