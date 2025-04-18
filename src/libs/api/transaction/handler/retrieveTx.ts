import { ApiCall, GetTxInfo, GetTxInfoResponse } from "./../../models";
import CONFIG from "@/libs/config";
import $fetch from "./../../fetch";
import { TxStatus } from "@/models";

const getTxInfoMockData: GetTxInfoResponse = {
  status: TxStatus.Finalized,
  data: "TW9jayBNZXNzYWdlLCBBbGQgV2hhdCBpZiBJIGtlZXAgd3JpdGluZyBhIHRleHQgZnVydGhlciE=",
  tx_id: "87387a2349e21e0019220c6c0011257654625ad9ad5a69bb98cc79b0aaa3965b",
  cert_id: "14302c68-9224-5ae1-af88-6a6a12312b5a",
  is_encrypted: false,
  is_public: false,
  is_file: false,
  address: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
  fees: 1000,
};

const apiCall: ApiCall<GetTxInfo, GetTxInfoResponse> = {
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
      data: getTxInfoMockData,
    };
  },
  backendCall: async (data) => {
    const resp = await $fetch<GetTxInfoResponse>("get-tx/" + data.id, {
      method: "GET",
    }); // Either will be PostRequestEngravingResponse or ApiError
    return resp;
  },
};

export default apiCall.call;
