import { PostRequestEngraving, PostRequestEngravingResponse, ApiError, ApiCall} from "./../../models";
import CONFIG  from "@/libs/config";
import $fetch from './../../fetch';

const PostRequestEngravingMockData: PostRequestEngravingResponse = {
    address: "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
    fees: 0.0001
}


const postTransaction: ApiCall<PostRequestEngraving, PostRequestEngravingResponse> = {
    call: async (data) => {
        if (CONFIG.MOCK_API) {
            return postTransaction.mockCall(data);
        }else {
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
        const resp = await $fetch<PostRequestEngravingResponse>('request-engraving', {body: JSON.stringify(data), method: "POST"}); // Either will be PostRequestEngravingResponse or ApiError
        return resp;
    }
}

export default postTransaction.call;