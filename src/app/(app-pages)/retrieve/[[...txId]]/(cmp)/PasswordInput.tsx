import Input from "@/components/1.atoms/Input/Input";
import { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import { useState } from "react";

interface Props extends EIProps {
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autofocus?: boolean;
}

function PasswordInput({
  className,
  password,
  onChange,
  autofocus = false,
}: Props) {
  return (
    <div className={classNames(className)}>
      <div className="font-manrope">
        <span className="text-ei-primary-faded">
          This Message was Encrypted.{" "}
        </span>
        <span className="text-white">Type Password:</span>
      </div>
      <div className="flex gap-12 pr-3 pl-4 py-3 bg-[#09090A] font-manrope rounded-xl">
        <div className="flex flex-col text-nowrap justify-center">
          <span className="font-bold text-sm text-white">Password:</span>
        </div>
        <Input
          autofocus={autofocus}
          placeholder="Password"
          value={password}
          onChange={onChange}
          type="password"
        />
      </div>
    </div>
  );
}
export default PasswordInput;
