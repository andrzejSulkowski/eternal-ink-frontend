"use client";
import Link from "next/link";
import React, { useCallback } from "react";
import { classNames } from "@/utils/className";

type Props = {
  textContent?: string;
  children?: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
} & ({ href: string } | { onClick: () => void });

function Button(args: Props) {
  const { textContent, children, className, isDisabled } = args;
  const onClickHandler = useCallback(() => {
    if ("onClick" in args) {
      return !isDisabled && args.onClick ? args.onClick() : null;
    }
  }, [isDisabled, args]);

  if ("href" in args) {
    const { href } = args;
    return (
      <div
        className={classNames(
          `flex items-center font-semibold text-ei-black bg-white rounded-2xl text-xl lg:text-sm font-manrope text-center
          ${isDisabled ? "text-ei-primary-faded cursor-not-allowed" : "text-black cursor-pointer"}
          `,
          className
        )}
      >
        <Link className="px-8 py-5 md:px-6 md:py-3 " href={href}>
          {children}
        </Link>
      </div>
    );
  } else {
    return (
      <div
        className={classNames(
          `flex items-center font-semibold text-ei-black bg-white rounded-2xl px-6 py-5 md:py-3 text-2xl lg:text-sm font-manrope text-center 
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
}

export default Button;
