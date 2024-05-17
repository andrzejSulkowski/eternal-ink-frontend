"use client";

import { useHiddenFileInput } from "@/hooks/useHiddenFileInput";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiPaperclip } from "react-icons/fi";
import Image from "next/image";
import FileUrlManager from "@/libs/file-url";

interface Props {
  hfi: ReturnType<typeof useHiddenFileInput>
}

function PaperClip({ HiddenFileInput, openHiddenFileInput, userFile, setUserFile }: ReturnType<typeof useHiddenFileInput>) {

  const userFileUrl = useMemo(() => {
    if (userFile) {
      const fileUrlManager = new FileUrlManager(userFile);
      return fileUrlManager.getURL();
    }
    return null;
  }, [userFile]);

  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const toggleContextMenu = () => setIsContextMenuOpen(!isContextMenuOpen);

  function swapFile() {
    openHiddenFileInput();
  }
  function deleteFile() {
    setUserFile(null);
    setIsContextMenuOpen(false);
  }
  const ContextMenuFile = () => (
    <div className="w-full h-full flex flex-col items-start">
      <div className="flex pb-3 justify-between items-center font-bold gap-1 overflow-hidden max-w-full border-b-[1px] border-solid border-ei-primary-dark">
        <Image
          width={40}
          height={40}
          className="aspect-square border border-solid border-ei-primary-dark rounded-md object-contain"
          src={userFileUrl ?? ""}
          alt="Uploaded Image From the User"
        />
        <div className="flex-1 min-w-0">
          <span className="truncate block">{userFile?.name}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <span
          onClick={deleteFile}
          className="text-ei-danger cursor-pointer py-2"
        >
          Remove File
        </span>
        <span onClick={swapFile} className="cursor-pointer py-2">
          Swap File
        </span>
      </div>
    </div>
  );

  const ContextMenuDefault = () => (
    <div className="cursor-pointer" onClick={openHiddenFileInput}>
      Add File
    </div>
  );

  const ContextMenu = () => (
    <div className="absolute top-20 h-auto w-40 bg-ei-void/90 text-white -rotate-180 flex justify-center items-center px-3 py-2 text-sm rounded-xl select-none">
      {userFile === null ? <ContextMenuDefault /> : <ContextMenuFile />}
    </div>
  );

  const contextMenuRef = useRef<HTMLDivElement>(null);
  // Setup and Cleanup
  useEffect(onMounted, []);

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
        <HiddenFileInput />
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

        {isContextMenuOpen && <ContextMenu />}
      </div>
    </>
  );
}

export default PaperClip;
