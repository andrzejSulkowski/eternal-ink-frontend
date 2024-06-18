import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import PlanetLayout from "@/components/Svgs/bg/planet/PlanetLayout";
import Button from "@/components/1.atoms/Button/Button";

interface Props extends EIProps {}

function HeroSection({ className }: Props) {
  return (
    <div className={classNames("", className)}>
      <PlanetLayout className="w-svw h-svh !absolute top-0 overflow-hidden !-z-10 font-manrope text-center !left-0" />

      <div className="w-full h-svh flex flex-col items-center">
        <div className="w-2/3 flex flex-col justify-center items-center mt-52">
          <span className="block font-extrabold text-8xl text-center font-manrope">
            Immortalize Your Essence
          </span>
          <span className="block text-ei-primary-faded text-sm mt-6 text-center">
            Join the digital legacy. Enter your message or document hash below
            and press 'Send' to engrave your mark on the blockchain instantly
          </span>
          <Button className="!w-fit mt-14">Begin Your Legacy</Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
