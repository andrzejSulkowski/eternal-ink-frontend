'use client';

import {
  ApiError,
  ApiCall,
  GetTxStatusStream,
  GetTxStatusStreamResponse,
} from "./../../models";
import { TxStatus } from "@/models/transaction";
import CONFIG from "@/libs/config";
import $fetch from "./../../fetch";
import { useEffect } from "react";

const getTxStatusStream = {
  call: (data: GetTxStatusStream) => {
    if (CONFIG.MOCK_API) {
      return getTxStatusStream.mockCall(data);
    } else {
      return getTxStatusStream.backendCall(data);
    }
  },
  mockCall: (data: GetTxStatusStream) => {
    return new EventSource(CONFIG.MOCK_BACKEND_URL + "engrave/tx-stream/" + data.id); 
  },
  backendCall: (data: GetTxStatusStream) => {
    return new EventSource(CONFIG.BACKEND_URL + "engrave/tx-stream/" + data.id);
  },
};

export default getTxStatusStream.call;
