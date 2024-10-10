import { ApiCall, PostCancelTx, PostCancelTxResponse } from "./../../models";
import CONFIG  from "@/libs/config";
import $fetch from './../../fetch';

const getTxIdFromAddrMockData: PostCancelTxResponse = {}


const apiCall: ApiCall<PostCancelTx, PostCancelTxResponse> = {
    call: async (data) => {
        if (CONFIG.MOCK_API) {
            return apiCall.mockCall(data);
        }else {
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
        const resp = await $fetch<PostCancelTxResponse>('cancel-engraving/' + data.id, { method: "POST" });
        return resp;
    }
}

export default apiCall.call;