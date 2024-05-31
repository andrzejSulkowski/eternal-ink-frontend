import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import Image from "next/image";

interface Props extends EIProps {}

function QrCode({ className }: Props) {
  return (
    <div className={classNames("", className)}>
      <div
        data-qr-code
        className="w-[128px] h-[128px] p-5 border border-solid border-ei-primary-light rounded-2xl"
      >
        <Image
          width={100}
          height={100}
          src="/certificate/assets/qr_code.png"
          alt="qr-code"
        />
      </div>
    </div>
  );
}

export default QrCode;
