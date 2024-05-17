import React from "react";
import Tick, { Props as TickProps } from "@/components/Tick/Tick";

interface Props {
  ticks: TickProps[];
}

function TickHor({ ticks }: Props) {
  return (
    <div className="flex flex-row gap-2 max-w-full">
      {ticks.map((props, index) => (
        <Tick key={index} {...props} />
      ))}
    </div>
  );
}

export default TickHor;
