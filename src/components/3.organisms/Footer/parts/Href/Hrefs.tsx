import React from "react";
import type { EIProps, EIRoute } from "@/types";
import { classNames } from "@/utils/className";
import Link from "next/link";

interface Props extends EIProps {
  routes: EIRoute[];
  onHrefClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function Hrefs({ className, routes, onHrefClick }: Props) {
  return (
    <ul className={classNames("flex text-ei-primary-faded gap-4", className)}>
        {routes?.map((route, index) => (
          <li>
            <Link key={index} href={route.href} onClick={onHrefClick}>{route.name}</Link>
            {index !== routes.length - 1 && (
              <span className="text-ei-primary-faded/20 ml-4">|</span>
            )}
          </li>
        ))}
    </ul>
  );
}

export default Hrefs;
