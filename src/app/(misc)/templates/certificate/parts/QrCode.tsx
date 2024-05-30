import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {}

function QrCode({ className }: Props) {
  return (
    <div className={classNames("", className)}>
      <div className="w-[128px] h-[128px] p-5 border border-solid border-ei-primary-light rounded-2xl">
        <img src="/certificate/assets/qr_code.png" alt="qr-code" />
      </div>
    </div>
  );
}

export default QrCode;
