"use client";
import { useCallback, useEffect, useState } from "react";
import PasswordInput from "./PasswordInput";
import Input from "@/components/1.atoms/Input/Input";
import Button from "@/components/1.atoms/Button/Button";
import ThreeStars from "@/components/Svgs/ThreeStars";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import { decrypt as $decrypt } from "@/utils/crypto";

interface Props {
  encryptedBase64: string;
  onEncrypted: (decrypted: string) => void;
}

function ProtectedTx({ encryptedBase64, onEncrypted }: Props) {
  const [password, setPassword] = useState("");
  const [salt, setSalt] = useState("");
  const [iv, setIv] = useState("");
  const [finished, setFinished] = useState<boolean>(false);

  const { showBanner } = useBanner();

  const clear = useCallback(() => {
    setPassword("");
    setSalt("");
    setIv("");
  }, [setPassword, setSalt, setIv]);

  const decrypt = useCallback(() => {
    try {
      const messageBuffer = Buffer.from(encryptedBase64, "base64");
      const saltBuffer = Buffer.from(salt, "base64");
      const ivBuffer = Buffer.from(iv, "base64");

      const decrypted = $decrypt({
        data: new Uint8Array(messageBuffer),
        salt: new Uint8Array(saltBuffer),
        iv: new Uint8Array(ivBuffer),
        password: password,
      });

      if (decrypted) {
        onEncrypted(decrypted);
        showBanner("Decrypted Successfully", { danger: false });
        clear();
        setFinished(true);
      } else {
        showBanner("Incorrect password");
      }
    } catch (e) {
      console.log("error", e);
      showBanner("Incorrect Password");
    }
  }, [password, salt, iv, showBanner, setPassword, clear, setFinished]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        decrypt();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [decrypt]);

  return (
    <>
      <div className="mt-8 flex flex-col gap-4">
        <div>
          <PasswordInput
            autofocus={true}
            onChange={(e) => setPassword(e.currentTarget.value)}
            password={password}
            className={`mt-8`}
            disabled={finished}
          />
        </div>
        <div>
          <Input
            autofocus={false}
            onChange={(e) => setSalt(e.currentTarget.value)}
            placeholder="Salt*"
            value={salt}
            isDisabled={finished}
          />
        </div>
        <div>
          <Input
            autofocus={false}
            onChange={(e) => setIv(e.currentTarget.value)}
            placeholder="Initialization Vector (IV)*"
            value={iv}
            isDisabled={finished}
          />
        </div>
      </div>
      <Button className={`!w-1/3 mt-8 !justify-center`} onClick={decrypt}>
        {"Decrypt"}
        <ThreeStars className="max-w-5 ml-2" />
      </Button>
    </>
  );
}

export default ProtectedTx;
