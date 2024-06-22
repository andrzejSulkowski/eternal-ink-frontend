import { Props as BulletPointProps } from "@/components/2.molecules/BulletPoint/BulletPoint";
import BulletPointsList from "./../parts/BulletPointsList";
import { PropsWithChildren } from "react";

interface Props {
  title: string;
  description: string;
  bulletPoints: BulletPointProps[];
  highlighted: string;
}

function ContentBlock({
  title,
  description,
  bulletPoints,
  highlighted,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="relative overflow-visible">
      <h2 className="font-extrabold text-4xl">{title}</h2>
      <p className="mt-6 text-ei-primary-faded text-sm">{description}</p>
      <div className="flex flex-col gap-4 mt-7">
        <BulletPointsList bulletPoints={bulletPoints} />
      </div>
      <p className="font-bold text-sm mt-8">{highlighted}</p>
      {children}
    </div>
  );
}
export default ContentBlock;
