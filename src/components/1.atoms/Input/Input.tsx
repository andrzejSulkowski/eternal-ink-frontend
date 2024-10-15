import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {
  placeholder?: string;
  value: string | boolean | undefined;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  label?: string;
  autofocus?: boolean;
  name?: string;
}

const Input: React.FC<Props> = ({
  placeholder,
  value,
  onInput,
  onChange,
  isDisabled = false,
  className,
  type = "text",
  autofocus = false,
  label,
  name,
}: Props) => {
  const inputProps = {
    autoFocus: autofocus,
    className: classNames(
      "font-manrope border w-full bg-ei-primary-light/10 border-1 border-ei-primary-dark rounded-2xl px-4 py-4 text-xl md:text-base",
      "box-border outline-none text-white focus:border-ei-primary focus:placeholder-white md:placeholder:font-normal placeholder:text-xl",
      "placeholder:placeholder-ei-primary-faded font-bold disabled:opacity-50 disabled:cursor-not-allowed",
      className
    ),
    disabled: isDisabled,
    placeholder: placeholder,
    onInput: onInput,
    onChange: onChange,
    type: type,
    name: name,
    id: name, // Add id to associate with label
  };

  // Handle checkbox input separately
  if (type === "checkbox") {
    return <input {...inputProps} checked={!!value} />;
  }

  // For other input types
  return (
    <>
      {label ? (
        <div className="flex gap-12 pr-3 pl-4 py-3 bg-[#09090A] font-manrope rounded-xl">
          <div className="flex flex-col text-nowrap justify-center">
            <span className="font-bold text-xl md:text-sm text-white">
              {label}:
            </span>
          </div>
          <input
            {...inputProps}
            value={typeof value === "boolean" ? "" : value}
          />
        </div>
      ) : (
        <input
          {...inputProps}
          value={typeof value === "boolean" ? "" : value}
        />
      )}
    </>
  );
};

export default Input;
