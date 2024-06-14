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
    return {
      ok: true,
      status_code: response.status,
      data: await response.json(),
    };
  } catch (e: any) {
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

export default $fetch;
