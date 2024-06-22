import { EIProps } from "@/types";
import { classNames } from "@/utils/className";

function Ellipse2({ className }: EIProps) {
  return (
    <div
      className={classNames("w-full h-full max-w-full max-h-full", className)}
    >
      <svg viewBox="0 0 865 789" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="1" filter="url(#filter0_f_56_626)">
          <path
            d="M266.924 543.485C141.786 398.703 66.235 209.752 150.816 136.647C235.398 63.5414 556.788 179.209 681.925 323.991C807.063 468.773 737.536 559.918 652.955 633.023C568.373 706.128 392.062 688.267 266.924 543.485Z"
            fill="url(#paint0_linear_56_626)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_56_626"
            x="0.930069"
            y="0.0827637"
            width="863.237"
            height="788.911"
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
              result="effect1_foregroundBlur_56_626"
            />
          </filter>
          <linearGradient
            id="paint0_linear_56_626"
            x1="610.41"
            y1="631.458"
            x2="336.477"
            y2="715.772"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0A0A20" stopOpacity="0" />
            <stop offset="1" stopColor="#262E73" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Ellipse2;
