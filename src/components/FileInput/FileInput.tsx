import React, { useCallback, useEffect, useRef, useState } from "react";
import { MimeType } from "@/libs/mime-types/types";
import InfoBanner from "@/components/InfoBanner/InfoBanner";
import Plus from "@/components/Svgs/Plus";
import {useDropzone} from 'react-dropzone'

interface Props {
  file?: File;
  allowedMimeTypes: MimeType[];
  onInput: (f: File | null) => void;
}

///TODO: The first div has a fixed padding. I'd like to make it to try to have py-14 and px-44 but it is more important that the text does not break into another line.
function FileInput({ file, allowedMimeTypes, onInput }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file && allowedMimeTypes.includes(file.type as MimeType)) {
      onInput(file);
    } else {
      onInput(null);
    }
  };

  const click = () => {
    if (inputRef && typeof inputRef === "object") inputRef.current?.click();
  };

  const drop = (e: React.DragEvent<HTMLDivElement>) => console.log("e: ", e);

  const stateStyles = {
    default: "",
    enter: "", // lets make the backround more whiteish and add a plus sign in the middle
    loading: "", // When we dropped a file inside and it is being processed
    full: "", // When we reached the maximum number of files being able to be uploaded
  };
  const [state, setState] = useState<keyof typeof stateStyles>("default");

  const getStyles = () => stateStyles[state];
  const [dragCounter, setDragCounter] = useState(0);
  function dragEnter(e: React.DragEvent<HTMLDivElement>) {
    setDragCounter((c) => {
      return c + 1;
    });

    console.log("dragEnter - dragCounter: ", dragCounter);
    if (dragCounter > 0) {
      setState("enter");
    }
  }
  function dragStop(e: React.DragEvent<HTMLDivElement>) {
    setDragCounter((c) => {
      return c - 1;
    });

    console.log("dragStop - dragCounter: ", dragCounter);
    if (dragCounter === 0) {
      setState("default");
    }
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <>
      <div
        onClick={click}
        onDragEnter={dragEnter}
        className={[
          "py-14 px-44 border border-dashed rounded-2xl flex justify-center items-center text-white font-manrope text-sm font-bold bg-light-purple cursor-pointer mb-4 relative",
          getStyles(),
        ].join(" ")}
      >
        {state === "enter" && (
          <div
            className="absolute w-full h-full bg-white bg-opacity-80 z-10 rounded-2xl"
          >
            <div
              onDragLeave={dragStop}
              onDrop={drop}
              data-overlay
              className="absolute w-full h-full bg-transparent z-20 rounded-2xl"
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip h-1/3">
              <Plus color="white" className="fill-purple" />
            </div>
          </div>
        )}

        <input type="file" hidden ref={inputRef} onChange={handleChange} />
        <div className="text-nowrap">
          <span className={state !== "default" ? "visible" : "visible"}>
            Drag Your File In Here or{" "}
            <span className="text-purple">Select from Device</span>
          </span>
        </div>
      </div>
      <InfoBanner allowedMimeTypes={allowedMimeTypes} />
    </>
  );
}

export default FileInput;
