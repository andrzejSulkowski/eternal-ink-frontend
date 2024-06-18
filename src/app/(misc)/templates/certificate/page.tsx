import React from "react";
import { classNames } from "@/utils/className";
import QrCode from "@/app/(misc)/templates/certificate/parts/QrCode";
import Signature from "@/app/(misc)/templates/certificate/parts/Signature";
import FooterData from "@/app/(misc)/templates/certificate/parts/FooterData";

interface Props {}

function index({}: Props) {
  return (
    <div
      className={classNames(
        "font-manrope flex flex-col px-[41px] pb-10 relative w-full h-full bg-[#09090A]"
      )}
    >
      {/* Header */}
      <div className="mt-[84px] w-full flex flex-col items-center gap-5 z-10">
        <div className="flex items-center justify-center bg-[#F7931A]/20 px-3 py-1 gap-1 w-fit rounded-3xl font-semibold text-xs">
          Bitcoin Blockchain
          {/* W: 132 H: 132 */}
          <img
            className="aspect-square h-[2ch]"
            src="/certificate/assets/btc.png"
            alt="bitcoin blockchain"
          />
        </div>
        <h1 className="font-extrabold text-[32px] text-center leading-[3.5rem]">
          Blockchain Engraving Certificate
        </h1>
      </div>

      {/* Content */}
      <div className="flex w-full flex-col items-center z-10 mt-[120px]">
        <span data-engraved-type className="text-ei-primary-faded text-xs">
          Engraved Message/FileHash
        </span>
        <h2 data-engraved-data className="font-extrabold text-[44px]">
          Hello, World!
        </h2>

        <div className="flex mt-8 gap-8 items-center">
          {/* QR-Code */}
          <QrCode />
          {/* Signature */}
          <Signature />
        </div>
      </div>

      {/* Footer */}
      <FooterData className="mt-auto" />

      {/* Background */}
      <div>
        <img
          className="absolute top-0 left-0"
          src="/certificate/assets/planet.png"
          alt="planet"
        />
        {/* Ball Right */}
        <img
          className="absolute top-[-80px] right-[-340px]"
          src="/certificate/assets/ball_1.png"
          alt="ball"
        />

        {/* Ball Left Top */}
        <img
          className="absolute top-0 left-[-50%] blur-3xl w-2/3"
          src="/certificate/assets/ball.png"
          alt="ball"
        />

        {/* Ball Left Bottom */}
        <img
          alt="ball"
          className="absolute bottom-[8%] left-[-10.5%] w-[100px] blur-[2px]"
          src="/certificate/assets/ball.png"
        />
      </div>
    </div>
  );
}

export default index;
