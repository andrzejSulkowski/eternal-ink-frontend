import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import PlanetLayout from "@/components/Svgs/bg/planet/PlanetLayout";
import Button from "@/components/1.atoms/Button/Button";
import Ball from "@/components/1.atoms/Ball/Ball";
import BallBlur from "@/components/1.atoms/Ball/BallBlur";
import BgBlue1 from "./(bg)/BgBlue1";

interface Props extends EIProps {}

function HeroSection({ className }: Props) {
  return (
    <div className={classNames("", className)}>
      <PlanetLayout className="w-svw h-svh !absolute top-0 overflow-hidden !-z-10 font-manrope text-center !left-0">
        <Ball className="absolute w-60 h-60 right-8 top-8 blur-md" />
        <BgBlue1 className="h-full absolute top-[-10%] right-[-10%] -z-10 blur-[96px]" />
        <BallBlur
          className="absolute w-1/2 h-1/2 left-[-30%] top-[0%] blur-xl"
          priority
        />
      </PlanetLayout>

      <div className="w-full h-svh flex flex-col items-center">
        <div className="w-2/3 flex flex-col justify-center items-center mt-52">
          <span className="block font-extrabold text-8xl text-center font-manrope">
            Immortalize Your Essence
          </span>
          <span className="block text-ei-primary-faded text-2xl md:text-sm mt-6 text-center">
            Join the digital legacy. Enter your message or document hash below
            and press &apos;Send&apos; to engrave your mark on the blockchain
            instantly
          </span>
          <Button className="!w-fit mt-12" href="/engrave">
            Begin Your Legacy
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
