import React from "react";
import Plus from "@/components/Svgs/Plus";
import { DropzoneRootProps } from "react-dropzone";

interface Props {
  onDragLeave: React.DragEventHandler<HTMLElement> | undefined;
  onDrop: React.DragEventHandler<HTMLElement> | undefined;
}

function Enter({ onDragLeave, onDrop }: Props) {
  function myDragLeave(e: React.DragEvent<HTMLElement>) {
    e.preventDefault();
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }
    if (onDragLeave) {
      onDragLeave(e);
    }
  }

  return (
    <div
      onDragLeave={myDragLeave}
      onDragEnd={myDragLeave}
      onDragExit={myDragLeave}
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      className="absolute bg-white bg-opacity-80 rounded-2xl top-0 bottom-0 right-0 left-0"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip h-1/3">
        <Plus color="white" className="fill-ei-purple" />
      </div>
    </div>
  );
}

export default Enter;
