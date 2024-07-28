import { MimeType } from "@/libs/mime-types/types";
import React, { useRef, useCallback, useState } from "react";

interface HiddenFileInputProps {
  accept: MimeType[];
}
interface UseFileInputReturn {
  HiddenFileInput: (props: HiddenFileInputProps) => React.JSX.Element;
  openHiddenFileInput: () => void;
  userFile: File | null;
  setUserFile: (file: File | null) => void;
}

export const useHiddenFileInput = (
  onNewFile?: (file: File | null) => void
): UseFileInputReturn => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [userFile, setInternUserFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUserFile(files[0]);
    } else {
      setUserFile(null);
    }
  };

  const setUserFile = (file: File | null) => {
    setInternUserFile(file);
    onNewFile && onNewFile(file);
  };

  const HiddenFileInput = ({ accept }: HiddenFileInputProps) => (
    <input
      type="file"
      accept={accept.map((t) => t as string).reduce((t) => t)}
      hidden
      ref={fileInputRef}
      onChange={handleFileChange}
    />
  );

  const openHiddenFileInput = () => {
    fileInputRef.current?.click();
  };

  return { HiddenFileInput, openHiddenFileInput, userFile, setUserFile };
};
