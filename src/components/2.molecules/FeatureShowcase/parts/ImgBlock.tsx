import Ball from "@/components/1.atoms/Ball/Ball";
import E from "@/components/Svgs/E";
import { PropsWithChildren } from "react";

interface Props {
  imgSrc: string;
}

function ImgBlock({ imgSrc, children }: PropsWithChildren<Props>) {
  return (
    <div className="w-full h-full flex justify-center items-center relative">

      <div className="w-4/5 aspect-square relative">
        <img className="w-4/5 aspect-square z-10" src={imgSrc} />
        <E className="absolute top-0 left-0 h-full  -z-10" />
        {children}
      </div>
    </div>
  );
}
export default ImgBlock;
