'use client';
import React, { useMemo } from "react";
import type { EIProps, EIRoute } from "@/types";
import { classNames } from "@/utils/className";
import Button from "@/components/1.atoms/Button/Button";
import Routes from "./parts/Routes/Routes";
import { on } from "events";

interface Props extends EIProps {
  routes: EIRoute[];
}

function Header({
  className,
  children,
  routes,
}: Props) {


  function onCTAClick() {
    console.log("CTA Clicked");
  }
  function onHrefClick() {
    console.log("Href Clicked");
  }
  return (
    <header
      className={classNames(
        "flex w-full px-72 py-6 bg-gradient-to-t from-[rgba(7,5,20,0.1)] to-[#070514] font-manrope text-white gap-10 justify-between",
        "border-b-[1px] border-solid border-[#242438]",
        className
      )}
    >
      {/* Left Block */}
      <div className="flex gap-16 justify-between items-center">
        <span className="font-bold font-kanit text-2xl">Engrave</span>
        {/* Left's Bock Routes */}
        <Routes
          routes={routes}
        />
      </div>

      {/* Right Block */}
      <div>
        {children}
        <Button onClick={onCTAClick}>Begin Your Legacy</Button>
      </div>
    </header>
  );
}

export default Header;
