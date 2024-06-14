"use client";
import Button from "@/components/1.atoms/Button/Button";
import Textarea from "@/components/1.atoms/Textarea/Textarea";
import FileInput from "@/components/2.molecules/FileInput/FileInput";
import SelectionCard from "@/components/2.molecules/SelectionCard/SelectionCard";
import ToggleGroup from "@/components/2.molecules/ToggleGroup/ToggleGroup";
import ThreeStars from "@/components/Svgs/ThreeStars";
import ThreeRoad from "@/components/Svgs/ThreeRoad";
import Fi from "@/components/Svgs/Fi";
import Cube from "@/components/Svgs/Cube";
import { useState } from "react";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import api from '@/libs/api/transaction/index'


const toggleButtons = [
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

  let toggleKey = "public";


  const { showBanner } = useBanner();
  const startEngraving = async () => {
    if (message.length === 0 && file === null) {
      showBanner("Please enter a message or upload a file")
      return;
    }

    const response = await api.postRequestEngraving({
      chain: "btc",
      message: message,
      is_file: file !== null,
      is_encrypted: toggleKey === "encrypt",
      is_public: toggleKey === "public"
    });
    if(response.ok){
      const data = response.data!;
      showBanner("Success");
      console.log("Success: ", data)
    }else{
      const error = response.error!;
      showBanner(`Error: ${error.type} - type: ${error.detail}`)
      console.warn("Error: ", error);
    }
  }

  return (
    <>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-8 font-manrope">
        <div className="w-full">
          <span className="font-bold text-sm block mb-4">
            Enter Your Message
          </span>
          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={(v) => setMessage(v.currentTarget.value)}
            className="w-full h-40 p-4"
          />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="font-bold text-sm block">or</div>
        </div>
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
      </div>
      <div className="text-ei-primary-faded">Message Publicity Options:</div>
      <ToggleGroup
        className="mt-4"
        buttons={toggleButtons}
        onChange={(key) => (toggleKey = key)}
      />

      <Button className="!w-fit mt-10" onClick={startEngraving}>
        Start Engraving Magic
        <ThreeStars className="max-w-5 ml-2" />
      </Button>

      <div className="w-full bg-[#09090A] p-8 grid grid-cols-3 mt-28 gap-12 rounded-[20px]">
        <SelectionCard
          icon={Cube()}
          title="Create Your Message"
          description="Start by crafting the message you wish to immortalize on the Bitcoin Blockchain"
        />
        <SelectionCard
          icon={Fi()}
          title="Engrave Your Message"
          description="Start by crafting the message you wish to immortalize on the Bitcoin Blockchain"
        />
        <SelectionCard
          icon={ThreeRoad()}
          title="Retrieve & Share"
          description="Share your message with the world via our live ticker or opt for a secretive touch with password protected encryption"
        />
      </div>
    </>
  );
}
export default Body;
