import { classNames } from "@/utils/className";

function BgViolet2({ className }: { className?: string }) {
    return (
      <div
        className={classNames("w-full h-auto max-w-full max-h-full", className)}
      >
        <svg viewBox="0 0 886 460" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M412.787 445.618C139.187 377.618 23.7866 160.952 0.28656 61.1182C0.28656 -71.8818 291.287 36.1182 412.787 157.618C534.287 279.118 619.287 61.1182 816.787 134.618C1014.29 208.118 754.787 530.618 412.787 445.618Z"
            fill="url(#paint0_linear_45_313)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_45_313"
              x1="456.502"
              y1="448.493"
              x2="464.927"
              y2="-46.7719"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F019CE" />
              <stop offset="1" stopColor="#8A0E76" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  export default BgViolet2;