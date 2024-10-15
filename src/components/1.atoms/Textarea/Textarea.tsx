import React, { useState } from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {
  placeholder: string;
  value: string | undefined;
  onInput?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  onChange?: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isDisabled?: boolean;
}

const Input: React.FC<Props> = ({
  placeholder,
  value,
  onInput,
  onChange,
  className,
  isDisabled,
}: Props) => {
  return (
    <textarea
      className={classNames(
        `font-manrope border w-full bg-[#09090A] border-1 border-ei-primary-dark rounded-2xl px-6 py-4 box-border outline-none text-xl md:text-base
        text-white  focus:border-ei-primary focus:placeholder-white md:placeholder:font-normal placeholder:text-xl placeholder:placeholder-ei-primary-faded font-bold resize-none
        disabled:opacity-50 disabled:cursor-not-allowed cursor-text`,
        className
      )}
      placeholder={placeholder}
      value={value}
      onInput={(e) => onInput && onInput(e)}
      onChange={(e) => onChange && onChange(e)}
      disabled={isDisabled}
    />
  );
};

export default Input;
