"use client";

import React, { useCallback, useMemo } from "react";
import type { EIProps, EIRoute } from "@/types";
import { classNames } from "@/utils/className";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Props extends EIProps {
  routes: EIRoute[];
}

const isRouteSelected = (
  routeHref: string,
  currentPathname: string
): boolean => {
  // Ensure both are strings and start with the same base route
  if (typeof routeHref !== "string" || typeof currentPathname !== "string") {
    return false;
  }

  // Normalize paths to avoid discrepancies due to trailing slashes
  const normalizedRouteHref = routeHref.replace(/\/$/, "");
  const normalizedCurrentPathname = currentPathname.replace(/\/$/, "");

  // Check if the current path starts with the routeHref
  return normalizedCurrentPathname.startsWith(normalizedRouteHref);
};

function Routes({ className, routes }: Props) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const selectedIdx = useMemo(() => {
    const idx = routes.findIndex((route) =>
      isRouteSelected(route.href, pathname)
    );
    return idx;
  }, [pathname, routes]);

  const routeStyles = useCallback(
    (idx: number) => {
      let styles = "cursor-pointer py-4 px-8 md:px-0 md:py-0";
      if (idx === selectedIdx)
        styles +=
          "text-white font-bold border-solid border-l-4 border-ei-primary md:border-none";
      else styles += " text-white/60 font-light";

      return styles;
    },
    [selectedIdx]
  );

  return (
    <>
      {isMobile && (
        <>
          <div
            className={classNames(
              "flex gap-12 font-manrope text-2xl md:text-sm",
              className
            )}
          >
            {routes.map((route, idx) => (
              <Link key={idx} className={routeStyles(idx)} href={route.href}>
                {route.name}
              </Link>
            ))}
          </div>
        </>
      )}
      {!isMobile && (
        <>
          <div
            className={classNames(
              "flex gap-12 font-manrope text-sm items-center",
              className
            )}
          >
            {routes.map((route, idx) => (
              <Link key={idx} className={routeStyles(idx)} href={route.href}>
                {route.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Routes;
