import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {}

function TypeTwo({ className }: Props) {
  return (
    <div className={classNames("w-full h-full", className)}>
      <svg
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_20_1751)">
          <path
            d="M2022.8 730.567C2149.2 506.967 2003.8 381.067 1915.3 346.067C2005.8 -139.933 2726.3 309.067 2683.8 405.567C2641.3 502.067 2619.3 832.067 2661.3 953.567C2703.3 1075.07 2505.8 1541.07 2101.8 1349.07C1697.8 1157.07 1864.8 1010.07 2022.8 730.567Z"
            fill="url(#paint0_linear_20_1751)"
          />
          <path
            d="M1841.79 540.618C1568.19 472.618 1452.79 255.952 1429.29 156.118C1429.29 23.1184 1720.29 131.118 1841.79 252.618C1963.29 374.118 2048.29 156.118 2245.79 229.618C2443.29 303.118 2183.79 625.618 1841.79 540.618Z"
            fill="url(#paint1_linear_20_1751)"
          />
          <path
            d="M1067.29 769.5C1166.49 611.5 1087.95 345.667 1036.29 232.5C697.287 -304.5 352.787 269.5 431.787 351C510.787 432.5 691.787 453 652.287 608.5C612.787 764 943.287 967 1067.29 769.5Z"
            fill="url(#paint2_linear_20_1751)"
          />
          <path
            d="M927.787 767C778.587 572.2 684.953 726.5 656.787 828C629.287 974 738.287 1214 1090.29 1281.5C1442.29 1349 1540.79 1044.5 1425.79 966.5C1310.79 888.5 1114.29 1010.5 927.787 767Z"
            fill="#4E5EF2"
          />
          <path
            d="M787.787 608.272C698.987 790.672 990.12 789.606 1146.79 766.272C1172.12 776.939 1257.29 756.172 1395.29 587.772C1567.79 377.272 1120.79 351.272 1076.79 476.772C1032.79 602.272 898.787 380.272 787.787 608.272Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_20_1751"
            x="0.358643"
            y="-414.385"
            width="3105.24"
            height="2229.26"
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
              stdDeviation="210"
              result="effect1_foregroundBlur_20_1751"
            />
          </filter>
          <linearGradient
            id="paint0_linear_20_1751"
            x1="2267.94"
            y1="124"
            x2="2267.94"
            y2="1394.88"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#364AFA" />
            <stop offset="1" stopColor="#202C94" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_20_1751"
            x1="1885.5"
            y1="543.493"
            x2="1893.93"
            y2="48.2283"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F019CE" />
            <stop offset="1" stopColor="#8A0E76" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_20_1751"
            x1="1020.65"
            y1="353.689"
            x2="890.307"
            y2="1191.46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5B2A8B" />
            <stop offset="1" stopColor="#180B25" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default TypeTwo;
