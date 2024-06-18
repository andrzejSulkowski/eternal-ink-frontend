import { EIProps } from "@/types";
import React from "react";

interface Props extends EIProps{}

function EIIcon({ children }: Props) {
  return <div className="bg-[#331C66] rounded-full w-12 aspect-square p-[10px] flex justify-center items-center">{children}</div>;
}

export default EIIcon;
