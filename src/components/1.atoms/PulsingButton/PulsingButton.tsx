import React from "react";
import { FiSend } from "react-icons/fi";

interface PullsButtonProps {
  onClick: () => void;
}

const PullsButton: React.FC<PullsButtonProps> = ({ onClick }) => {

  return (
    <div className="relative flex items-center justify-center aspect-square h-[4rem] rounded-full">
      <button
        onClick={onClick}
        className="absolute w-full h-full z-10 hover:scale-105 transition-transform duration-200 ease-in-out bg-ei-primary rounded-full flex items-center justify-center"
      >
        <FiSend className="text-white w-6 h-6 z-10" />
      </button>

      <div className="absolute aspect-square h-[4.5rem] rounded-full bg-ei-primary bg-opacity-20 animate-ping-slow -z-10 cursor-default" />
      <div
        className={`absolute aspect-square h-[4.0rem] rounded-full bg-ei-primary bg-opacity-40 animate-ping-slow animation-delay-200 -z-10 cursor-default`}
      />
    </div>
  );
};

export default PullsButton;
