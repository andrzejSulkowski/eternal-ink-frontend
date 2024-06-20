import { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {}
function E({ className }: EIProps) {
  return (
    <div
      className={classNames("w-full h-full max-w-full max-h-full", className)}
    >
      <svg viewBox="0 0 398 525" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full max-h-full">
        <path
          d="M-3.05176e-05 525V0H398V117.391H153.328V202.989H367.824V322.011H153.328V407.609H398V525H-3.05176e-05Z"
          fill="url(#paint0_linear_57_637)"
          fillOpacity="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_57_637"
            x1="167.5"
            y1="-2.64014e-06"
            x2="295"
            y2="610.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#503ADD" />
            <stop offset="1" stopColor="#2B1F77" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
export default E;
