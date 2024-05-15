import React from "react";
import Plus from "@/components/Svgs/Plus";

function Enter() {
  return (
    <div className="absolute w-full h-full bg-white bg-opacity-80 z-10 rounded-2xl">
      <div className="absolute w-full h-full bg-transparent z-20 rounded-2xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip h-1/3">
        <Plus color="white" className="fill-purple" />
      </div>
    </div>
  );
}

export default Enter;
