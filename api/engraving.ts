import type {
  IHealthCheckResponse,
  IRequestEngravingResponse,
  IEngravingStatusStream,
  IRequestStatusResponse,
} from "~/types/engraving";
import type { Blockchains } from "~/types/chains";

export async function requestEngraving(
  baseURL: string,
  apiBase: string,
  msg: string,
  chain: Blockchains
): Promise<IRequestEngravingResponse> {
  return await $fetch<IRequestEngravingResponse>(
    `${baseURL}${apiBase}/request-engraving`,
    {
      method: "POST",
      body: { message: msg, chain: chain },
    }
  );
}

export function subscribeStatus(baseURL: string, apiBase: string, address: string): EventSource {
  return new EventSource(`${baseURL}${apiBase}/tx-stream/${address}`);
}

export async function fetchStatus(
  baseURL: string,
  apiBase: string,
  txId: string
): Promise<IRequestStatusResponse> {
  return await $fetch<IRequestStatusResponse>(`${baseURL}${apiBase}/tx/${txId}`);
}
