import { ApiCall, PostContactMessage } from "./../../models";
import CONFIG from "@/libs/config";
import $fetch from "./../../fetch";

const apiCall: ApiCall<PostContactMessage> = {
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
    };
  },
  backendCall: async (data) => {
    const body: BodyInit = JSON.stringify(data);
    const resp = await $fetch<PostContactMessage>("contact-msg", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    }); // Either will be PostRequestEngravingResponse or ApiError
    return resp;
  },
};

export default apiCall.call;
