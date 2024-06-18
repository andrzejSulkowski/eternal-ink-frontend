'use client';
import React, { useMemo, useState } from "react";
import EIIcon from "@/components/1.atoms/EIIcon/EIIcon";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

export interface Props extends EIProps {
  icon: React.JSX.Element;
  title: string;
  description: string;
  options?: Array<{
    title: string;
    description: string;
  }>;
}

function SelectionCard({
  icon,
  title,
  description,
  options,
  className,
}: Props) {
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0);

  const CardOptionsTitles = () => {
    return (
      <div className="flex gap-7 justify-start items-center mb-3">
        {options?.map((option, index) => (
          <React.Fragment key={index}>
            <div
              onClick={() => setSelectedOptionIdx(index)}
              className={`inline-block font-bold cursor-pointer ${selectedOptionIdx === index ? "text-ei-primary" : ""}`}
            >
              {option.title}
            </div>
            {index !== options.length - 1 && (
              <div className="flex flex-col justify-center h-[1.5ch]">
                <div className="w-[1px] h-full bg-white/60" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const getSelectedOptionDescription = useMemo(
    () => options?.at(selectedOptionIdx)?.description,
    [selectedOptionIdx, options]
  );

  return (
    <div className="font-manrope flex flex-col">
      <EIIcon className="w-10">{icon}</EIIcon>
      <div
        className={classNames("text-sm text-ei-primary-faded mt-8", className)}
      >
        <span className="block font-extrabold text-white text-xl mb-3">
          {" "}
          {title}{" "}
        </span>
        <span className="block text-sm"> {description} </span>
        {options && options.length > 0 && <div className="mt-6" />}
        <CardOptionsTitles />
        <span>{getSelectedOptionDescription}</span>
      </div>
    </div>
  );
}

export default SelectionCard;
