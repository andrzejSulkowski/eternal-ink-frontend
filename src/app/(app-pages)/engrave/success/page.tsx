"use client";
import React, { useEffect, useState } from "react";
import { classNames } from "@/utils/className";
import Background from "@/components/Svgs/bg/1/Background";
import InfoCard from "@/components/2.molecules/InfoCard/InfoCard";
import { IoWallet } from "react-icons/io5";
import { useEngraving } from "./../(logic)/useContext";
import api from "@/libs/api/transaction";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import Button from "@/components/1.atoms/Button/Button";
import ThreeStars from "@/components/Svgs/ThreeStars";
import FileWarning from "@/components/Svgs/FileWarning";
import { trim } from "@/libs/transaction";
import { useRouter } from "next/navigation";
import { ApiResponse } from "@/libs/api/models";
import { useLoadingScreen } from "@/context/loadingScreenCtx";

interface Props {}

function EngravePage({}: Props) {
  const { engravingData, setEngravingData } = useEngraving();
  const { showBanner } = useBanner();
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const { showLoadingScreen, hideLoadingScreen } = useLoadingScreen();

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

  function extractPdf(response: ApiResponse<BlobPart>): File | undefined {
    if (response.ok && response.data) {
      const blob = new Blob([response.data], { type: response.type });
      const file = new File([blob], "certificate-eternal-ink.pdf", {
        type: "application/pdf",
      });
      return file;
    }
  }

  const router = useRouter();
  const retrieve = () => router.push("/retrieve/" + engravingData?.txId);
  const downloadCertificate = async () => {
    if (engravingData?.txId) {
      showLoadingScreen("Generating Certificate", 0, 1);
      const response = await api.getCertificate({ id: engravingData.txId });
      if (response.ok) {
        showLoadingScreen("Downloading Certificate", 1, 1);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      const pdf = extractPdf(response);
      if (pdf) {
        const url = URL.createObjectURL(pdf);
        const a = document.createElement("a");
        a.href = url;
        a.download = pdf.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setHasDownloaded(true);
      }
      hideLoadingScreen();
    }
  };

  useEffect(() => {
    initPage();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        retrieve();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [engravingData]);

  const RetrieveButton = () => (
    <Button className={`!w-fit mt-8`} onClick={retrieve}>
      Retrieve Tx
      <ThreeStars className="max-w-5 ml-2" />
    </Button>
  );

  const DownloadButton = () => (
    <Button
      className={`!w-fit justify-center mt-8 text-nowrap`}
      onClick={downloadCertificate}
    >
      Download Certificate
      <FileWarning className="max-w-5 ml-2" />
    </Button>
  );

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
        <div className="flex gap-8">
          {hasDownloaded ? (
            <>
              <DownloadButton />
              <RetrieveButton />
            </>
          ) : (
            <>
              <DownloadButton />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default EngravePage;
