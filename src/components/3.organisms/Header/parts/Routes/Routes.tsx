import React from "react";
import type { EIProps, EIRoute } from "@/types";
import { classNames } from "@/utils/className";
import Link from "next/link";

interface Props extends EIProps {
  selectedIdx: number;
  routes: EIRoute[];
  onHrefClick: (route: string) => void;
}

function Routes({ className, selectedIdx, routes, onHrefClick }: Props) {
  const routeStyles = (idx: number) => {
    let styles = "cursor-pointer ";
    if (idx === selectedIdx) styles += "text-white font-bold";
    else styles += "text-white/60 font-light";

    return styles;
  };

  return (
    <div className={classNames("flex gap-12 font-manrope text-sm", className)}>
      {routes.map((route, idx) => (
        <Link
          key={idx}
          className={routeStyles(idx)}
          href={route.href}
          onClick={() => onHrefClick(route.href)}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}

export default Routes;
