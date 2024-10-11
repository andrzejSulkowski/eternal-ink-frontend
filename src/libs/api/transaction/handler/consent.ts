import { ApiCall, PostConsent, PostConsentResponse } from "./../../models";
import CONFIG from "@/libs/config";
import $fetch from "./../../fetch";

const postConsentResponse: PostConsentResponse = {};

const apiCall: ApiCall<PostConsent, PostConsentResponse> = {
  call: async (data) => {
    if (CONFIG.MOCK_API) {
      return apiCall.mockCall(data);
    } else {
      return apiCall.backendCall(data);
    }
  },
  mockCall: async (data) => {
    return {
      ok: true,
      status_code: 200,
      data: postConsentResponse,
    };
  },
  backendCall: async (data) => {
    const resp = await $fetch<PostConsentResponse>("give-consent", {
      body: JSON.stringify(data),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    return resp;
  },
};

export default apiCall.call;
