import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import Noise from "./parts/Noise";
import TypeOne from "./parts/TypeOne";
import TypeTwo from "./parts/TypeTwo";
import Planet from "./parts/Planet";

interface Props extends EIProps {}

function PlanetLayout({ className }: Props) {
  return (
    <div className="w-svw h-svh relative top-0 overflow-hidden">
      <div className="w-full h-full">
        <Noise className="absolute top-0 left-0 bottom-0 right-0 opacity-5 z-20" />
        <TypeOne className="absolute top-0 left-0" />
        <TypeTwo className="absolute top-0 left-0" />
        <Planet className="absolute top-[75%] z-10 rounded-full left-1/2 -translate-x-1/2" />
      </div>
    </div>
  );
}

export default PlanetLayout;
