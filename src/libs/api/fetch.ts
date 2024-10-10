import CONFIG from "@/libs/config";
import { ApiResponse, ApiError } from "./models";

const $fetch = async <T>(
  endpoint: string,
  init?: RequestInit
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(CONFIG.BACKEND_URL + endpoint, init);
    if (!response.ok) {
      const error: ApiError = await response.json();
      return {
        ok: false,
        status_code: response.status,
        error: error,
      };
    }

    try {
      const { body, type } = await getResponseBody<T>(response);
      return {
        ok: true,
        status_code: response.status,
        data: body,
        type,
      };
    } catch (jsonError) {
      // Handle cases where response is not JSON
      return {
        ok: false,
        status_code: response.status,
        error: {
          type: "InternalError",
          detail: "Unexpected end of JSON input",
        } satisfies ApiError,
      };
    }
  } catch (e: any) {
    console.log("received error: ", e)
    return {
      ok: false,
      status_code: 0,
      error: {
        type: "NetworkError",
        detail: e.message,
      } satisfies ApiError,
    };
  }
};

async function getResponseBody<T>(
  response: Response
): Promise<{ body: T; type: string }> {
  const contentType = response.headers.get("Content-Type") || "";

  let body: T | undefined = undefined;
  if (contentType.includes("application/json")) {
    body = (await response.json()) as T;
  } else if (contentType.includes("text/plain")) {
    body = (await response.text()) as T;
  } else {
    body = (await response.blob()) as T;
  }
  return {
    body,
    type: contentType,
  };
}

export default $fetch;
