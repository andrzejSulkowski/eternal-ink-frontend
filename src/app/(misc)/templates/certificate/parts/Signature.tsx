import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import Image from "next/image";

interface Props extends EIProps {}

function Signature({ className }: Props) {
  return (
    <div className={classNames("w-[107px] h-[89px] flex flex-col", className)}>
      <div className="h-[50px] w-full relative">
        <Image
          className="absolute left-3 -top-5 w-full"
          src="/certificate/assets/signature.png"
          alt="signature"
        />
      </div>
      <div data-vertical-line className="w-full h-[1px] bg-[#242438]" />

      <span className="text-xs font-bold text-center mt-4">
        Andrzej Sulkowski
      </span>
      <span className="text-[10px] text-ei-primary-faded text-center mt-[2px]">
        Engraving Creator
      </span>
    </div>
  );
}

export default Signature;
