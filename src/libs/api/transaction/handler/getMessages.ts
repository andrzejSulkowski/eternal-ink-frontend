import {
  ApiError,
  ApiCall,
  GetMessages,
  GetMessagesResponse,
} from "./../../models";
import CONFIG from "@/libs/config";
import $fetch from "./../../fetch";

const getMessagesMockData: GetMessagesResponse = {
  messages: [
    {
      content: "Hello World",
      id: "1",
      time: "2021-07-07T15:00:00Z",
      tx_id: "74d768c052c5e4ca97aa4700d3017b1b2518b3fbc33c4f296595e050ae172b10",
    },
    {
      content: "Hello World 2",
      id: "2",
      time: "2021-07-07T15:00:00Z",
      tx_id: "74d768c052c5e4ca97aa4700d3017b1b2518b3fbc33c4f296595e050ae172b10",
    },
    {
        content: "Hello World 3",
        id: "3",
        time: "2021-07-07T15:00:00Z",
        tx_id: "74d768c052c5e4ca97aa4700d3017b1b2518b3fbc33c4f296595e050ae172b10"
    },
    {
        content: "Hello World 4",
        id: "4",
        time: "2021-07-07T15:00:00Z",
        tx_id: "74d768c052c5e4ca97aa4700d3017b1b2518b3fbc33c4f296595e050ae172b10"
    },
    {
        content: "Hello World 5",
        id: "5",
        time: "2021-07-07T15:00:00Z",
        tx_id: "74d768c052c5e4ca97aa4700d3017b1b2518b3fbc33c4f296595e050ae172b10"
    },
    {
        content: "Hello World 6",
        id: "6",
        time: "2021-07-07T15:00:00Z",
        tx_id: "74d768c052c5e4ca97aa4700d3017b1b2518b3fbc33c4f296595e050ae172b10"
    },
    {
        content: "Hello World 7",
        id: "7",
        time: "2021-07-07T15:00:00Z",
        tx_id: "74d768c052c5e4ca97aa4700d3017b1b2518b3fbc33c4f296595e050ae172b10"
    },
    {
        content: "Hello World 8",
        id: "8",
        time: "2021-07-07T15:00:00Z",
        tx_id: "74d768c052c5e4ca97aa4700d3017b1b2518b3fbc33c4f296595e050ae172b10"
    },
    {
        content: "Hello World 9",
        id: "9",
        time: "2021-07-07T15:00:00Z",
        tx_id: "74d768c052c5e4ca97aa4700d3017b1b2518b3fbc33c4f296595e050ae172b10"
    },
    {
        content: "Hello World 10",
        id: "10",
        time: "2021-07-07T15:00:00Z",
        tx_id: "74d768c052c5e4ca97aa4700d3017b1b2518b3fbc33c4f296595e050ae172b10"
    }
  ],
};

const apiCall: ApiCall<GetMessages, GetMessagesResponse> = {
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
      data: getMessagesMockData,
    };
  },
  backendCall: async (data) => {
    const params = new URLSearchParams();
    if (data.after_uuid) {
      params.append("after_uuid", data.after_uuid);
    }
    params.append("items", data.items.toString());
    const url = `get-messages/?${params.toString()}`;

    const resp = await $fetch<GetMessagesResponse>(url, { method: "GET" });
    return resp;
  },
};

export default apiCall.call;
