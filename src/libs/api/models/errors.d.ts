type ErrorType =
  | "LOGIN_FAIL"
  | "NO_AUTH"
  | "ENTITY_NOT_FOUND"
  | "API_REQUEST_INVALID"
  | "API_REQUEST_METHOD_UNKNOWN"
  | "API_PARAMS_INVALID"
  | "SERVICE_ERROR" 
  | "NetworkError"; //Client side error -> Not present on the backend

interface ApiError {
  type: ErrorType;
  detail?: string;
}

export type { ApiError, ErrorType }