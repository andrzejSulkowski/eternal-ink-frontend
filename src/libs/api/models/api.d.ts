import { TxStatus } from "@/models/transaction";
import { ApiError } from "./errors";

// type ApiResponse<T> = T | ApiError;
type ApiResponse<T> = {
  ok: boolean;
  status_code: number;
  data?: T;
  error?: ApiError;
};

interface ApiCall<Request, Response> {
  // EIApiCall can be of type T or ApiError
  call: (p: Request) => Promise<ApiResponse<Response>>;
  mockCall: (p: Request) => Promise<ApiResponse<Response>>;
  backendCall: (p: Request) => Promise<ApiResponse<Response>>; 
}

/// Post Request Engraving
interface PostRequestEngraving {
  chain: "btc";
  message: string;
  is_file: boolean;
  is_encrypted: boolean;
  password: string | null;
  is_public: boolean;
}
interface PostRequestEngravingResponse {
  address: string;
  fees: number;
}

/// Tx Status Stream
interface GetTxStatusStream {
  id: string
}
interface GetTxStatusStreamResponse {
  data: TxStatus | string,
  status: 'keep-alive' | 'error' | 'close'
}

/// Addr to Id
interface GetTxIdFromAddr {
  address: string
}
interface GetTxIdFromAddrResponse {
  tx_id: string
}
/// Retrieve Tx
interface GetTxInfo {
  tx_id: string
}
interface GetTxInfoResponse {
  status: TxStatus,
  message: string,
  tx_id: string | null,
  cert_id: string | null,
  is_encrypted: boolean
}

export type { 
  PostRequestEngraving, PostRequestEngravingResponse, GetTxStatusStream, GetTxStatusStreamResponse, 
  GetTxIdFromAddr, GetTxIdFromAddrResponse,
  GetTxInfo, GetTxInfoResponse,
  ApiCall, ApiResponse 
};
