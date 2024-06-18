import { ApiCall, GetTxInfo, GetTxInfoResponse } from "./../../models";
import CONFIG  from "@/libs/config";
import $fetch from './../../fetch';
import { TxStatus } from "@/models";
import { encrypt } from "@/utils/crypto";

const getTxInfoMockData: GetTxInfoResponse = {
    status: TxStatus.Finalized,
    message: encrypt("Mock Message, Ald What if I keep writing a text further!", "password"),
    tx_id: "87387a2349e21e0019220c6c0011257654625ad9ad5a69bb98cc79b0aaa3965b",
    cert_id: "14302c68-9224-5ae1-af88-6a6a12312b5a",
    is_encrypted: true
}

const apiCall: ApiCall<GetTxInfo, GetTxInfoResponse> = {
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
            data: getTxInfoMockData,
        };
    },
    backendCall: async (data) => {
        const resp = await $fetch<GetTxInfoResponse>('get-tx/' + data.tx_id, {method: "GET"}); // Either will be PostRequestEngravingResponse or ApiError
        return resp;
    }
}

export default apiCall.call;