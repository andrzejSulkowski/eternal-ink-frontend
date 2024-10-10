import {
  PostRequestEngraving,
  PostRequestEngravingResponse,
  ApiError,
  ApiCall,
} from "./../../models";
import CONFIG from "@/libs/config";
import $fetch from "./../../fetch";

const PostRequestEngravingMockData: PostRequestEngravingResponse = {
  address: "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
  fees: 0.0001,
};

function arrayBufferToBase64(buffer: Uint8Array): string {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
}

const postTransaction: ApiCall<
  PostRequestEngraving,
  PostRequestEngravingResponse
> = {
  call: async (data) => {
    if (CONFIG.MOCK_API) {
      return postTransaction.mockCall(data);
    } else {
      return postTransaction.backendCall(data);
    }
  },
  mockCall: async (data) => {
    return {
      ok: true,
      status_code: 200,
      data: PostRequestEngravingMockData,
    };
  },
  backendCall: async (data) => {
    const requestData: Partial<Record<string, string | boolean>> = {
      chain: data.chain,
      type: data.type,
    };

    if (data.type === "Encrypted") {
      requestData.encrypted_data = arrayBufferToBase64(data.encrypted_data);
      requestData.salt = arrayBufferToBase64(data.salt);
      requestData.iv = arrayBufferToBase64(data.iv);
    } else if (data.type === "File") {
      requestData.file_hash = arrayBufferToBase64(data.file_hash);
    } else if (data.type === "Message") {
      requestData.message = data.message;
      requestData.is_public = data.is_public;
    } else {
      throw new Error("Invalid request data");
    }

    const resp = await $fetch<PostRequestEngravingResponse>(
      "request-engraving",
      {
        body: JSON.stringify(requestData),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return resp;
  },
};

export default postTransaction.call;
