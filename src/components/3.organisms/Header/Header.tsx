"use client";
import React, { useMemo } from "react";
import type { EIProps, EIRoute } from "@/types";
import { classNames } from "@/utils/className";
import Button from "@/components/1.atoms/Button/Button";
import Routes from "./parts/Routes/Routes";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props extends EIProps {
  routes: EIRoute[];
}

function Header({ className, children, routes }: Props) {
  const router = useRouter();
  function onCTAClick() {
    router.push("/engrave");
  }
  function onHrefClick() {
    console.log("Href Clicked");
  }
  return (
    <div
      className={classNames(
        "flex w-full px-72 py-6 bg-gradient-to-b from-[#070514] to-transparent font-manrope text-white gap-10 justify-between",
        "border-b-[1px] border-solid border-b-[#242438] font-manrope z-10",
        className
      )}
    >
      {/* Left Block */}
      <div className="flex gap-16 justify-between items-center">
        <Link className="font-bold font-kanit text-2xl" href="/">
          Engrave
        </Link>
        {/* Left's Bock Routes */}
        <Routes routes={routes} />
      </div>

      {/* Right Block */}
      <div>
        {children}
        <Button onClick={onCTAClick}>
          <Link href="engrave">Begin Your Legacy</Link>
        </Button>
      </div>
    </div>
  );
}

export default Header;
