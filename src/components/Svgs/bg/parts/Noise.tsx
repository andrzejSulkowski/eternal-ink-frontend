import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {}

function Noise({ className }: Props) {
  return (
    <div className={classNames("w-full h-full", className)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="3"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}

export default Noise;
