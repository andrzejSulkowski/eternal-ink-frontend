// BannerContext.js
import React, { PropsWithChildren, createContext, useContext, useState } from 'react';
import Banner from "./Banner"

interface IContext {
    banner: { visible: boolean, message: string };
    showBanner: (message: string) => void;
    hideBanner: () => void;
}
const BannerContext = createContext<IContext>({banner: {visible: false, message: ''}, showBanner: () => {}, hideBanner: () => {}});

export const useBanner = () => {
  return useContext(BannerContext);
};

export const BannerProvider = ({ children }: PropsWithChildren) => {
  const [banner, setBanner] = useState({ visible: false, message: '' });

  const showBanner = (message: string) => {
    setBanner({ visible: true, message });
  };

  const hideBanner = () => {
    setBanner({ visible: false, message: '' });
  };

  return (
    <BannerContext.Provider value={{ banner, showBanner, hideBanner }}>
      {children}
    </BannerContext.Provider>
  );
};