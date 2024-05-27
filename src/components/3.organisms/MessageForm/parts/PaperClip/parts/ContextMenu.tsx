import React, { useMemo } from "react";
import Image from "next/image";
import FileUrlManager from "@/libs/file-url";

interface Props {
  userFile: File | null;
  deleteFile: () => void;
  swapFile: () => void;
  openHiddenFileInput: () => void;
}

function ContextMenu({
  userFile,
  deleteFile,
  swapFile,
  openHiddenFileInput,
}: Props): React.JSX.Element {
  const userFileUrl = useMemo(() => {
    if (userFile) {
      const fileUrlManager = new FileUrlManager(userFile);
      return fileUrlManager.getURL();
    }
    return null;
  }, [userFile]);

  const ContextMenuDefault = () => (
    <div className="cursor-pointer" onClick={openHiddenFileInput}>
      Add File
    </div>
  );

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

  return (
    <>{userFile === null ? <ContextMenuDefault /> : <ContextMenuFile />}</>
  );
}

export default ContextMenu;
