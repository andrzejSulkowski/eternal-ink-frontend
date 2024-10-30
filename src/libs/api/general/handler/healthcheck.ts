import {
  ApiCall,
  GetHealthCheck,
  GetHealthCheckResponse,
} from "./../../models";
import CONFIG from "@/libs/config";
import $fetch from "./../../fetch";

const apiCall: ApiCall<GetHealthCheck, GetHealthCheckResponse> = {
  call: async () => {
    if (CONFIG.MOCK_API) {
      return apiCall.mockCall({});
    } else {
      return apiCall.backendCall({});
    }
  },
  mockCall: async () => {
    return {
      ok: true,
      data: {
        network: "Development",
      },
      status_code: 200,
    };
  },
  backendCall: async () => {
    const resp = await $fetch<GetHealthCheckResponse>("healthchecker", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp;
  },
};

export default apiCall.call;
