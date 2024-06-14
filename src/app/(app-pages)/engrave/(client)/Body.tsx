"use client";
import Button from "@/components/1.atoms/Button/Button";
import Textarea from "@/components/1.atoms/Textarea/Textarea";
import FileInput from "@/components/2.molecules/FileInput/FileInput";
import ToggleGroup from "@/components/2.molecules/ToggleGroup/ToggleGroup";
import ThreeStars from "@/components/Svgs/ThreeStars";
import { useEffect, useState } from "react";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import api from "@/libs/api/transaction/index";
import Input from "@/components/1.atoms/Input/Input";
import PasswordInput from "./PasswordInput";
import SelectionCards from "./SelectionCards";

const toggleButtons: {
  value: "encrypt" | "public" | "neither";
  label: string;
}[] = [
  {
    value: "public",
    label: "Make public",
  },
  {
    value: "encrypt",
    label: "Encrypt",
  },
  {
    value: "neither",
    label: "Neither",
  },
];

function Body() {
  let [message, setMessage] = useState("");
  let [file, setFile] = useState<File | null>(null);

  const [toggleKey, setToggleKey] = useState<"encrypt" | "public" | "neither">(
    "encrypt"
  );
  useEffect(() => {
    console.log("toggleKey: ", toggleKey);
  }, [toggleKey]);

  const { showBanner } = useBanner();
  const startEngraving = async () => {
    if (message.length === 0 && file === null) {
      showBanner("Please enter a message or upload a file");
      return;
    }

    const response = await api.postRequestEngraving({
      chain: "btc",
      message: message,
      is_file: file !== null,
      is_encrypted: toggleKey === "encrypt", //TODO: If its encrypted, we need to send a password to the server as well!
      is_public: toggleKey === "public",
    });
    if (response.ok) {
      const data = response.data!;
      showBanner("Success");
      console.log("Success: ", data);
    } else {
      const error = response.error!;
      showBanner(`Error: ${error.type} - type: ${error.detail}`);
      console.warn("Error: ", error);
    }
  };

  const getPasswordInputClass = () =>
    toggleKey !== "encrypt" ? 'hidden' : null
  return (
    <div className="flex  flex-col justify-between min-h-full">
      <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-2 gap-8 font-manrope">
        {/* Cols1 */}
        <div data-col1 className="w-full">
          <span className="font-bold text-sm block mb-4">
            Enter Your Message
          </span>
          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={(v) => setMessage(v.currentTarget.value)}
            className="w-full h-40 p-4"
          />
          {/* Toggle Group + Password Input */}
          <div className="text-ei-primary-faded">
            Message Publicity Options:
          </div>
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
            ]}
            onInput={setFile}
            file={file}
          />
        </div>
        {/* Col1Row1 */}
        <div className="w-full">
          <ToggleGroup
            className=""
            buttons={toggleButtons}
            value={toggleKey}
            onChange={(key) => setToggleKey(key as any)}
          />

          <PasswordInput className={`mt-8 ${getPasswordInputClass()}`} />

          <Button className={`!w-fit ${toggleKey === 'encrypt' ? 'mt-4' : 'mt-16'}`} onClick={startEngraving}>
            Start Engraving Magic
            <ThreeStars className="max-w-5 ml-2" />
          </Button>
        </div>
      </div>

            <SelectionCards/>
    </div>
  );
}
export default Body;
