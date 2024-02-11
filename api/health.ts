import type { IHealthCheckResponse, IRequestEngravingResponse, IEngravingStatusStream, IRequestStatusResponse } from "~/types/engraving";
import { useRuntimeConfig } from "nuxt/app";

//const config = useConfigStore();

const config = useRuntimeConfig();


export async function health_check(): Promise<IHealthCheckResponse> {
    return await $fetch<IHealthCheckResponse>(`${config.app.baseURL}/api/healthchecker`);
}