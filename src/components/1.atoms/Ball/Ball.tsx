import { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import Image from "next/image";

function Ball({ className }: EIProps) {
  return (
    <div className={classNames("", className)}>
      <Image
        className="object-contain" // For responsive scaling
        src="/storybook_resources/ball_solid.png"
        layout="fill" // Fill the container while keeping aspect ratio
        objectFit="contain" // Prevent distortion
        alt="Ball"
      />
    </div>
  );
}

export default Ball;
