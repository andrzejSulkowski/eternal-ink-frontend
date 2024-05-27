import React from "react";
import Check from "src/components/Svgs/Check";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

export interface Props extends EIProps {
  highlighted: string;
  description: string;
}

function BulletPoint({ highlighted, description, className }: Props) {
  return (
    <div className={classNames("flex items-start space-x-3 text-white", className)}>
      <Check className="mr-2 w-10 h-10"/>
      <div>
        <span className="font-bold">{highlighted}</span>{" "}
        <span className="text-ei-primary-faded">{description}</span>
      </div>
    </div>
  );
}

export default BulletPoint;
