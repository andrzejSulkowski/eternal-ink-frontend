import { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import React from "react";

interface Props extends EIProps {}

function FileWarning({ className }: Props) {
  return (
    <div
      className={classNames(
        "max-h-full max-w-full h-full aspect-square",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
      </svg>
    </div>
  );
}
export default FileWarning;
