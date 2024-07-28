import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import api from "@/libs/api/transaction";
import { ToggleKeys } from "../(cmp)/Body";
import { encrypt } from "@/utils/crypto";

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
    if (
      toggleKey === "encrypt" &&
      (password === null || password.length === 0)
    ) {
    } else if (toggleKey === "encrypt" && password && password.length > 0) {
      passwordHashed = encrypt(message, password);
    }
  } catch (e) {
    const error = e as any as Error;
    showBanner(error.message);
    return;
  }

  const response = await api.postRequestEngraving({
    chain: "btc",
    message: message,
    is_file: file !== null,
    is_encrypted: toggleKey === "encrypt",
    is_public: toggleKey === "public",
  });
  if (response.ok) {
    return response;
  } else {
    const error = response.error!;
    showBanner(`Error: ${error.type} - type: ${error.detail}`);
    return response;
  }
};

export { startEngraving };
