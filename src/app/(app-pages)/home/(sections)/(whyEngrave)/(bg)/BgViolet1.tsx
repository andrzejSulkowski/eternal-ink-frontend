import { classNames } from "@/utils/className";

function BgViolet1({ className }: { className?: string }) {
    return (
      <div
        className={classNames("w-full h-auto max-w-full max-h-full", className)}
      >
        <svg
          className="max-w-full max-h-full"
          viewBox="0 0 586 847"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M538.287 764.5C637.487 606.5 558.953 340.667 507.287 227.5C168.287 -309.5 -176.213 264.5 -97.2134 346C-18.2134 427.5 162.787 448 123.287 603.5C83.7865 759 414.287 962 538.287 764.5Z"
            fill="url(#paint0_linear_45_314)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_45_314"
              x1="491.645"
              y1="348.689"
              x2="361.307"
              y2="1186.46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5B2A8B" />
              <stop offset="0.5" stopColor="#180B25" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }


  export default BgViolet1;