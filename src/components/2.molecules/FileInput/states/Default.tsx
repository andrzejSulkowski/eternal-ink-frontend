import React from "react";

interface Props {
  className?: string;
}

function Default({className, children}: React.PropsWithChildren<Props>) {
  return (
    <div className={['text-nowrap', className].join(" ")}>
      <span className="">
        Drag Your File In Here or{" "}
        <span className="text-ei-primary">Select from Device</span>
        {children}
      </span>
        {/* <div className="block invisible">reserved space</div> */}
    </div>
  );
}

export default Default;
