"use client";
import Button from "@/components/1.atoms/Button/Button";
import Textarea from "@/components/1.atoms/Textarea/Textarea";
import FileInput from "@/components/2.molecules/FileInput/FileInput";
import ToggleGroup from "@/components/2.molecules/ToggleGroup/ToggleGroup";
import ThreeStars from "@/components/Svgs/ThreeStars";
import { useCallback, useMemo, useState } from "react";
import PasswordInput from "./PasswordInput";
import SelectionCards from "./SelectionCards";
import { ToggleKeys } from "./../(logic)/types";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import { useRouter } from "next/navigation";
import { useEngraving } from "@/app/(app-pages)/(flow)/engrave/(logic)/useContext";
import { TxStatus } from "@/models/transaction";
import { useIsMobile } from "@/hooks/useIsMobile";

const MAX_BYTES = 80;

function Body() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [bytes, setBytes] = useState(0);
  const isMobile = useIsMobile();

  const toggleButtons = useMemo<
    Array<{ value: ToggleKeys; label: string; disabled: boolean }>
  >(() => {
    return [
      {
        value: "public",
        label: "Make public",
        disabled: file !== null,
      },
      {
        value: "encrypt",
        label: "Encrypt",
        disabled: file !== null,
      },
      {
        value: "neither",
        label: "Neither",
        disabled: false,
      },
    ];
  }, [file]);

  const updateMessage = (v: string) => {
    const uInt = textEncoder.encode(v);
    if (uInt.length > MAX_BYTES) {
      banner.showBanner("Message is too long", { danger: true });
    } else {
      setBytes(uInt.length);
      setMessage(v);
    }
  };

  const [toggleKey, setToggleKey] = useState<ToggleKeys>("public");
  const banner = useBanner();
  const { setEngravingData } = useEngraving();

  const router = useRouter();
  const textEncoder = new TextEncoder();
  const engrave = useCallback(async () => {
    const t = textEncoder.encode(message);
    if (t.length > 80) {
      banner.showBanner("Message is too long", { danger: true });
      return;
    }
    setEngravingData({
      address: "",
      fees: 0,
      message,
      isPublic: toggleKey === "public",
      isEncrypted: toggleKey === "encrypt",
      state: TxStatus.WaitingForFunds,
      txId: undefined,
      temp: {
        file,
        password,
        toggleKey,
      },
    });

    router.push(`/engrave/certificate-contact`);
  }, [message, file, password, toggleKey, banner, setEngravingData, router]);

  if (isMobile) {
    return (
      <div className="flex flex-col justify-between min-h-full">
        <div className="grid md:grid-cols-[1fr_auto_1fr] grid-rows-[1fr_auto_1fr] gap-6 font-manrope">
          {/* Row1 */}
          <div data-col1 className="w-full">
            <span className="font-bold lg:text-sm text-xl block mb-4">
              Enter Your Message
            </span>
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(v) => updateMessage(v.currentTarget.value)}
              className="w-full h-40 p-4"
              isDisabled={file !== null}
            />
            <span className="text-ei-primary-faded md:text-base text-xl">
              Available Bytes: {MAX_BYTES - bytes}
            </span>
            {/* Toggle Group + Password Input */}
            <div className="w-full">
              <div className="text-ei-primary-faded text-2xl mt-4 mb-3">
                Message Publicity Options:
              </div>
              <ToggleGroup
                className=""
                buttons={toggleButtons}
                value={toggleKey}
                onChange={(key) => setToggleKey(key as any)}
              />
              <PasswordInput
                onChange={(e) => setPassword(e.currentTarget.value)}
                password={password}
                className={`mt-8 ${toggleKey !== "encrypt" ? "hidden" : null}`}
              />
            </div>
          </div>

          {/* Row2 */}
          <div className="w-full h-full flex md:justify-center items-center">
            <div className="font-bold text-2xl lg:text-sm block">or</div>
          </div>

          {/* Row3 */}
          <div className="w-full max-w-full">
            <FileInput
              allowedMimeTypes={[
                "image/jpeg",
                "image/jpg",
                "image/png",
                "image/webp",
                "application/pdf",
                "application/vnd.ms-excel",
                "application/zip",
              ]}
              onInput={setFile}
              file={file}
            />
          </div>
          {/* Col1Row1 */}
          <div className="w-full mb-16">
            <Button
              className={`md:!w-fit justify-center md:justify-start ${toggleKey === "encrypt" ? "my-4" : "md:mt-16"}`}
              onClick={engrave}
            >
              Start Engraving Magic
              <ThreeStars className="max-w-5 ml-2" />
            </Button>
          </div>
        </div>

        <SelectionCards />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-between min-h-full">
        <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-2 gap-6 font-manrope">
          {/* Cols1 */}
          <div data-col1 className="w-full">
            <span className="font-bold text-sm block mb-4">
              Enter Your Message
            </span>
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(v) => updateMessage(v.currentTarget.value)}
              className="w-full h-40 p-4"
              isDisabled={file !== null}
            />
            <span className="text-ei-primary-faded text-base ">
              Available Bytes: {MAX_BYTES - bytes}
            </span>
            {/* Toggle Group + Password Input */}
          </div>
          {/* Col2 */}
          <div className="w-full h-full flex justify-center items-center">
            <div className="font-bold text-sm block">or</div>
          </div>
          {/* Col3 */}
          <div className="w-full max-w-full">
            <FileInput
              allowedMimeTypes={[
                "image/jpeg",
                "image/jpg",
                "image/png",
                "image/webp",
                "application/pdf",
                "application/vnd.ms-excel",
                "application/zip",
              ]}
              onInput={setFile}
              file={file}
            />
          </div>
          {/* Col1Row1 */}
          <div className="w-full">
            <div className="text-ei-primary-faded mb-2">
              Message Publicity Options:
            </div>
            <ToggleGroup
              className=""
              buttons={toggleButtons}
              value={toggleKey}
              onChange={(key) => setToggleKey(key as any)}
            />

            <PasswordInput
              onChange={(e) => setPassword(e.currentTarget.value)}
              password={password}
              className={`mt-8 ${toggleKey !== "encrypt" ? "hidden" : null}`}
            />

            <Button
              className={`!w-fit ${toggleKey === "encrypt" ? "my-4" : "mt-16"}`}
              onClick={engrave}
            >
              Start Engraving Magic
              <ThreeStars className="max-w-5 ml-2" />
            </Button>
          </div>
        </div>

        <SelectionCards />
      </div>
    );
  }
}
export default Body;
export type { ToggleKeys };
