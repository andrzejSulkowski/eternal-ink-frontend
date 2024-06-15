"use client";
import { useEffect, useState } from "react";
import { useBanner } from "./BannerContext";
import { IoClose } from "react-icons/io5";

function Banner() {
  const { banner, hideBanner } = useBanner();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (banner.isVisible) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 500); // Match transition duration
      return () => clearTimeout(timeout);
    }
  }, [banner.isVisible]);

  return (
    <div
      className={`
        fixed w-full top-0 left-0 h-12 bg-ei-danger flex justify-between items-center px-8 font-manrope transition-all duration-500 z-30 
        ${banner.isVisible ? "opacity-100" : "opacity-0"} 
        ${isVisible ? "" : "hidden"}
        ${banner.danger ? "bg-ei-danger" : "bg-ei-success"}
      `}
    >
      <span className="font-semibold">{banner.message}</span>
      <IoClose className="cursor-pointer h-full w-10" onClick={hideBanner} />
    </div>
  );
}

export default Banner;
