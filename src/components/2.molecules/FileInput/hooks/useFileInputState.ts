import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { Props } from "../FileInput";

export enum STATE {
  DEFAULT = "default",
  ENTER = "enter",
  LOADING = "loading",
  FULL = "full",
}
interface UseFileInputStateReturn {
  state: STATE;
}

export const useFileInputState = (
  { file }: Props,
  uploadTimeStamp: React.MutableRefObject<number | null>,
  isDragActive: boolean
): UseFileInputStateReturn => {
  const state: STATE = useMemo(() => {
    if (file) {
      if (
        uploadTimeStamp.current &&
        new Date().getTime() - uploadTimeStamp.current < 5000
      ) {
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
  return { state };
};
