import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import Hero from "./(sections)/Hero";

interface Props extends EIProps {}


function HomePage({ className }: Props) {
  return (
    <div className={classNames("", className)}>
      <Hero />
    </div>
  );
}

export default HomePage;
