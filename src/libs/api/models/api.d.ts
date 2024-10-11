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

type PostRequestEngravingMessage = {
  type: "Message";
  message: string;
  is_public: boolean;
};
type PostRequestEngravingFile = {
  type: "File";
  file_hash: Uint8Array;
};
type PostRequestEngravingEncrypted = {
  type: "Encrypted";
  encrypted_data: Uint8Array;
  salt: Uint8Array;
  iv: Uint8Array;
};
/// Post Request Engraving
type PostRequestEngraving = { chain: "btc" } & (
  | PostRequestEngravingMessage
  | PostRequestEngravingFile
  | PostRequestEngravingEncrypted
);

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
  data: string; //base64
  tx_id: string | null;
  cert_id: string | null;
  is_encrypted: boolean;
  is_public: boolean;
  is_file: boolean;
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

/// Cancel
interface PostCancelTx {
  id: string;
}
interface PostCancelTxResponse {}

/// Consent
type PostConsent = {
  id: string;
  terms_and_conditions: true;
} & (
  | { email: string; consent_to_contact: boolean }
  | { email: undefined; consent_to_contact: false }
);
type PostConsentResponse = {};

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
  PostCancelTx,
  PostCancelTxResponse,
  PostConsent,
  PostConsentResponse,
};
