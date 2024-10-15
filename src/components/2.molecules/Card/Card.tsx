import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

export interface Props extends EIProps {
  title: string;
  highlightedTitle: string;
  description: string;
  children?: React.ReactNode;
}

function Card({
  title,
  highlightedTitle,
  description,
  children,
  className,
}: Props) {
  return (
    <div
      className={classNames(
        "w-full h-[450px] md:h-auto bg-gradient-to-br from-black/20 to-ei-twilight-blue text-white rounded-3xl flex flex-col-reverse md:grid md:grid-cols-12 px-8 md:0",
        className
      )}
    >
      <div className="col-span-5 w-full h-full relative max-w-full max-h-full">
        {children}
      </div>
      <div className="col-span-7 pr-10 py-20 flex flex-col">
        <div className="uppercase text-ei-primary font-semibold text-xl md:text-xs mb-5">
          Random facts
        </div>
        <div className="font-extrabold text-5xl">{title}</div>
        <div className="font-extrabold text-5xl text-ei-primary">
          {highlightedTitle}
        </div>

        <span className="text-2xl md:text-sm mt-5 text-ei-primary-faded">
          {description}
        </span>
      </div>
    </div>
  );
}

export default Card;
