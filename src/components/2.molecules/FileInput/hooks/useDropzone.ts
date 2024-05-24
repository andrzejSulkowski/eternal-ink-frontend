import React from "react";
import { Props } from "../FileInput";

export const useDropzone = (
  { onInput }: Props,
  uploadTimeStamp: React.MutableRefObject<number | null>
) => {
  const [isDragActive, setIsDragActive] = React.useState(false);

  const dragEnter = (e: React.DragEvent<HTMLElement>) => setIsDragActive(true);
  const dragLeave = (e: React.DragEvent<HTMLElement>) => setIsDragActive(false);
  const drop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onInput(files[0] || null);
      uploadTimeStamp.current = new Date().getTime();
    }
    setIsDragActive(false);
  };

  return { isDragActive, dragEnter, dragLeave, drop };
};
