import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import api from "@/libs/api/transaction";
import { ToggleKeys } from "../(cmp)/Body";
import { encrypt, hash } from "@/utils/crypto";
import { PostRequestEngraving } from "@/libs/api/models";

const startEngraving = async (
  message: string,
  file: File | null,
  password: string | null,
  toggleKey: ToggleKeys,
  { showBanner }: ReturnType<typeof useBanner>
) => {
  if (message.length === 0 && file === null) {
    showBanner("Please enter a message or upload a file");
    return;
  }

  let messageEncrypted:
    | string
    | { data: Uint8Array; iv: Uint8Array; salt: Uint8Array }
    | null = null;
  try {
    if (
      toggleKey === "encrypt" &&
      (password === null || password.length === 0)
    ) {
      showBanner("Please enter a password");
      return;
    } else if (toggleKey === "encrypt" && password && password.length > 0) {
      messageEncrypted = encrypt(message, password);
    }
  } catch (e) {
    const error = e as any as Error;
    showBanner(error.message);
    return;
  }

  const isFile = file !== null;
  const fileHash = isFile ? await hash(file) : null;

  const engravingData = isFile ? fileHash! : messageEncrypted ?? message;

  let requestData: PostRequestEngraving | null = null;

  if (
    (toggleKey === "public" || toggleKey === "neither") &&
    !isFile &&
    messageEncrypted === null &&
    typeof engravingData === "string"
  ) {
    //Message
    requestData = {
      chain: "btc",
      type: "Message",
      message: engravingData,
      is_public: true,
    };
  } else if (isFile && fileHash) {
    //File
    requestData = {
      chain: "btc",
      type: "File",
      file_hash: fileHash,
    };
  } else if (messageEncrypted) {
    //Encrypted
    requestData = {
      chain: "btc",
      type: "Encrypted",
      encrypted_data: messageEncrypted.data,
      iv: messageEncrypted.iv,
      salt: messageEncrypted.salt,
    };
  } else {
    console.error(
      `Error before post request engraving - message: ${message}, file: ${file}, password.length: ${password?.length}, toggleKey: ${toggleKey}`
    );
    throw new Error("Invalid request data");
  }

  const response = await api.postRequestEngraving(requestData);

  if (response.ok) {
    return response;
  } else {
    const error = response.error!;
    showBanner(`Error: ${error.type} - type: ${error.detail}`);
    return response;
  }
};

export { startEngraving };
