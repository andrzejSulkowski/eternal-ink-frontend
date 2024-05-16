import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  namePlaceholder: string;
  sizePlaceholder: string;
}

function LoadingFileBanner({ src, namePlaceholder, sizePlaceholder }: Props) {
  return (
    <div className="bg-[#09090A] border border-solid border-[#242438] flex justify-between w-full px-6 py-4 text-sm rounded-2xl">
      <div className="flex gap-3 opacity-30">
        <Image src={src} alt="File Info" width={40} height={40} draggable={false}/>
        <div className="flex flex-col h-full justify-between">
          <span className="font-bold text-white">{namePlaceholder}</span>
          <span className="text-primary-faded">
            {sizePlaceholder}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoadingFileBanner;
