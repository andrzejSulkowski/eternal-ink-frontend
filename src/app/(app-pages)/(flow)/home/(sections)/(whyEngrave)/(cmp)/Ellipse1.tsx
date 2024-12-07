import { EIProps } from "@/types";
import { classNames } from "@/utils/className";

function Ellipse1({ className }: EIProps) {
  return (
    <div
      className={classNames("w-full h-full max-w-full max-h-full", className)}
    >
      <svg
        className="max-w-full max-h-full"
        viewBox="0 0 857 798"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4" filter="url(#filter0_f_56_627)">
          <path
            d="M545.89 604.681C375.324 691.449 173.769 719.486 123.079 619.843C72.389 520.199 261.75 235.923 432.315 149.154C602.88 62.3859 674.694 151.74 725.384 251.384C776.074 351.028 716.455 517.913 545.89 604.681Z"
            fill="url(#paint0_linear_56_627)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_56_627"
            x="0.716965"
            y="0.0449219"
            width="856.129"
            height="797.047"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="57"
              result="effect1_foregroundBlur_56_627"
            />
          </filter>
          <linearGradient
            id="paint0_linear_56_627"
            x1="317.326"
            y1="445.685"
            x2="349.604"
            y2="222.571"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0A0A20" stopOpacity="0" />
            <stop offset="0.97" stopColor="#8B189E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Ellipse1;
