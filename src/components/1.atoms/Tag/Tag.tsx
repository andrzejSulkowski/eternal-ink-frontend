import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {}

function Label({ className, children }: Props) {
  return (
    <div
      className={classNames(
        "px-6 py-2 rounded-2xl text-white bg-ei-primary font-bold uppercase font-manrope flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Label;
