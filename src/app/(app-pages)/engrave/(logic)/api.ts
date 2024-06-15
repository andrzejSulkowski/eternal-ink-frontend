import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import api from "@/libs/api/transaction";
import bcryptjs from "bcryptjs";
import { ToggleKeys } from "../(client)/Body";

const SALT = 10;

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

  let passwordHashed: string | null = null;
  try {
    passwordHashed = await hashPassword(password, toggleKey);
  } catch (e) {
    const errorMsg = e as any as string;
    showBanner(errorMsg);
    return;
  }

  const response = await api.postRequestEngraving({
    chain: "btc",
    message: message,
    is_file: file !== null,
    password: passwordHashed,
    is_encrypted: toggleKey === "encrypt",
    is_public: toggleKey === "public",
  });
  if (response.ok) {
    return response;
  } else {
    const error = response.error!;
    showBanner(`Error: ${error.type} - type: ${error.detail}`);
    console.warn("Error: ", error);
    return response;
  }
};

const hashPassword = async (password: string | null, toggleKey: ToggleKeys) => {
  if (password === null) {
    return null;
  } else if (toggleKey === "encrypt" && password.length === 0) {
    throw new Error("Please enter a password");
  } else {
    return await bcryptjs.hash(password, SALT);
  }
};

export { startEngraving };
