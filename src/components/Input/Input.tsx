import React, { useState } from "react";
import PropTypes from "prop-types";

interface Props {
  placeholder: string;
  value: string | undefined;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ placeholder, value, onInput, onChange }: Props) => {

  return (
    <input
      className="font-manrope border w-full bg-ei-primary-light/10 border-1 border-ei-primary-dark rounded-2xl px-4 py-4 box-border outline-none text-white 
      focus:border-ei-primary focus:placeholder-white
      placeholder:font-normal placeholder:placeholder-ei-primary-faded
      font-bold "
      placeholder={placeholder}
      value={value}
      onInput={e => onInput && onInput(e)}
      onChange={e => onChange && onChange(e)}
    />
  );
};

export default Input;
