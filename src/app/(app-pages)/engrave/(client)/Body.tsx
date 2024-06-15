"use client";
import Button from "@/components/1.atoms/Button/Button";
import Textarea from "@/components/1.atoms/Textarea/Textarea";
import FileInput from "@/components/2.molecules/FileInput/FileInput";
import ToggleGroup from "@/components/2.molecules/ToggleGroup/ToggleGroup";
import ThreeStars from "@/components/Svgs/ThreeStars";
import { useState } from "react";
import PasswordInput from "./PasswordInput";
import SelectionCards from "./SelectionCards";
import { startEngraving } from './../(logic)/api';
import { ToggleKeys } from './../(logic)/types';


const toggleButtons: {
  value: ToggleKeys;
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
  let [password, setPassword] = useState("");

  const [toggleKey, setToggleKey] = useState<ToggleKeys>(
    "encrypt"
  );


  const getPasswordInputClass = () =>
    toggleKey !== "encrypt" ? "hidden" : null;
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

          <PasswordInput
            onChange={(e) => setPassword(e.currentTarget.value)}
            password={password}
            className={`mt-8 ${getPasswordInputClass()}`}
          />

          <Button
            className={`!w-fit ${toggleKey === "encrypt" ? "mt-4" : "mt-16"}`}
            onClick={() => startEngraving(message, file, password, toggleKey)}
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
export default Body;
export type { ToggleKeys };