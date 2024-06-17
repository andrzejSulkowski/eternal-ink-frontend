import React from "react";
import { classNames } from "@/utils/className";
import Background from "@/components/Svgs/bg/1/Background";
import InfoCard from "@/components/2.molecules/InfoCard/InfoCard";
import { IoWallet } from "react-icons/io5";
import { useEngraving } from "./../(logic)/useContext";

interface Props {}

function EngravePage({}: Props) {
    const { engravingData } = useEngraving();

  return (
    <>
      <Background className="!w-full !h-full !absolute top-0 left-0 overflow-hidden !-z-10" />
      <div className={classNames("xl:px-80 lg:px-56 px-10 pt-28 font-manrope")}>
        <div>
          <div className="inline-block font-extrabold text-6xl mb-6 relative">
            <h3 className="z-10">Transaction Completed</h3>
          </div>
          <span className="text-ei-primary-faded block mb-12">
          Urna rhoncus dui tortor varius cras ac dui. Mattis vitae egestas
              scelerisque non. Tempus facilisis sit ut varius congue aliquam
              pellentesque odio. Purus cras varius tortor praesent a. Id quam
              fusce vel lacus elit volutpat.
          </span>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8">
            <InfoCard
              icon={IoWallet({ color: "white" })}
              label="Bitcoin Address"
              value={engravingData?.address ?? "-"}
            />
            <div className="h-full flex items-center font-bold text-sm">
              and
            </div>
            <InfoCard
              icon={IoWallet({ color: "white" })}
              label="Transaction Id:"
              value={engravingData?.txId ?? "-"}
            />
          </div>
      </div>
    </>
  );
}

export default EngravePage;
