import type { IHealthCheckResponse, IRequestEngravingResponse, IEngravingStatusStream, IRequestStatusResponse } from "~/types/engraving";
import type { Blockchains } from "~/types/chains";

export async function requestEngraving(apiBase: string, msg: string, chain: Blockchains): Promise<IRequestEngravingResponse> {
    return await $fetch<IRequestEngravingResponse>(`${apiBase}/request-engraving`, {
        method: "POST",
        body: { msg, chain },
    });
}

export async function subscribeStatus(apiBase: string, address: string): Promise<IEngravingStatusStream> {
    return await $fetch<IEngravingStatusStream>(`${apiBase}/tx-stream/${address}`);
}

export async function fetchStatus(apiBase: string, txId: string): Promise<IRequestStatusResponse> {
    return await $fetch<IRequestStatusResponse>(`${apiBase}/tx/${txId}`);
}
