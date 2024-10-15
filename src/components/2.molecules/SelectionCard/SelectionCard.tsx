"use client";
import React, { useMemo, useState } from "react";
import EIIcon from "@/components/1.atoms/EIIcon/EIIcon";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import { motion, AnimatePresence } from "framer-motion";

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
      <div className="flex gap-7 justify-start items-center mb-6 md:mb-3">
        {options?.map((option, index) => (
          <React.Fragment key={index}>
            <div
              onClick={() => setSelectedOptionIdx(index)}
              className={`inline-block text-xl md:text-sm font-bold cursor-pointer ${
                selectedOptionIdx === index ? "text-ei-primary" : ""
              }`}
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
    () => options?.[selectedOptionIdx]?.description,
    [selectedOptionIdx, options]
  );

  return (
    <motion.div className="font-manrope flex md:flex-col gap-6 md:gap-0">
      <EIIcon>{icon}</EIIcon>
      <div
        className={classNames(
          "text-sm text-ei-primary-faded md:mt-8",
          className
        )}
      >
        <span className="block font-extrabold text-white text-3xl md:text-xl mb-3">
          {title}
        </span>
        <span className="block text-xl md:text-sm">{description}</span>
        {options && options.length > 0 && <div className="mt-10 md:mt-6" />}
        {options && options.length > 0 && <CardOptionsTitles />}
        <AnimatePresence mode="wait">
          <motion.span
            key={selectedOptionIdx} // Ensure a unique key for each content change
            className="text-xl md:text-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {getSelectedOptionDescription}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default SelectionCard;
