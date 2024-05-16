import React from "react";
import { FiX } from "react-icons/fi";

interface Props {
  onClose: () => void;
}

function MessageForm() {
  return (
    <div className="w-[30rem] h-[45rem] bg-ei-black rounded-[20px] text-white px-8 pt-6 pb-10">
      {/* Header Controls */}
      <div className="border-b-2 border-solid border-primary-faded border-opacity-20 flex justify-between items-center text-primary-faded pb-4">
        <span>Send Your Own Message</span>
        <FiX className="h-full w-1/12 cursor-pointer" />
      </div>
      {/* Header Info */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-white text-4xl">Join the digital legacy</span>
        <span className="text-primary-faded">Enter your message or document hash below and press 'Send' to engrave your mark on the blockchain instantly</span>
      </div>

    </div>
  );
}

export default MessageForm;
