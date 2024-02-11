import { useRuntimeConfig } from "nuxt/app";
import type { IHealthCheckResponse, IRequestEngravingResponse, IEngravingStatusStream, IRequestStatusResponse } from "~/types/engraving";

const config = useRuntimeConfig();

export async function request_engraving(msg: string, chain: string): Promise<IRequestEngravingResponse> {
    return await $fetch<IRequestEngravingResponse>(`${config.app.baseURL}/api/request-engraving`, {
        method: "POST",
        body: { msg, chain },
    });
}

export async function subscribe_status(address: string): Promise<IEngravingStatusStream> {
    return await $fetch<IEngravingStatusStream>(`${config.app.baseURL}/api/tx-stream/${address}`);
}

export async function fetch_status(txId: string): Promise<IRequestStatusResponse> {
    return await $fetch<IRequestStatusResponse>(`${config.app.baseURL}/api/tx/${txId}`);
}
