import type {
  IHealthCheckResponse,
  IRequestEngravingResponse,
  IEngravingStatusStream,
  IRequestStatusResponse,
} from "~/types/engraving";
import type { Blockchains } from "~/types/chains";

export async function requestEngraving(
  apiBase: string,
  msg: string,
  chain: Blockchains
): Promise<IRequestEngravingResponse> {
  return await $fetch<IRequestEngravingResponse>(
    `${apiBase}/request-engraving`,
    {
      method: "POST",
      body: { message: msg, chain: chain },
    }
  );
}

export function subscribeStatus(apiBase: string, address: string): EventSource {
  return new EventSource(`${apiBase}/tx-stream/${address}`);
}

export async function fetchStatus(
  apiBase: string,
  txId: string
): Promise<IRequestStatusResponse> {
  return await $fetch<IRequestStatusResponse>(`${apiBase}/tx/${txId}`);
}
