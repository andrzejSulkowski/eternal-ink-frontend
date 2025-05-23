import React, { useMemo } from "react";
import Avatar from "@/components/1.atoms/Avatar/Avatar";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

export interface Props extends EIProps<string> {
  address: string;
  txHash: string;
  onClick: (id: string) => void;
  data?: string;
}

function Tick({ address, txHash, onClick, className, data }: Props) {
  const formattedTxHash = useMemo(() => {
    return `${txHash.slice(0, 9)}...${txHash.slice(txHash.length - 9)}`;
  }, [txHash]);

  return (
    <div
      className={classNames(
        "flex text-white items-center h-8 gap-3 text-2xl md:text-xs",
        className
      )}
    >
      <div className="flex h-full gap-2 p-1">
        <Avatar address={address} />
      </div>

      <span className="text-white/60 text-nowrap">message:</span>
      <span
        onClick={() => onClick(txHash)}
        className="font-bold hover:underline cursor-pointer"
      >
        {data ?? formattedTxHash}
      </span>
    </div>
  );
}

export default Tick;
