import { Props as BulletPointProps } from "@/components/2.molecules/BulletPoint/BulletPoint";
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
  alt: string;
}

function FeatureShowcase(props: Props) {
  return (
    <div className="w-full flex flex-col-reverse md:grid md:grid-cols-2 mt-32 overflow-visible">
      {props.first === "content" ? (
        <>
          <ContentBlock {...props}>{props.ContentNode}</ContentBlock>
          <ImgBlock imgSrc={props.imgSrc} alt={props.alt}>
            {props.ImgNode}
          </ImgBlock>
        </>
      ) : (
        <>
          <ImgBlock imgSrc={props.imgSrc} alt={props.alt}>
            {props.ImgNode}
          </ImgBlock>
          <ContentBlock {...props}>{props.ContentNode}</ContentBlock>
        </>
      )}
    </div>
  );
}
export default FeatureShowcase;
