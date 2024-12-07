import { classNames } from "@/utils/className";

function BgBlack1({ className }: { className?: string }) {
  return (
    <div
      className={classNames("w-full h-auto max-w-full max-h-full", className)}
    >
      <svg viewBox="0 0 664 377" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.7866 207.272C-72.0134 389.672 219.12 388.606 375.787 365.272C401.12 375.939 486.287 355.172 624.287 186.772C796.787 -23.7276 349.787 -49.7276 305.787 75.7724C261.787 201.272 127.787 -20.7276 16.7866 207.272Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

export default BgBlack1;
