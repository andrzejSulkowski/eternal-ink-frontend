import { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {}

function Gradient1({ className }: Props) {
  return (
    <div className={classNames("w-full h-full", className)}>
      <svg
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <mask
            id="mask0_140_448"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="-167"
            y="-390"
            width="2225"
            height="1328"
          >
            <path
              d="M1781.91 834.46C2249.59 744.585 2017.88 371.797 1843.56 196.637C1631.19 57.8528 1100.02 -246.702 674.256 -354.648C142.052 -489.58 19.5947 -204.036 55.5111 -42.1163C91.4274 119.803 -339.414 455.286 -87.2982 749.789C164.817 1044.29 486.676 960.968 845.285 712.246C1203.89 463.525 1197.31 946.803 1781.91 834.46Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_140_448)">
            <g filter="url(#filter0_f_140_448)">
              <path
                d="M323.156 607.354C196.756 830.954 342.156 956.854 430.656 991.854C340.156 1477.85 -380.344 1028.85 -337.844 932.354C-295.344 835.854 -273.344 505.854 -315.344 384.354C-357.344 262.854 -159.844 -203.146 244.156 -11.1459C648.156 180.854 481.156 327.854 323.156 607.354Z"
                fill="url(#paint0_linear_140_448)"
              />
              <path
                d="M504.165 797.303C777.765 865.303 893.165 1081.97 916.665 1181.8C916.665 1314.8 625.665 1206.8 504.165 1085.3C382.665 963.803 297.665 1181.8 100.165 1108.3C-97.3348 1034.8 162.165 712.303 504.165 797.303Z"
                fill="url(#paint1_linear_140_448)"
              />
              <path
                d="M1278.67 568.421C1179.47 726.421 1258 992.255 1309.67 1105.42C1648.67 1642.42 1993.17 1068.42 1914.17 986.921C1835.17 905.421 1654.17 884.921 1693.67 729.421C1733.17 573.921 1402.67 370.921 1278.67 568.421Z"
                fill="url(#paint2_linear_140_448)"
              />
              <path
                d="M1418.17 570.922C1567.37 765.722 1661 611.422 1689.17 509.922C1716.67 363.921 1607.67 123.922 1255.67 56.4216C903.665 -11.0784 805.165 293.422 920.165 371.422C1035.17 449.422 1231.67 327.421 1418.17 570.922Z"
                fill="#4E5EF2"
              />
              <path
                d="M1558.17 729.649C1646.97 547.249 1355.83 548.316 1199.17 571.649C1173.83 560.982 1088.67 581.749 950.665 750.149C778.165 960.649 1225.17 986.649 1269.17 861.149C1313.17 735.649 1447.17 957.649 1558.17 729.649Z"
                fill="black"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_140_448"
            x="-759.651"
            y="-476.954"
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
              result="effect1_foregroundBlur_140_448"
            />
          </filter>
          <linearGradient
            id="paint0_linear_140_448"
            x1="78.0072"
            y1="1213.92"
            x2="78.0073"
            y2="-56.9543"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#364AFA" />
            <stop offset="1" stopColor="#202C94" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_140_448"
            x1="460.45"
            y1="794.428"
            x2="452.025"
            y2="1289.69"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F019CE" />
            <stop offset="1" stopColor="#8A0E76" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_140_448"
            x1="1325.31"
            y1="984.233"
            x2="1455.64"
            y2="146.465"
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
export default Gradient1;
