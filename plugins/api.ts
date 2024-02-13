import type { IHealthCheckResponse, IRequestEngravingResponse, IEngravingStatusStream, IRequestStatusResponse } from "~/types/engraving";
import type { Blockchains } from "~/types/chains";
import { requestEngraving, subscribeStatus, fetchStatus } from "~/api/engraving";
import { healthCheck } from "~/api/health";



export default defineNuxtPlugin(nuxtApp => {
    const config = nuxtApp.$config;

    // API_Base is our api for our backend server
    let apiBase = '';
    if(config.public.mock.backend){
        apiBase = config.public.mock.apiBase;
    }else {
        apiBase = config.public.apiBase;
    }

    console.log("API_BASE: ", apiBase);
    
    const requestEngravingApi = async (msg: string, chain: Blockchains): Promise<IRequestEngravingResponse> => await requestEngraving(apiBase, msg, chain);
    const subscribeStatusApi = (address: string): EventSource => subscribeStatus(apiBase, address);
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