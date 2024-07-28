import { TxStatus } from "@/models/transaction";
import { ApiError } from "./errors";

// type ApiResponse<T> = T | ApiError;
type ApiResponse<T> = {
  ok: boolean;
  status_code: number;
  data?: T;
  type?: string;
  error?: ApiError;
};

interface ApiCall<Request, Response = {}> {
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
  is_public: boolean;
}
interface PostRequestEngravingResponse {
  address: string;
  fees: number;
}

/// Tx Status Stream
interface GetTxStatusStream {
  id: string;
}
interface GetTxStatusStreamResponse {
  data: TxStatus | string;
  status: "keep-alive" | "error" | "close";
}

/// Addr to Id
interface GetTxIdFromAddr {
  address: string;
}
interface GetTxIdFromAddrResponse {
  tx_id: string;
}
/// Retrieve Tx
interface GetTxInfo {
  id: string;
}
interface GetTxInfoResponse {
  address: string;
  fees: number;
  status: TxStatus;
  message: string;
  tx_id: string | null;
  cert_id: string | null;
  is_encrypted: boolean;
  is_public: boolean;
}

/// Retrieve Messages
interface IMessage {
  content: string;
  id: string;
  time: string;
  tx_id: string;
}
interface GetMessages {
  after_uuid: string | null;
  items: number;
}
interface GetMessagesResponse {
  messages: IMessage[];
}

/// Post Contact Message
interface PostContactMessage {
  name: string;
  email: string;
  message: string;
}
///
interface GetRequestCertificate {
  id: string;
}
type GetRequestCertificateResponse = Uint8Array;

/// Status
interface GetTxStatus {
  id: string;
}
interface GetTxStatusResponse {
  status: TxStatus;
}

export type {
  PostRequestEngraving,
  PostRequestEngravingResponse,
  GetTxStatusStream,
  GetTxStatusStreamResponse,
  GetTxIdFromAddr,
  GetTxIdFromAddrResponse,
  GetTxInfo,
  GetTxInfoResponse,
  IMessage,
  GetMessages,
  GetMessagesResponse,
  PostContactMessage,
  GetRequestCertificate,
  GetRequestCertificateResponse,
  ApiCall,
  ApiResponse,
  GetTxStatus,
  GetTxStatusResponse,
};
