"use client";
import Button from "@/components/1.atoms/Button/Button";
import Label from "@/components/1.atoms/Tag/Tag";
import ThreeStars from "@/components/Svgs/ThreeStars";
import Background from "@/components/Svgs/bg/1/Background";
import { classNames } from "@/utils/className";
import RetrievedMessage from "@/components/2.molecules/RetrievedMessage/RetrievedMessage";
import ProtectedTx from "./(cmp)/ProtectedTx";
import FileTx from "./(cmp)/FileTx";
import { useCallback, useEffect, useState } from "react";
import { TxStatus } from "@/models";
import Input from "@/components/1.atoms/Input/Input";
import { usePathname, useRouter } from "next/navigation";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import api from "@/libs/api/transaction";
import { GetTxInfoResponse } from "@/libs/api/models";

function RetrievePage() {
  const path = usePathname();
  const initialTxId = path.split("/")[2];
  const [txId, setTxId] = useState<string | undefined>(initialTxId);
  const [status, setStatus] = useState<TxStatus | undefined>();
  const [message, setMessage] = useState<string>("");
  const [txInfo, setTxInfo] = useState<GetTxInfoResponse | null>(null);
  const router = useRouter();

  const { showBanner } = useBanner();
  useEffect(() => {
    setTxId(initialTxId);
  }, [initialTxId]);

  const decodeBase64 = (data: string, encoding: "utf8" | "hex") => {
    const binaryString = window.atob(data);
    const bytes = Uint8Array.from(binaryString, (char) => char.charCodeAt(0));
    if (encoding === "utf8") {
      const decoder = new TextDecoder("utf-8");
      return decoder.decode(bytes);
    } else {
      return Array.from(bytes)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    }
  };

  useEffect(() => {
    if (!txInfo) return;

    setStatus(txInfo.status);
    if (txInfo.is_encrypted) {
      setMessage(txInfo.data);
    } else if (txInfo.is_file) {
      const fileHashHex = decodeBase64(txInfo.data, "hex");
      setMessage(fileHashHex);
    } else {
      const decodedMessage = decodeBase64(txInfo.data, "utf8");
      setMessage(decodedMessage);
    }
  }, [txInfo]);

  const retrieve = useCallback(async () => {
    if (!txId) {
      showBanner("Transaction ID not found");
      return;
    }
    try {
      const response = await api.retrieveTx({ id: txId });
      console.log("engraving data response", response);
      if (response.ok && response.data) {
        setTxInfo(response.data);
      } else {
        if (response.status_code === 404) {
          showBanner("Transaction not found");
        } else {
          showBanner("Error retrieving message");
        }
      }
    } catch (error) {
      showBanner("An error occurred while retrieving the transaction");
      console.error(error);
    }
  }, [txId, showBanner]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        retrieve();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [retrieve]);

  return (
    <>
      <Background className="!w-full !h-full !absolute top-0 left-0 overflow-hidden !-z-10" />
      <div className={classNames("xl:px-80 lg:px-56 px-10 pt-28 font-manrope")}>
        <div>
          <div className="inline-block font-extrabold text-6xl mb-6 relative">
            <h3 className="z-10">Retrieve your Message</h3>
            <Label className="absolute -top-5 -right-24 w-auto h-8 text-sm -z-10">
              Simple Dimple
            </Label>
          </div>
          <span className="text-ei-primary-faded block mb-12 w-1/2">
            Egestas etiam posuere ultrices volutpat in dolor in. Cursus auctor
            tincidunt volutpat sem amet. Penatibus tempus sed.
          </span>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 font-manrope">
          {/* Column 1 */}
          <div data-col1 className="w-full min-w-full">
            <span className="font-bold text-sm block mb-4">
              Enter Transaction ID
            </span>
            <Input
              className="!bg-[#09090A]"
              placeholder="Transaction ID"
              value={txId || ""}
              onChange={(e) => setTxId(e.target.value)}
            />
            {!txInfo && (
              <Button
                className={`!w-1/3 mt-8 !justify-center`}
                onClick={retrieve}
              >
                Retrieve
                <ThreeStars className="max-w-5 ml-2" />
              </Button>
            )}
            {txInfo?.is_encrypted && (
              <ProtectedTx encryptedBase64={message} onEncrypted={setMessage} />
            )}
            {txInfo?.is_file && <FileTx base64EncodedFileHash={txInfo.data} />}
          </div>
          {/* Column 2 */}
          <div className="w-full h-full flex justify-center items-center">
            <div className="font-bold text-sm block"> = </div>
          </div>
          {/* Column 3 */}
          <div className="w-full max-w-full flex flex-col min-w-0">
            <span className="font-bold text-sm block mb-4 w-fit">
              Your Result
            </span>
            <RetrievedMessage status={status} message={message} txId={txId} />
          </div>
        </div>
      </div>
    </>
  );
}
export default RetrievePage;
