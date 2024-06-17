"use client";
import React, { useEffect } from "react";
import { classNames } from "@/utils/className";
import Background from "@/components/Svgs/bg/1/Background";
import InfoCard from "@/components/2.molecules/InfoCard/InfoCard";
import { IoWallet } from "react-icons/io5";
import { useEngraving } from "./../(logic)/useContext";
import api from "@/libs/api/transaction";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import Button from "@/components/1.atoms/Button/Button";
import ThreeStars from "@/components/Svgs/ThreeStars";
import { trim } from "@/libs/transaction";

interface Props {}

function EngravePage({}: Props) {
  const { engravingData, setEngravingData } = useEngraving();
  const { showBanner } = useBanner();
  async function initPage() {
    if (engravingData?.address) {
      const resp = await api.addrToTxId({ address: engravingData.address });
      if (resp.ok) {
        setEngravingData({ ...engravingData, txId: resp.data!.tx_id });
      } else {
        showBanner(
          "Ups Something went wrong! Please Backup your data and try again.",
          { danger: true, ms: 10000 }
        );
      }
    } else {
      showBanner(
        "Ups Something went wrong! Please Backup your data and try again.",
        { danger: true, ms: 10000 }
      );
    }
  }

  function retrieve() {}

  useEffect(() => {
    initPage();
  }, []);

  return (
    <>
      <Background className="!w-full !h-full !absolute top-0 left-0 overflow-hidden !-z-10" />
      <div className={classNames("xl:px-80 lg:px-56 px-10 pt-28 font-manrope")}>
        <div>
          <div className="inline-block font-extrabold text-6xl mb-6 relative">
            <h3 className="z-10">Transaction Completed!</h3>
          </div>
          <span className="text-ei-primary-faded block mb-12 w-2/3">
            Urna rhoncus dui tortor varius cras ac dui. Mattis vitae egestas
            scelerisque non. Tempus facilisis sit ut varius congue aliquam
            pellentesque odio. Purus cras varius tortor praesent a. Id quam
            fusce vel lacus elit volutpat.
          </span>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8">
          <InfoCard
            icon={IoWallet({ color: "white" })}
            label="Transaction Id:"
            value={engravingData?.txId ? trim(engravingData.txId) : "-"}
          />
        </div>
        <Button className={`!w-fit mt-8`} onClick={retrieve}>
          Go Retrieve
          <ThreeStars className="max-w-5 ml-2" />
        </Button>
      </div>
    </>
  );
}

export default EngravePage;
