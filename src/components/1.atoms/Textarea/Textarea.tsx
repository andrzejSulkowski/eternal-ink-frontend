import React, { useState } from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {
  placeholder: string;
  value: string | undefined;
  onInput?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  onChange?: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input: React.FC<Props> = ({
  placeholder,
  value,
  onInput,
  onChange,
  className,
}: Props) => {
  return (
    <textarea
      className={classNames(
        "font-manrope border w-full bg-ei-primary-light/10 border-1 border-ei-primary-dark rounded-2xl px-6 py-4 box-border outline-none text-white  focus:border-ei-primary focus:placeholder-white  placeholder:font-normal placeholder:placeholder-ei-primary-faded font-bold resize-none",
        className
      )}
      placeholder={placeholder}
      value={value}
      onInput={(e) => onInput && onInput(e)}
      onChange={(e) => onChange && onChange(e)}
    />
  );
};

export default Input;
