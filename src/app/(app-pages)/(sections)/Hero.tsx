import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import PlanetLayout from "@/components/Svgs/bg/planet/PlanetLayout";
import Button from "@/components/1.atoms/Button/Button";
import Ball from "@/components/1.atoms/Ball/Ball";

function BgBlue1({ className }: EIProps) {
  return (
    <svg
    className={className}
      viewBox="0 0 624 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M172.509 448.567C298.909 224.967 153.509 99.0672 65.009 64.0672C155.509 -421.933 876.009 27.0672 833.509 123.567C791.009 220.067 769.009 550.067 811.009 671.567C853.009 793.067 655.509 1259.07 251.509 1067.07C-152.491 875.067 14.509 728.067 172.509 448.567Z"
        fill="url(#paint0_linear_680_26)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_680_26"
          x1="417.658"
          y1="-158"
          x2="417.658"
          y2="1112.88"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#364AFA" />
          <stop offset="1" stop-color="#202C94" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}


interface Props extends EIProps {}

function HeroSection({ className }: Props) {
  return (
    <div className={classNames("", className)}>
      <PlanetLayout className="w-svw h-svh !absolute top-0 overflow-hidden !-z-10 font-manrope text-center !left-0" />
      <Ball className="absolute w-60 right-40 top-62 blur-md"/>
      <Ball className="absolute h-full left-[-30%] top-[25%] blur-2xl"/>
      <BgBlue1 className="h-full absolute top-[-10%] right-[-10%] -z-10 blur-[96px]" />

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
