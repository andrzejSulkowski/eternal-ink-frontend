"use client";
import Textarea from "@/components/1.atoms/Textarea/Textarea";
import FileInput from "@/components/2.molecules/FileInput/FileInput";
import { useState } from "react";

function Body() {
  let [message, setMessage] = useState("");
  let [file, setFile] = useState<File | null>(null);

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-8 font-manrope">
      <div className="w-full">
        <span className="font-bold text-sm block mb-4">Enter Your Message</span>
        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={(v) => setMessage(v.currentTarget.value)}
          className="w-full h-40 p-4"
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="font-bold text-sm block">or/and</div>
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
        />
      </div>
      {/* 


 */}
    </div>
  );
}
export default Body;
