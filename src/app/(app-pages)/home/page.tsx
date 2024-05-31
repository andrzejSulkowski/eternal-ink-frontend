import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import Hero from "./(sections)/Hero";

interface Props {}


function HomePage({ }: Props) {
  return (
    <div className={classNames("")}>
      <Hero />
    </div>
  );
}

export default HomePage;
