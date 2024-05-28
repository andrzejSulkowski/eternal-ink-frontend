import React, { useMemo } from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import EIIcon from "@/components/1.atoms/EIIcon/EIIcon";
import Copy from "@/components/Svgs/Copy";

interface Props extends EIProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  isCopyable?: boolean;
  trimValue?: boolean;
}

function InfoCard({
  className,
  icon,
  label,
  value,
  isCopyable = true,
  trimValue = false,
}: Props) {
  const trim = (address: string) =>
    `${address.slice(0, 9)}...${address.slice(-11)}`;
  const getValue = useMemo(() => trimValue ? trim(value) : value, [value, trimValue]);

  return (
    <div
      className={classNames(
        "flex items-end justify-between px-6 py-8 bg-black rounded-2xl space-x-4 font-manrope w-full",
        className
      )}
    >
      <div className="flex flex-col h-full gap-8">
        <div className="flex-shrink-0 p-2 rounded-full">
          <EIIcon>{icon}</EIIcon>
        </div>
        <div className="flex-grow">
          <div className="text-white font-extrabold text-xl">{label}</div>
        </div>
      </div>

      <div className="flex items-center text-ei-primary-faded text-sm">
        <span>{getValue}</span>
        {isCopyable && (
          <Copy
            className="min-w-5 min-h-5 ml-2"
            onClick={() => navigator.clipboard.writeText(value)}
          />
        )}
      </div>
    </div>
  );
}

export default InfoCard;
