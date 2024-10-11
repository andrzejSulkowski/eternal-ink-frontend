"use client";
import React, { useCallback, useEffect, useState } from "react";
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

function EngravePage() {
  const { engravingData, setEngravingData } = useEngraving();
  const { showBanner } = useBanner();
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const { showLoadingScreen, hideLoadingScreen } = useLoadingScreen();
  const router = useRouter();

  useEffect(() => {
    if (!engravingData) {
      showBanner("No engraving data found. Please start a new engraving.", {
        danger: true,
      });
      router.push("/");
    }
  }, [engravingData, showBanner, router]);

  const initPage = useCallback(async () => {
    if (engravingData?.address && !engravingData.txId) {
      const resp = await api.addrToTxId({ address: engravingData.address });
      if (resp.ok && resp.data) {
        setEngravingData({ ...engravingData, txId: resp.data.tx_id });
      } else {
        showBanner(
          "Oops! Something went wrong. Please backup your data and try again.",
          { danger: true, ms: 10000 }
        );
      }
    }
  }, [engravingData, setEngravingData, showBanner]);

  useEffect(() => {
    initPage();
  }, [initPage]);

  function extractPdf(response: ApiResponse<BlobPart>): File | undefined {
    if (response.ok && response.data) {
      const blob = new Blob([response.data], { type: response.type });
      const file = new File([blob], "certificate-eternal-ink.pdf", {
        type: "application/pdf",
      });
      return file;
    }
  }

  const retrieve = useCallback(() => {
    if (engravingData?.txId) {
      router.push("/retrieve/" + engravingData.txId);
    } else {
      showBanner("Transaction ID not available.", { danger: true });
    }
  }, [engravingData?.txId, router, showBanner]);

  const downloadCertificate = useCallback(async () => {
    if (engravingData?.txId) {
      showLoadingScreen("Generating Certificate", 0, 1);
      const response = await api.getCertificate({ id: engravingData.txId });
      if (response.ok) {
        showLoadingScreen("Downloading Certificate", 1, 1);
        await new Promise((resolve) => setTimeout(resolve, 500));
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
        } else {
          showBanner("Failed to process the certificate file.", {
            danger: true,
          });
        }
      } else {
        showBanner("Failed to download certificate.", { danger: true });
      }
      hideLoadingScreen();
    } else {
      showBanner("Transaction not found.", { danger: true });
      hideLoadingScreen();
    }
  }, [
    engravingData?.txId,
    extractPdf,
    showLoadingScreen,
    hideLoadingScreen,
    showBanner,
  ]);

  const RetrieveButton = (
    <Button className={`!w-fit mt-8`} onClick={retrieve}>
      Retrieve Tx
      <ThreeStars className="max-w-5 ml-2" />
    </Button>
  );

  const DownloadButton = (
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
            Your transaction has been successfully completed. You can now
            download your certificate or retrieve your transaction details.
          </span>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8">
          <InfoCard
            icon={<IoWallet color="white" />}
            label="Transaction Id:"
            value={engravingData?.txId ? trim(engravingData.txId) : "-"}
          />
        </div>
        <div className="flex gap-8">
          {DownloadButton}
          {hasDownloaded && RetrieveButton}
        </div>
      </div>
    </>
  );
}

export default EngravePage;
