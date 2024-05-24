import React from "react";

export interface Props {
  title: string;
  highlightedTitle: string;
  description: string;
  children?: React.ReactNode;
}

function Card({ title, highlightedTitle, description, children }: Props) {
  return (
    <div className="w-full h-80 bg-gradient-to-br from-black/20 to-ei-twilight-blue text-white rounded-3xl grid grid-cols-12">
      <div className="col-span-5">
        {children}
      </div>
      <div className="col-span-7 pr-10 py-20">
        <div className="uppercase text-ei-primary font-semibold text-xs mb-5">
          Random facts
        </div>
        <div className="font-extrabold text-5xl">{title}</div>
        <div className="font-extrabold text-5xl text-ei-primary">
          {highlightedTitle}
        </div>
        <span className="text-sm mt-5 text-ei-primary-faded">
          {description}
        </span>
      </div>
    </div>
  );
}

export default Card;
