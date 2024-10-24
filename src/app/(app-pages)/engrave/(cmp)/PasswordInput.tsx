import Input from "@/components/1.atoms/Input/Input";
import { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import { useState } from "react";

interface Props extends EIProps {
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function PasswordInput({ className, password, onChange }: Props) {
  return (
    <div
      className={classNames(
        "flex flex-col md:flex-row gap-4 px-7 md:px-4 py-3 bg-[#09090A] font-manrope rounded-xl",
        className
      )}
    >
      <div className="flex flex-col text-nowrap justify-center">
        <span className="font-bold text-xl md:text-sm text-white">
          Create Password
        </span>
        <span className="text-xl md:text-xs font-semibold text-ei-primary-faded">
          Max 8 Symbols
        </span>
      </div>
      <Input
        placeholder="Password"
        value={password}
        onChange={onChange}
        type="password"
      />
    </div>
  );
}
export default PasswordInput;
