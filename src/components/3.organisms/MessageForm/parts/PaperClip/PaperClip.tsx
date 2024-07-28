"use client";

import { useHiddenFileInput } from "@/hooks/useHiddenFileInput";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiPaperclip } from "react-icons/fi";
import Image from "next/image";
import FileUrlManager from "@/libs/file-url";
import ContextMenu from "./parts/ContextMenu";

interface Props {
  hfi: ReturnType<typeof useHiddenFileInput>;
}

function PaperClip({
  HiddenFileInput,
  openHiddenFileInput,
  userFile,
  setUserFile,
}: ReturnType<typeof useHiddenFileInput>) {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const toggleContextMenu = () => setIsContextMenuOpen(!isContextMenuOpen);

  function swapFile() {
    openHiddenFileInput();
  }
  function deleteFile() {
    setUserFile(null);
    setIsContextMenuOpen(false);
  }

  const contextMenuRef = useRef<HTMLDivElement>(null);
  // Setup and Cleanup
  useEffect(onMounted);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      contextMenuRef.current &&
      !contextMenuRef.current.contains(e.target as Node)
    ) {
      setIsContextMenuOpen(false);
    }
  };
  function onMounted() {
    window.addEventListener("click", handleClickOutside, { capture: true });
    return onUnmounted;
  }
  function onUnmounted() {
    window.removeEventListener("click", handleClickOutside, { capture: true });
    setUserFile(null);
    setIsContextMenuOpen(false);
  }

  return (
    <>
      <div
        ref={contextMenuRef}
        className="h-2/3 aspect-square min-w-6 rotate-180  flex justify-center items-center text-ei-primary-faded relative"
      >
        <HiddenFileInput
          accept={[
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp",
            "application/pdf",
            "application/vnd.ms-excel",
            "application/zip",
          ]}
        />
        <div
          onClick={toggleContextMenu}
          className="relative w-full h-full cursor-pointer"
        >
          {userFile && (
            <aside className="absolute top-6 right-5 rounded-full bg-ei-primary text-xs -rotate-180 aspect-square text-white flex items-center justify-center w-5 opacity-80">
              1
            </aside>
          )}
          <FiPaperclip className="w-full h-full" />
        </div>

        {isContextMenuOpen && (
          <div className="absolute top-20 h-auto w-40 bg-ei-void/90 text-white -rotate-180 flex justify-center items-center px-3 py-2 text-sm rounded-xl select-none">
            <ContextMenu
              userFile={userFile}
              deleteFile={deleteFile}
              swapFile={swapFile}
              openHiddenFileInput={openHiddenFileInput}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default PaperClip;
