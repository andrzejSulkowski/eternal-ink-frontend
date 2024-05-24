import React from "react";

interface Props {
  className?: string;
}

function Default({className, children}: React.PropsWithChildren<Props>) {
  return (
    <div className={['text-nowrap', className].join(" ")}>
      <span>
        Drag Your File In Here or{" "}
        <span className="text-ei-primary">Select from Device</span>
        {children}
      </span>
    </div>
  );
}

export default Default;
