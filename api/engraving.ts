import { useRuntimeConfig } from "nuxt/app";
import type { IHealthCheckResponse, IRequestEngravingResponse, IEngravingStatusStream, IRequestStatusResponse } from "~/types/engraving";
import type { Blockchains } from "~/types/chains";

const config = useRuntimeConfig();

export async function requestEngraving(msg: string, chain: Blockchains): Promise<IRequestEngravingResponse> {
    return await $fetch<IRequestEngravingResponse>(`${config.app.baseURL}/api/request-engraving`, {
        method: "POST",
        body: { msg, chain },
    });
}

export async function subscribeStatus(address: string): Promise<IEngravingStatusStream> {
    return await $fetch<IEngravingStatusStream>(`${config.app.baseURL}/api/tx-stream/${address}`);
}

export async function fetchStatus(txId: string): Promise<IRequestStatusResponse> {
    return await $fetch<IRequestStatusResponse>(`${config.app.baseURL}/api/tx/${txId}`);
}
