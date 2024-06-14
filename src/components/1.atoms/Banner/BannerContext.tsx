"use client";
import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

// Config
const APPEAR_DURATION = 4500;

interface IContext {
    banner: { visible: boolean, message: string };
    showBanner: (message: string) => void;
    hideBanner: () => void;
}
const BannerContext = createContext<IContext>({banner: {visible: false, message: ''}, showBanner: () => {}, hideBanner: () => {}});

// Use this to get vars from the context
export const useBanner = () => {
  return useContext(BannerContext);
}

export const BannerProvider = ({ children }: PropsWithChildren) => {
  const [banner, setBanner] = useState({ visible: false, message: '' });

  const showBanner = (message: string, ms?: number) => {
    setBanner({ visible: true, message });
    let timeout = ms || APPEAR_DURATION;
    setTimeout(hideBanner, timeout);
  };

  const hideBanner = () => {
    setBanner({ visible: false, message: '' });
  };

  const props: IContext = {
    banner,
    showBanner,
    hideBanner
  };
  return (
    <BannerContext.Provider value={props}>
      {children}
    </BannerContext.Provider>
  );
};