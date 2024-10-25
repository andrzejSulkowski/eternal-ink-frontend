import React from "react";
import { classNames } from "@/utils/className";
import Label from "@/components/1.atoms/Tag/Tag";
import Body from "./(cmp)/Body";
import Background from "@/components/Svgs/bg/1/Background";

interface Props {}

function EngravePage({}: Props) {
  return (
    <>
      <Background className="!w-full !h-full !absolute top-0 left-0 overflow-hidden !-z-10" />
      <div className={classNames("xl:px-80 lg:px-56 px-10 pt-28 font-manrope")}>
        <div>
          <div className="inline-block font-extrabold text-6xl mb-6 relative">
            <h3 className="z-10 text-7xl md:text-5xl">Eternalize Your Words</h3>
            <Label className="absolute -top-5 -right-24 w-auto h-8 lg:text-sm text-xl -z-10">
              On the Bitcoin Blockchain
            </Label>
          </div>
          <span className="text-ei-primary-faded block mb-12 md:text-base text-2xl">
            Secure, permanent, and unforgettable- engrave your message on the
            Bitcoin Blockchain
          </span>
        </div>
        <Body />
      </div>
    </>
  );
}

export default EngravePage;
