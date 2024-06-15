"use client";
import React from "react";
import { classNames } from "@/utils/className";
import Background from "@/components/Svgs/bg/1/Background";
import { usePathname } from "next/navigation";
import InfoCard from "@/components/2.molecules/InfoCard/InfoCard";
import { IoWallet } from "react-icons/io5";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";

interface Props {}

function EngravePage({}: Props) {
  const path = usePathname();
  const address = path.split("/").at(2);

  const { showBanner } = useBanner();
  if (!address) {
    showBanner("Address not found");
    return new Error("Address not found");
  }
  console.log("path: ", path);
  return (
    <>
      <Background className="!w-full !h-full !absolute top-0 left-0 overflow-hidden !-z-10" />
      <div className={classNames("xl:px-80 lg:px-56 px-10 pt-28 font-manrope")}>
        <div>
          <div className="inline-block font-extrabold text-6xl mb-6 relative">
            <h3 className="z-10">Transaction Instruction</h3>
          </div>
          <div className="text-ei-primary-faded block mb-12">
            To proceed with your transaction, please send the required fees to
            the Bitcoin address below.
            <div className="font-bold">
              Make sure to transfer the exact amount specified
            </div>
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr]">
            <InfoCard
              icon={IoWallet({ size: "auto", color: "white" })}
              label="Bitcoin Address"
              value={address}
            />
            <div>and</div>
            <InfoCard
              icon={IoWallet({ size: "auto", color: "white" })}
              label="Required Fees:"
              value={address}
            />
          </div>

          <div className="text-ei-primary-faded text-sm mt-6">
            Cancel Engraving
          </div>
        </div>
      </div>
    </>
  );
}

export default EngravePage;
