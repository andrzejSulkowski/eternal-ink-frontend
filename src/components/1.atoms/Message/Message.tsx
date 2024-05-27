import React, { useState } from "react";
import Avatar from "@/components/1.atoms/Avatar/Avatar";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {
  message: string;
  address: string;
  variant?: "solid" | "outline";
}

const Message: React.FC<Props> = ({
  address,
  message,
  variant = "solid",
  className,
}: Props) => {
  const getFormattedAddress = (address: string) =>
    address.slice(0, 4) + "..." + address.slice(address.length - 4);

  const variantStyles = {
    solid: "bg-ei-primary/20",
    outline: "bg-transparent",
  };
  const getVariantStyles = () =>
    variant === "solid" ? variantStyles.solid : variantStyles.outline;

  return (
    <div
      className={classNames(
        "flex justify-between rounded-xl bg-ei-primary/20 py-3 px-4 w-[362px] h-[67.5px] text-sm border-solid border border-ei-primary/20 font-manrope",
        getVariantStyles(),
        className
      )}
    >
      <div className="flex items-center gap-2 w-2/5">
        <Avatar address={address} />
        <span className="text-white font-bold">
          {getFormattedAddress(address)}
        </span>
      </div>
      <div className="flex flex-col w-2/5 justify-center text-right">
        <span className="text-ei-primary-dirty">engraved message:</span>
        <span className="text-white truncate font-bold">{message}</span>
      </div>
    </div>
  );
};

export default Message;
export type { Props as MessageProps };
