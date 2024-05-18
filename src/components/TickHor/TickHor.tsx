import React, { useMemo, useState } from "react";
import Tick, { Props as TickProps } from "@/components/Tick/Tick";
import { FaGripLinesVertical } from "react-icons/fa";
import GradientFadeEffect from "@/components/TickHor/parts/GradientFadeEffect/GradientFadeEffect";

interface Props {
  ticks: TickProps[];
  tpm?: number; //ticks per minute - how many ticks to show scroll through in a minute
}

interface TicksProps {
  ticks: TickProps[];
  keyGenerator: (index: number) => string;
}

function TickHor({ ticks, tpm = 2 }: Props) {
  const scrollDuration = useMemo(() => `${60 / tpm}s`, [tpm]);

  function _decelerate() {
    //TODO: Implement deceleration
  }
  function _reset() {
    //TODO: Implement reset
  }

  const Ticks = ({ ticks, keyGenerator }: TicksProps) => {
    return ticks.map((props, index) => (
      <li
        key={keyGenerator(index)}
        className="flex flex-row items-center w-max"
      >
        <Tick {...props} className="mx-4" />
        <div className="h-full min-h-full w-3 min-w-3">
          <FaGripLinesVertical className="text-white/20" />
        </div>
      </li>
    ));
  };
  const keyGenerator = (index: number) => `tick-${index}`;
  const keyGeneratorClone = (index: number) => `tick-clone-${index}`;

  return (
    <div
      className="max-w-full overflow-hidden"
      onMouseEnter={() => _decelerate()}
      onMouseLeave={() => _reset()}
    >
      <GradientFadeEffect>
        <div className="w-full inline-flex flex-nowrap">
          <ul
            className="flex flex-row items-center w-max animate-infinite-scroll transition-all"
            style={{ animationDuration: scrollDuration }}
          >
            <Ticks ticks={ticks} keyGenerator={keyGenerator} />
          </ul>
          {/* Duplicate the ticks for seamless scroll */}
          <ul
            className="flex flex-row items-center w-max animate-infinite-scroll transition-all"
            style={{ animationDuration: scrollDuration }}
          >
            <Ticks ticks={ticks} keyGenerator={keyGeneratorClone} />
          </ul>
        </div>
      </GradientFadeEffect>
    </div>
  );
}

export default TickHor;
