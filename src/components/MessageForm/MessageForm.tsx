import React, { useRef, useState } from "react";
import { FiX, FiPaperclip } from "react-icons/fi";

//# Components
import Message, { MessageProps } from "@/components/Message/Message";
import Input from "@/components/Input/Input";
import { FiSend } from "react-icons/fi";

//# Hooks
import { useHiddenFileInput } from "@/hooks/useHiddenFileInput";

//# Parts
import PaperClip from "./parts/PaperClip/PaperClip";

interface Props {
  onSend: (message: string | File) => void;
  onClose: () => void;
  messages: MessageProps[];
}

function MessageForm({onClose, onSend, messages = []}: Props) {

  const MessageList = () => messages.map((props, index) => <Message message={props.message} address={props.address} variant={props.variant} key={index}/>)

  const [userMessage, setUserMessage] = useState("");
  const { userFile, setUserFile, HiddenFileInput, openHiddenFileInput} = useHiddenFileInput()

  function trySend() {
    if (userMessage.length > 0 || userFile) {
      const data = userFile || userMessage;
      onSend(data);
      clean()
    }else{
      console.warn("TODO: Display error message to user when he tries to send a empty message")
    }
  }


  function clean(){
    setUserMessage("");
    setUserFile(null);
  }

  return (
    <div className="w-[30rem] h-[45rem] bg-ei-void rounded-[20px] text-white px-8 pt-6 pb-10 flex flex-col">
      {/* Header Controls */}
      <div className="border-b-2 border-solid border-ei-primary-faded/20 flex justify-between items-center text-ei-primary-faded pb-4">
        <span>Send Your Own Message</span>
        <FiX onClick={onClose} className="h-full w-1/12 cursor-pointer" />
      </div>
      {/* Body Header */}
      <div className="flex flex-col items-center gap-3 mb-6 mt-2">
        <span className="text-white text-4xl font-extrabold">Join the digital legacy</span>
        <span className="text-ei-primary-faded">Enter your message or document hash below and press 'Send' to engrave your mark on the blockchain instantly</span>
      </div>
      {/* Body */}
      <div className="overflow-y-auto max-h-full flex flex-col items-center gap-2 mb-2">
        <MessageList />
      </div>

      {/* Footer */}
      <div className="flex items-center text-ei-primary-faded pt-6 border-t-2 bolder solid border-ei-primary-faded/20 gap-3">
        <PaperClip  userFile={userFile} setUserFile={setUserFile} HiddenFileInput={HiddenFileInput} openHiddenFileInput={openHiddenFileInput}/>
        <Input placeholder="Your Message" value={userMessage} onInput={e => setUserMessage(e.currentTarget.value)} isDisabled={userFile ? true : false}/>
        <div className="h-full aspect-square bg-white flex justify-center items-center rounded-2xl p-4 cursor-pointer">
          <FiSend className="text-black h-full w-full" onClick={trySend}/>
        </div>
      </div>

    </div>
  );
}

export default MessageForm;
