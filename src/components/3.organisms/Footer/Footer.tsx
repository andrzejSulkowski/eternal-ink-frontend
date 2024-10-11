import React from "react";
import type { EIProps, EIRoute } from "@/types";
import { classNames } from "@/utils/className";
import Hrefs from "./parts/Href/Hrefs";
import CONFIG from "@/libs/config";

interface Props extends EIProps {
  onHrefClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  routes: EIRoute[];
  socials: ISocial[];
}

interface ISocial {
  href: string;
  cmp: React.FC<EIProps>;
}

function Footer({ className, onHrefClick, routes = [], socials = [] }: Props) {
  const Socials = () => (
    <div className="flex gap-8 justify-end">
      {socials.map((Social, idx) => (
        <a href={Social.href}>
          <Social.cmp key={idx} className="cursor-pointer" />
        </a>
      ))}
    </div>
  );

  return (
    <footer
      className={classNames(
        "px-72 py-6 flex text-white justify-between font-light",
        className
      )}
    >
      {/* Legal */}
      <div className="flex flex-col justify-between gap-4">
        <span className="font-kanit font-bold text-2xl">Engrave</span>
        <span className="text-ei-primary-faded">Version: {CONFIG.VERSION}</span>
        {/* Deactivated for now */}
        {/* <Hrefs routes={routes} onHrefClick={onHrefClick} /> */}
      </div>
      {/* Social Links */}
      <div className="flex flex-col justify-between gap-4">
        <div className="h-6 w-full flex gap-8 justify-end">
          <Socials />
        </div>
        <span className="text-ei-primary-faded">
          @{new Date().getFullYear()} Engrave. All Rights Reserved
        </span>
      </div>
    </footer>
  );
}

export type { ISocial };
export default Footer;
