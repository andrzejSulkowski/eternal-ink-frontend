import { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import React from "react";

interface Props extends EIProps {}

function EIIcon({ children, className }: Props) {
  return (
    <div
      className={classNames(
        "bg-[#331C66] rounded-full text-3xl md:text-base w-16 h-16 md:w-12 md:h-12 aspect-square p-3 md:p-[10px] flex justify-center items-center",
        className
      )}
    >
      {children}
    </div>
  );
}

export default EIIcon;
