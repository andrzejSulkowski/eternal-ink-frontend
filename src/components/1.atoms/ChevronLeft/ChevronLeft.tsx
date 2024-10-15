import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {}

function ChevronLeft({ onClick, className }: Props) {
  return (
    <div
      className={classNames(
        "flex justify-center items-center bg-[#242438] text-white cursor-pointer p-2 rounded-full md:w-10 md:h-10 w-16 h-16",
        className
      )}
      onClick={onClick}
    >
      <FaChevronLeft className="w-1/3" />
    </div>
  );
}

export default ChevronLeft;
