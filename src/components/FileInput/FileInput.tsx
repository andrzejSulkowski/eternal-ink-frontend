import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { MimeType } from "@/libs/mime-types/types";
import InfoBanner from "@/components/FileInput/parts/InfoBanner/InfoBanner";
import { useDropzone } from "react-dropzone";

// States
import Default from "./states/Default";
import Enter from "./states/Enter";
import Loading from "./states/Loading";
import Full from "./states/Full";

interface Props {
  file?: File;
  allowedMimeTypes: MimeType[];
  onInput: (f: File | null) => void;
}
enum STATE {
  DEFAULT = "default",
  ENTER = "enter",
  LOADING = "loading",
  FULL = "full",
}

///TODO: The first div has a fixed padding. I'd like to make it to try to have py-14 and px-44 but it is more important that the text does not break into another line.
function FileInput({ file, allowedMimeTypes, onInput }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  let uploadTimeStamp: number | null = null;

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles.at(0);
    uploadTimeStamp = new Date().getTime();
    onInput(file || null);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const state: STATE = useMemo(() => {
    if (file) {
      if (uploadTimeStamp && new Date().getTime() - uploadTimeStamp < 5000) {
        return STATE.LOADING;
      } else {
        return STATE.FULL;
      }
    } else if (isDragActive) {
      return STATE.ENTER;
    } else {
      return STATE.DEFAULT;
    }
  }, [file, isDragActive, uploadTimeStamp]);
  const progress = useMemo(() => (file ? 100 : 0), [file]);

  const componentMap = {
    default: Default,
    enter: Enter,
    loading: () => <Loading progress={progress} />,
    full: Full,
  };
  const StateComponent = componentMap[state] || Default;
  const getCursor = useMemo(() => {
    switch (state) {
      case STATE.DEFAULT:
        return "cursor-pointer";
      case STATE.ENTER:
        return "cursor-grabbing";
      default:
        return "cursor-not-allowed";
    }
  }, [state])

  return (
    <>
      <input type="file" hidden ref={inputRef} {...getInputProps()} />
      <div
        {...getRootProps()}
        className={[
          "py-14 px-44 border border-dashed rounded-2xl flex justify-center items-center text-white font-manrope text-sm font-bold bg-light-purple mb-4 relative",
          "w-full",
          getCursor
        ].join(" ")}
      >
        <StateComponent />
      </div>

      <InfoBanner allowedMimeTypes={allowedMimeTypes} />
    </>
  );
}

export default FileInput;
