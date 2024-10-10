import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  name: string;
  size: { value: number; unit: string };
  onRemove: () => void;
}

function FileBanner({ src, name, size, onRemove }: Props) {
  return (
    <div className="bg-[#09090A] border border-solid border-[#242438] flex justify-between w-full px-6 py-4 text-sm rounded-2xl">
      <div className="flex gap-3">
        <Image
          src={src}
          alt="File Info"
          width={40}
          height={40}
          draggable={false}
          objectFit="cover"
        />
        <div className="flex flex-col h-full justify-between">
          <span className="font-bold text-white">{name}</span>
          <span className="text-ei-primary-faded">
            {size.value + " " + size.unit.toUpperCase()}
          </span>
        </div>
      </div>
      <button onClick={onRemove} className="text-ei-danger font-normal">
        Remove
      </button>
    </div>
  );
}

export default FileBanner;
