import React, { useMemo } from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import EIIcon from "@/components/1.atoms/EIIcon/EIIcon";
import Copy from "@/components/Svgs/Copy";
import { trim } from "@/libs/transaction";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";

interface Props extends EIProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  displayValue?: string;
  isCopyable?: boolean;
}

function InfoCard({
  className,
  icon,
  label,
  value,
  displayValue,
  isCopyable = true,
}: Props) {
  const getValue = useMemo(
    () => (displayValue ? displayValue : value),
    [value, displayValue]
  );
  const { showBanner } = useBanner();

  function copy() {
    navigator.clipboard.writeText(value);
    showBanner("Copied to clipboard", { danger: false, ms: 4500 });
  }
  return (
    <div
      className={classNames(
        "flex md:flex-row flex-col md:items-end md:justify-between px-6 py-8 bg-black rounded-2xl md:space-x-4 font-manrope w-full items-start justify-start gap-8 md:gap-0",
        className
      )}
    >
      <div className="flex flex-col h-full gap-8">
        <div className="flex-shrink-0 p-2 rounded-full">
          <EIIcon>{icon}</EIIcon>
        </div>
        <div className="md:flex-grow">
          <div className="text-white font-extrabold md:text-xl text-2xl">
            {label}
          </div>
        </div>
      </div>

      <div className="flex md:items-center text-ei-primary-faded text-sm">
        <span className="text-nowrap md:text-base text-xl">{getValue}</span>
        {isCopyable && <Copy className="min-w-5 min-h-5 ml-2" onClick={copy} />}
      </div>
    </div>
  );
}

export default InfoCard;
