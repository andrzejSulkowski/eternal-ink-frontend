import React from "react";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

interface Props {
  progress: number;
}

function Loading({progress}: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-ei-primary-faded font-normal">Loading...</span>
      <ProgressBar percent={progress} />
    </div>
  );
}

export default Loading;
