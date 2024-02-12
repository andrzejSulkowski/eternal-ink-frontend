import type { IHealthCheckResponse, IRequestEngravingResponse, IEngravingStatusStream, IRequestStatusResponse } from "~/types/engraving";


export async function healthCheck(apiBase: string): Promise<IHealthCheckResponse> {
    return await $fetch<IHealthCheckResponse>(`${apiBase}/healthchecker`);
}