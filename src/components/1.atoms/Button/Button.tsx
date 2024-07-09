"use client";
import React, { useMemo } from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props {
  textContent?: string;
  children?: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

function Button({
  textContent,
  children,
  className,
  isDisabled,
  onClick,
}: Props) {
  function onClickHandler() {
    if (!isDisabled && onClick) onClick();
  }
  return (
    <div
      className={classNames(
        `flex items-center font-semibold text-ei-black bg-white rounded-2xl px-6 py-3 text-sm font-manrope text-center 
        ${isDisabled ? "text-ei-primary-faded cursor-not-allowed" : "text-black cursor-pointer"}
        `,
        className
      )}
      onClick={onClickHandler}
    >
      <span>{textContent}</span>
      {children}
    </div>
  );
}

export default Button;
