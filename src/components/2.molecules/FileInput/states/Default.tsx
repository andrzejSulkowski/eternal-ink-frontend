import React from "react";

interface Props {
  className?: string;
}

function Default({ className, children }: React.PropsWithChildren<Props>) {
  return (
    <div className={["text-nowrap", className].join(" ")}>
      <span>
        <span className="hidden md:visible">Drag Your File In Here or </span>
        <span className="text-ei-primary text-2xl md:text-base">
          Select from Device
        </span>
        {children}
      </span>
      {/* <div className="block invisible">reserved space</div> */}
    </div>
  );
}

export default Default;
