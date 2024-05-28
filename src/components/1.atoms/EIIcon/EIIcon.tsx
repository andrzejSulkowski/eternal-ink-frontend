import { EIProps } from "@/types";
import React from "react";

interface Props extends EIProps{}

function EIIcon({ children }: Props) {
  return <div className="bg-ei-primary-royal/40 rounded-full w-16 aspect-square p-4 flex justify-center items-center">{children}</div>;
}

export default EIIcon;
