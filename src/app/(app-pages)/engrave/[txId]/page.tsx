'use client';
import React from "react";
import { classNames } from "@/utils/className";
import Background from "@/components/Svgs/bg/1/Background";
import { usePathname } from "next/navigation";

interface Props {}

function EngravePage({}: Props) {
    const path = usePathname();
  return (
    <>
      <Background className="!w-full !h-full !absolute top-0 left-0 overflow-hidden !-z-10" />
      <div className={classNames("xl:px-80 lg:px-56 px-10 pt-28 font-manrope")}>
        <div>
          <div className="inline-block font-extrabold text-6xl mb-6 relative">
            <h3 className="z-10">Transaction Instruction</h3>
          </div>
          <div className="text-ei-primary-faded block mb-12">
            To proceed with your transaction, please send the required fees to the Bitcoin address below.
            <div className="font-bold">Make sure to transfer the exact amount specified</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EngravePage;
