import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

function ToggleButton({
  className,
  isSelected,
  children,
  disabled,
  onClick,
}: Props) {
  const defaultStyles = "text-ei-primary-faded bg-ei-primary-dark";
  const selectedStyles = "text-white bg-ei-primary font-bold";

  return (
    <div
      className={classNames(
        "px-12 md:px-6 py-3 md:py-2 rounded-3xl transition-all flex justify-center items-center text-2xl md:text-base",
        className,
        () => (isSelected ? selectedStyles : defaultStyles),
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default ToggleButton;
