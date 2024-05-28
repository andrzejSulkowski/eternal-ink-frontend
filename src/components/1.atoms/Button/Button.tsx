import React, { useMemo } from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props {
  textContent?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ textContent, children, className, onClick }: Props) {
  return (
    <div
      className={classNames(
        "flex items-center font-semibold text-ei-black bg-white rounded-2xl px-6 py-3 text-sm font-manrope cursor-pointer text-black text-center",
        className
      )}
      onClick={onClick}
    >
      <span>{textContent}</span>
      {children}
    </div>
  );
}

export default Button;
