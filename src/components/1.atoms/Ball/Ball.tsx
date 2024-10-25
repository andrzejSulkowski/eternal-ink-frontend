import { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import Image from "next/image";
import BallAsset from "public/storybook_resources/ball_solid.png";

interface IBall extends EIProps {
  priority?: boolean;
}
function Ball({ className, priority }: IBall) {
  return (
    <div className={classNames("", className)}>
      <Image
        className="object-contain"
        src={BallAsset}
        placeholder="blur"
        fill
        priority={priority}
        sizes="(max-width: 768px) 70vw, (max-width: 1200px) 30vw, 20vw"
        loading={priority ? "eager" : "lazy"}
        alt="Ball"
      />
    </div>
  );
}

export default Ball;
