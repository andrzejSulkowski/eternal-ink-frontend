"use client";
import React, { useEffect, useMemo } from "react";
import { classNames } from "@/utils/className";
import Background from "@/components/Svgs/bg/1/Background";
import { usePathname, useRouter } from "next/navigation";
import InfoCard from "@/components/2.molecules/InfoCard/InfoCard";
import { IoWallet } from "react-icons/io5";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import { useEngraving } from "@/app/(app-pages)/engrave/(logic)/useContext";
import { useLoadingScreen } from "@/context/loadingScreenCtx";
import { useSseStream } from "./(logic)/useSseStream";
import { useWindow } from "@/hooks/useWindow";
import CONFIG from "@/libs/config";
import { trim } from "@/libs/transaction";
import api from "@/libs/api/transaction";
import { TxStatus } from "@/models";

interface Props {}

function EngravePage({}: Props) {
  const { showBanner } = useBanner();
  const { showLoadingScreen, hideLoadingScreen, state } = useLoadingScreen();
  const { engravingData, setEngravingData } = useEngraving();

  useEffect(() => {
    if (!engravingData) {
      api.retrieveTx({ id: address }).then((resp) => {
        if (resp.data) {
          setEngravingData({
            address: resp.data.address,
            fees: resp.data.fees,
            message: resp.data.message,
            isPublic: resp.data.is_public,
            isEncrypted: resp.data.is_encrypted,
            state: resp.data.status,
            txId: resp.data.tx_id ? resp.data.tx_id : undefined,
          });
        }
      });
    }
  }, []);

  const fees = useMemo(() => {
    if (engravingData?.fees) {
      return engravingData?.fees;
    }
  }, [engravingData?.fees]);
  const path = usePathname();
  const router = useRouter();
  const { window, runFn } = useWindow();

  const displayFees = useMemo(() => {
    if (engravingData?.fees) {
      return engravingData?.fees.toString() + " SAT";
    }
    return "- SAT";
  }, [engravingData?.fees]);

  const address = path.split("/")[2];
  const { startListening, updateLoadingScreen } = useSseStream(address, {
    onCompleted: () => router.push("/engrave/success/"),
    onError: () => {},
  });

  if (!address) {
    showBanner("Address not found");
    return new Error("Address not found");
  }

  function cancel() {
    showLoadingScreen("Cancelling Engraving...", 1, 2);
    setTimeout(() => {
      hideLoadingScreen();
    }, 4000);
    throw new Error("API Not implemented!");
  }

  useEffect(() => {
    if (CONFIG.MOCK_API) {
      // console.warn("✭ To simulate a transaction, run window.mock.engrave() in the console");
      runFn((window) => {
        window.mock = window.mock || {};
        window.mock.engrave = () => {
          startListening();
        };
      });
    } else {
      api.getTxStatus({ id: address }).then((resp) => {
        if (resp.data) {
          const { status } = resp.data;
          if (
            status === TxStatus.Finalized ||
            status === TxStatus.ExternalConfirmed
          ) {
            router.push("/retrieve/" + address);
          } else if (status !== TxStatus.WaitingForFunds) {
            updateLoadingScreen(status);
          }
        }
        startListening();
      });
    }
  }, []);

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
          <div className="grid grid-cols-[1fr_auto_1fr] gap-8">
            <InfoCard
              icon={IoWallet({ color: "white" })}
              label="Bitcoin Address:"
              value={engravingData?.address ? engravingData.address : "-"}
              displayValue={
                engravingData?.address ? trim(engravingData.address) : "-"
              }
            />
            <div className="h-full flex items-center font-bold text-sm">
              and
            </div>
            <InfoCard
              icon={IoWallet({ color: "white" })}
              label="Required Fees:"
              value={fees ? fees.toString() : "-"}
              displayValue={displayFees}
            />
          </div>

          <div
            className="text-ei-primary-faded text-sm mt-12 hover:underline cursor-pointer"
            onClick={cancel}
          >
            Cancel Engraving
          </div>
        </div>
      </div>
    </>
  );
}

export default EngravePage;
