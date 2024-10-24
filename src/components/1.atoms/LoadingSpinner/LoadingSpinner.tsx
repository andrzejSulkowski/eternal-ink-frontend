import React, { useState } from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {
  innerText: string;
  label: string;
}

const style =
  "w-20 h-20 md:w-12 md:h-12 rounded-full inline-block border-t-2 border-solid border-t-ei-primary border-r-transparent box-border animate-spin";

const LoadingSpinner: React.FC<Props> = ({
  innerText,
  label,
  className,
}: Props) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center text-3xl md:text-xs text-white font-manrope font-semibold",
        className
      )}
    >
      <div className="p-6 md:p-4 bg-black rounded-full aspect-square w-min h-min border border-solid border-[#242438]">
        <div className="text-white font-manrope font-semibold relative aspect-square flex justify-center items-center">
          <div className={style}></div>
          <span className="absolute left-0 right-0 bottom-0 top-0 m-auto flex justify-center items-center">
            {innerText}
          </span>
        </div>
      </div>
      <div className="uppercase truncate mt-4 font-semibold text-2xl md:text-base">
        {label}
      </div>
    </div>
  );
};

export default LoadingSpinner;
