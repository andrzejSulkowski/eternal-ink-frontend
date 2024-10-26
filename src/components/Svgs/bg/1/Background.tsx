import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import Gradient1 from "@/components/Svgs/bg/parts/Gradient1";
import Image from "next/image";

interface Props extends EIProps {}

function PlanetLayout({ className }: Props) {
  return (
    <div
      className={classNames("w-svw h-svh absolute overflow-hidden", className)}
    >
      <div className="w-full h-full">
        {/* <TypeOne className="absolute top-0 left-0" /> */}
        <Gradient1 className="absolute top-0 left-0 blur-2xl opacity-50" />
        {/* Ball One */}
        <Image
          width={100}
          height={100}
          className="absolute bottom-[25%] left-[-2%] w-[10%] blur"
          src="/certificate/assets/ball.webp"
          alt="ball"
        />

        {/* Ball Two */}
        <Image
          width={100}
          height={100}
          className="absolute top-[4%] right-[10%] w-[12%] blur-xl"
          src="/certificate/assets/ball.webp"
          alt="ball"
        />

        <Image
          width={100}
          height={100}
          className="absolute top-[5%] right-[-30%] w-[40%] blur-3xl"
          src="/certificate/assets/ball.webp"
          alt="ball"
        />
      </div>
    </div>
  );
}

export default PlanetLayout;
