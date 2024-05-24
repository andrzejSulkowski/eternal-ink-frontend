import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "@/components/1.atoms/Avatar/Avatar";

interface Props {
  innerText: string;
  label: string;
}

const style =
  "w-12 h-12 rounded-full inline-block border-t-2 border-solid border-t-ei-primary border-r-transparent box-border animate-spin";

const LoadingSpinner: React.FC<Props> = ({ innerText, label }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center text-xs text-white font-manrope font-semibold">
      <div className="p-4 bg-black rounded-full aspect-square w-min h-min">
        <div className="text-white font-manrope font-semibold relative aspect-square flex justify-center items-center">
          <div className={style}></div>
          <span className="absolute left-0 right-0 bottom-0 top-0 m-auto flex justify-center items-center">
            {innerText}
          </span>
        </div>
      </div>
      <div className="uppercase truncate">{label}</div>
    </div>
  );
};


export default LoadingSpinner;
