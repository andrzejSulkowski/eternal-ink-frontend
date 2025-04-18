"use client";

import { GetTxStatusStream } from "./../../models";
import CONFIG from "@/libs/config";

const getTxStatusStream = {
  call: (data: GetTxStatusStream) => {
    if (CONFIG.MOCK_API) {
      return getTxStatusStream.mockCall(data);
    } else {
      return getTxStatusStream.backendCall(data);
    }
  },
  mockCall: (data: GetTxStatusStream) => {
    return new EventSource(CONFIG.MOCK_BACKEND_URL + "tx-stream/" + data.id);
  },
  backendCall: (data: GetTxStatusStream) => {
    return new EventSource(CONFIG.BACKEND_URL + "tx-stream/" + data.id);
  },
};

export default getTxStatusStream.call;
