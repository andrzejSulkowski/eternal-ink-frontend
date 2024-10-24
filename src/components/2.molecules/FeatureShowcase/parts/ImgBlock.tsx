import E from "@/components/Svgs/E";
import { PropsWithChildren } from "react";
import Image from "next/image";

interface Props {
  imgSrc: string;
  alt: string;
}

function ImgBlock({ imgSrc, children }: PropsWithChildren<Props>) {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="w-4/5 aspect-square relative">
        <Image fill className="w-4/5 aspect-square z-10" src={imgSrc} alt="" />
        <E className="absolute top-0 left-0 h-full  -z-10" />
        {children}
      </div>
    </div>
  );
}
export default ImgBlock;
