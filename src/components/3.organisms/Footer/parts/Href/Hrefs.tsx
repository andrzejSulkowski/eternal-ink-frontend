import React from "react";
import type { EIProps, EIRoute } from "@/types";
import { classNames } from "@/utils/className";
import Link from "next/link";

interface Props extends EIProps {
  routes: EIRoute[];
}

function Hrefs({ className, routes }: Props) {
  return (
    <ul className={classNames("flex text-ei-primary-faded gap-4", className)}>
      {routes?.map((route, index) => (
        <li key={index} className="hover:underline text-base md:text-xs">
          <Link key={index} href={route.href}>
            {route.name}
          </Link>
          {index !== routes.length - 1 && (
            <span className="text-ei-primary-faded/20 ml-4">|</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Hrefs;
