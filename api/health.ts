import type { IHealthCheckResponse, IRequestEngravingResponse, IEngravingStatusStream, IRequestStatusResponse } from "~/types/engraving";


export async function healthCheck(baseURL: string, apiBase: string): Promise<IHealthCheckResponse> {
    return await $fetch<IHealthCheckResponse>(`${baseURL}${apiBase}/healthchecker`);
}