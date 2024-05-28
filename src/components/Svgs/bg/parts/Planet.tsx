import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {}

function Planet({ className }: Props) {
  return (
    <div
      className={classNames(
        "w-[166%] h-[133%] rounded-[50%] overflow-visible relative",
        className
      )}
    >
      {/* Background Color */}
      <div className="absolute w-full h-full bg-gradient-to-t from-[#000000] from-85% to-[#22203B] z-10 rounded-[50%] blur-[2px]"></div>
      {/* White Polished Top Effect */}
      <div className="w-[90%] h-full absolute -top-[4px] bg-white rounded-[50%] left-1/2 -translate-x-1/2 blur-[2px]"></div>
      {/* Light Blue Glow */}
      <div className="w-5/6 h-full absolute -top-5 bg-[#95A5FD] rounded-[50%] left-1/2 -translate-x-1/2 blur-3xl opacity-60"></div>
      {/* Blue Glow */}
      <div className="w-[130%] h-full absolute -top-20 bg-[#2446F9] rounded-[50%] left-1/2 -translate-x-1/2 blur-3xl opacity-60"></div>
    </div>
  );
}

export default Planet;
