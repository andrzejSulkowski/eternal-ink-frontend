// request-engraving-cert/:id
import {
  GetRequestCertificate,
  GetRequestCertificateResponse,
  ApiCall,
} from "./../../models";
import CONFIG from "@/libs/config";
import $fetch from "./../../fetch";

const PostRequestEngravingMockData: GetRequestCertificateResponse =
  new Uint8Array(0);

const postTransaction: ApiCall<
  GetRequestCertificate,
  GetRequestCertificateResponse
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
    const resp = await $fetch<GetRequestCertificateResponse>(
      "request-engraving-cert/" + data.id,
      { method: "GET" }
    ); // Either will be PostRequestEngravingResponse or ApiError
    return resp;
  },
};

export default postTransaction.call;
