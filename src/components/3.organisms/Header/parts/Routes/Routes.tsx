'use client';

import React, { useMemo } from "react";
import type { EIProps, EIRoute } from "@/types";
import { classNames } from "@/utils/className";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props extends EIProps {
  routes: EIRoute[];
}

function Routes({ className, routes }: Props) {
  const pathname = usePathname();
  const selectedIdx = useMemo(() => {
    const idx = routes.findIndex((route) => route.href === pathname);
    return idx;
  }, [pathname, routes]);

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
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}

export default Routes;
