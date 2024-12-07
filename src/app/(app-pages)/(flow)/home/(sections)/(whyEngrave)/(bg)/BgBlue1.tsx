import { classNames } from "@/utils/className";

function BgBlue1({ className }: { className?: string }) {
  return (
    <div className={classNames("max-w-full max-h-full", className)}>
      <svg
        viewBox="0 0 599 1271"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M172.796 606.567C299.196 382.967 153.796 257.067 65.2956 222.067C155.796 -263.933 876.296 185.067 833.796 281.567C791.296 378.067 769.296 708.067 811.296 829.567C853.296 951.067 655.796 1417.07 251.796 1225.07C-152.204 1033.07 14.7956 886.067 172.796 606.567Z"
          fill="url(#paint0_linear_45_312)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_45_312"
            x1="417.944"
            y1="-0.000244141"
            x2="417.944"
            y2="1270.88"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#364AFA" />
            <stop offset="1" stopColor="#202C94" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default BgBlue1;
