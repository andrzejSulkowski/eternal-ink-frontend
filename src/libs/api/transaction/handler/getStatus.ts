import { ApiCall, GetTxStatus, GetTxStatusResponse } from "./../../models";
import CONFIG from "@/libs/config";
import $fetch from "./../../fetch";
import { TxStatus } from "@/models";

const getTxIdFromAddrMockData: GetTxStatusResponse = {
  status: TxStatus.WaitingForFunds,
};

const apiCall: ApiCall<GetTxStatus, GetTxStatusResponse> = {
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
      data: getTxIdFromAddrMockData,
    };
  },
  backendCall: async (data) => {
    const resp = await $fetch<GetTxStatusResponse>("tx-status/" + data.id, {
      method: "GET",
    });
    return resp;
  },
};

export default apiCall.call;
