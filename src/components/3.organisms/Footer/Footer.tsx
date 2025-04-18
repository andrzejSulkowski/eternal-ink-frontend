import React from "react";
import type { EIProps, EIRoute } from "@/types";
import { classNames } from "@/utils/className";
import CONFIG from "@/libs/config";
import Hrefs from "@/components/3.organisms/Footer/parts/Href/Hrefs";

interface Props extends EIProps {
  socials: ISocial[];
  routes: EIRoute[];
}

interface ISocial {
  href: string;
  cmp: React.FC<EIProps>;
}

function Footer({ className, socials = [], routes }: Props) {
  const Socials = () => (
    <div className="flex gap-8 justify-end items-center h-full">
      {socials.map((Social, idx) => (
        <a
          key={idx}
          href={Social.href}
          className="flex-none h-full aspect-square"
        >
          <Social.cmp className="cursor-pointer" />
        </a>
      ))}
    </div>
  );

  return (
    <footer
      className={classNames(
        "px-12 md:px-72 py-6 flex text-white justify-between font-light",
        className
      )}
    >
      {/* Legal */}
      <div className="flex flex-col justify-between gap-4">
        <span className="font-kanit font-bold text-2xl">Engrave</span>
        <span className="text-ei-primary-faded text-xl md:text-base">
          Version: {CONFIG.VERSION}
        </span>
        <Hrefs routes={routes} />
      </div>
      {/* Social Links */}
      <div className="flex flex-col justify-between gap-4">
        <div className="h-12 md:h-6 w-full">
          <Socials />
        </div>
        <span className="text-ei-primary-faded text-xl md:text-base">
          @{new Date().getFullYear()} Engrave
        </span>
      </div>
    </footer>
  );
}

export type { ISocial };
export default Footer;
