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
  public async call: (p: Request) => Promise<ApiResponse<Response>>;
  private async mockCall: (p: Request) => Promise<ApiResponse<Response>>;
  private async backendCall: (p: Request) => Promise<ApiResponse<Response>>; 
}

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

export type { PostRequestEngraving, PostRequestEngravingResponse, ApiCall, ApiResponse };
