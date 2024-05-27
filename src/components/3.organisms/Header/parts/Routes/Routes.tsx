import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {
  selectedIdx: number;
  routes: string[];
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
        <span
          key={idx}
          className={routeStyles(idx)}
          onClick={() => onHrefClick(route)}
        >
          {route}
        </span>
      ))}
    </div>
  );
}

export default Routes;
