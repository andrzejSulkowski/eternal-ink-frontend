import React from "react";

interface Props extends React.DOMAttributes<HTMLDivElement> {
  color?: string;
  className?: string;
}

function Plus({ color, className, ...rest }: Props) {
  return (
    <div className="w-full h-full aspect-square" {...rest}>
      <svg
        onDragLeave={(e) => e.stopPropagation()}
        onDragEnd={(e) => e.stopPropagation()}
        onDragExit={(e) => e.stopPropagation()}

        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        fill={color ? color : "black"}
        clipRule="evenodd"
        viewBox="0 0 512 512"
        className={["w-full h-full", className].join(" ")}
      >
        <path d="M256 0c70.68 0 134.69 28.66 181.02 74.98C483.34 121.29 512 185.31 512 256c0 70.69-28.66 134.69-74.98 181.02C390.69 483.34 326.68 512 256 512c-70.69 0-134.71-28.66-181.02-74.98C28.66 390.69 0 326.68 0 256c0-70.69 28.66-134.69 74.98-181.02C121.29 28.66 185.31 0 256 0zm122.47 256c0 15.57-12.77 28.31-28.31 28.31h-65.84v65.84c0 15.57-12.76 28.31-28.32 28.31-15.57 0-28.32-12.77-28.32-28.31v-65.84h-65.83c-15.55 0-28.32-12.76-28.32-28.31 0-15.56 12.74-28.32 28.32-28.32h65.83v-65.84c0-15.55 12.77-28.32 28.32-28.32 15.56 0 28.32 12.74 28.32 28.32v65.84h65.84c15.57 0 28.31 12.75 28.31 28.32z" />
      </svg>
    </div>
  );
}

export default Plus;
