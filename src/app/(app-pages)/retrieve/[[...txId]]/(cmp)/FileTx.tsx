"use client";

import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import Button from "@/components/1.atoms/Button/Button";
import FileInput from "@/components/2.molecules/FileInput/FileInput";
import ThreeStars from "@/components/Svgs/ThreeStars";
import { useCallback, useMemo, useState } from "react";
import { hash } from "@/utils/crypto";

interface Props {
  base64EncodedFileHash: string;
}

function FileCompare({ base64EncodedFileHash }: Props) {
  const [file, $setFile] = useState<File | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const hashFile = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
    const hashArray = new Uint8Array(hashBuffer);
    const hashBase64 = window.btoa(String.fromCharCode(...hashArray));
    return hashBase64;
  };

  const { showBanner } = useBanner();
  const compare = useCallback(async () => {
    if (!file) return;

    const currentFileHash = await hash(file);
    const currentFileHashBase64 =
      Buffer.from(currentFileHash).toString("base64");
    if (currentFileHashBase64 === base64EncodedFileHash) {
      showBanner("File hashes match", { danger: false });
      setSuccess(true);
    } else {
      showBanner("File hashes do not match");
      setSuccess(false);
    }
  }, [file, base64EncodedFileHash, showBanner]);

  const FeedbackMessage = useMemo(() => {
    if (success === true) {
      return <span className="text-ei-success">File Hashes Match!</span>;
    } else if (success === false) {
      return <span className="text-ei-danger">File Hash does not Match</span>;
    } else {
      return null;
    }
  }, [success]);

  const setFile = useCallback(
    (file: File | null) => {
      $setFile(file);
      setSuccess(null);
    },
    [$setFile, setSuccess]
  );

  return (
    <>
      <Button className={`!w-1/3 mt-8 !justify-center`} onClick={compare}>
        {"Compare"}
        <ThreeStars className="max-w-5 ml-2" />
      </Button>
      <span className="font-bold text-sm block mb-4 mt-8">
        {FeedbackMessage}
      </span>
      <FileInput
        allowedMimeTypes={[
          "image/jpeg",
          "image/jpg",
          "image/png",
          "image/webp",
          "application/pdf",
          "application/vnd.ms-excel",
          "application/zip",
        ]}
        onInput={setFile}
        file={file}
      />
    </>
  );
}

export default FileCompare;
