import React from "react";
import Check from "src/components/Svgs/Check";

export interface Props {
  highlighted: string;
  description: string;
}

function BulletPoint({ highlighted, description }: Props) {
  return (
    <div className="flex items-start space-x-3 text-white">
      <Check className="mr-2 w-10 h-10"/>
      <div>
        <span className="font-bold">{highlighted}</span>{" "}
        <span className="text-ei-primary-faded">{description}</span>
      </div>
    </div>
  );
}

export default BulletPoint;
