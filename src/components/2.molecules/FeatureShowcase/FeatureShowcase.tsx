import { Props as BulletPointProps } from "@/components/2.molecules/BulletPoint/BulletPoint";
// Cmps
import Ellipse1 from "./bg/Ellipse1";
import Ellipse2 from "./bg/Ellipse2";
import Ball from "@/components/1.atoms/Ball/Ball";
import E from "@/components/Svgs/E";
import ContentBlock from "./parts/ContentBlock";
import ImgBlock from "./parts/ImgBlock";
import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  bulletPoints: BulletPointProps[];
  highlighted: string;
  imgSrc: string;
  first: "img" | "content";
  ImgNode?: ReactNode;
  ContentNode?: ReactNode;
}

function FeatureShowcase(props: Props) {
  return (
    <div className="w-full grid grid-cols-2 mt-32 overflow-visible">
      {props.first === "content" ? (
        <>
          <ContentBlock {...props}>{props.ContentNode}</ContentBlock>
          <ImgBlock imgSrc={props.imgSrc}>{props.ImgNode}</ImgBlock>
        </>
      ) : (
        <>
          <ImgBlock imgSrc={props.imgSrc}>{props.ImgNode}</ImgBlock>
          <ContentBlock {...props}>{props.ContentNode}</ContentBlock>
        </>
      )}
    </div>
  );
}
export default FeatureShowcase;
