import type { IHealthCheckResponse, IRequestEngravingResponse, IEngravingStatusStream, IRequestStatusResponse } from "~/types/engraving";
import type { Blockchains } from "~/types/chains";
import { requestEngraving, subscribeStatus, fetchStatus } from "~/api/engraving";
import { healthCheck } from "~/api/health";



export default defineNuxtPlugin(nuxtApp => {
    const config = nuxtApp.$config;

    // API_Base is our api for our backend server
    const { apiBase } = config.public;

    const requestEngravingApi = async (msg: string, chain: Blockchains): Promise<IRequestEngravingResponse> => await requestEngraving(apiBase, msg, chain);
    const subscribeStatusApi = async (address: string): Promise<IEngravingStatusStream> => await subscribeStatus(apiBase, address);
    const fetchStatusApi = async (txId: string): Promise<IRequestStatusResponse> => await fetchStatus(apiBase, txId);
    const healthCheckApi = async () => await healthCheck(apiBase);

    const api = {
        requestEngraving: requestEngravingApi,
        subscribeStatus: subscribeStatusApi,
        fetchStatus: fetchStatusApi,
        healthCheck: healthCheckApi
    }
    return {
        provide: {
            api
        }
    }
})