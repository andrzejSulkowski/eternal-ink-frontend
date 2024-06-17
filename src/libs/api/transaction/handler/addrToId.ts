import { ApiError, ApiCall, GetTxIdFromAddrResponse, GetTxIdFromAddr } from "./../../models";
import CONFIG  from "@/libs/config";
import $fetch from './../../fetch';

const getTxIdFromAddrMockData: GetTxIdFromAddrResponse = {
    tx_id: "87387a2349e21e0019220c6c0011257654625ad9ad5a69bb98cc79b0aaa3965b"
}


const apiCall: ApiCall<GetTxIdFromAddr, GetTxIdFromAddrResponse> = {
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
        const resp = await $fetch<GetTxIdFromAddrResponse>('addr-to-txId/' + data.address, {method: "GET"}); // Either will be PostRequestEngravingResponse or ApiError
        return resp;
    }
}

export default apiCall.call;