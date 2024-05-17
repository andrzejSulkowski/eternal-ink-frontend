import React, { useMemo } from "react";
import Avatar from "@/components/Avatar/Avatar";

interface Props {
  address: string;
  txHash: string;
  onClick: (id: string) => void;
}

function Tick({ address, txHash, onClick }: Props) {
  const formattedAddress = useMemo(() => {
    return `${address.slice(0, 4)}...${address.slice(address.length - 4)}`;
  }, [address]);
  const formattedTxHash = useMemo(() => {
    return `${txHash.slice(0, 9)}...${txHash.slice(txHash.length - 9)}`;
  }, [txHash]);

  return (
    <div className="flex text-white items-center h-8 gap-3 text-xs">
      <Avatar address={address} />
      <span
        onClick={() => onClick(address)}
        className="font-bold hover:underline cursor-pointer"
      >
        {formattedAddress}
      </span>
      <span className="text-white/60">engraved message into</span>
      <span
        onClick={() => onClick(txHash)}
        className="font-bold hover:underline cursor-pointer"
      >
        {formattedTxHash}
      </span>
    </div>
  );
}

export default Tick;
