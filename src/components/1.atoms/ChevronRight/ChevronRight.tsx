import React from "react";
import { FaChevronRight } from "react-icons/fa";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {}

function ChevronRight({ onClick, className }: Props) {
  return (
    <div
      className={classNames(
        "flex justify-center items-center bg-[#242438] text-white cursor-pointer p-2 rounded-full w-10 h-10",
        className
      )}
      onClick={onClick}
    >
      <FaChevronRight className="w-1/3" />
    </div>
  );
}

export default ChevronRight;
