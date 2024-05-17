import React, { useRef, useCallback } from "react";

interface UseFileInputReturn {
  HiddenFileInput: () => React.JSX.Element;
  openHiddenFileInput: () => void;
}

export const useHiddenFileInput = (
  onFileSelect: (file: File | null) => void
): UseFileInputReturn => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    } else {
      onFileSelect(null);
    }
  };


  const HiddenFileInput = () => (
    <input
      type="file"
      hidden
      ref={fileInputRef}
      onChange={handleFileChange}
    />
  );

  const openHiddenFileInput = () => {
    fileInputRef.current?.click();
  };

  return { HiddenFileInput, openHiddenFileInput };
};
