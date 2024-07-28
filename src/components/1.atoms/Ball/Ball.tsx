import { EIProps } from "@/types";
import { classNames } from "@/utils/className";

function Ball({ className }: EIProps) {
  return (
    <img
      className={classNames("max-w-full max-h-full", className)}
      src="./storybook_resources/ball_solid.png"
      alt=""
    />
  );
}
export default Ball;
