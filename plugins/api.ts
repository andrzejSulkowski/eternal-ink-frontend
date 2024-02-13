import type { IHealthCheckResponse, IRequestEngravingResponse, IEngravingStatusStream, IRequestTxResponse } from "~/types/engraving";
import type { Blockchains } from "~/types/chains";
import { requestEngraving, subscribeStatus, fetchTx } from "~/api/engraving";
import { healthCheck } from "~/api/health";



export default defineNuxtPlugin(nuxtApp => {
    const config = nuxtApp.$config;

    // API_Base is our api for our backend server
    const apiBase = config.public.apiBase;
    const baseURL = config.public.mockedBackend ? config.public.baseURLMock : config.public.baseURL;

    console.log("baseURL: ", baseURL);
    
    const requestEngravingApi = async (msg: string, chain: Blockchains): Promise<IRequestEngravingResponse> => await requestEngraving(baseURL, apiBase, msg, chain);
    const subscribeStatusApi = (address: BitcoinAddress): EventSource => subscribeStatus(baseURL, apiBase, address);
    const fetchTxApi = async (txId: string): Promise<IRequestTxResponse> => await fetchTx(baseURL, apiBase, txId);
    const healthCheckApi = async () => await healthCheck(baseURL, apiBase);

    const api = {
        requestEngraving: requestEngravingApi,
        subscribeStatus: subscribeStatusApi,
        fetchTx: fetchTxApi,
        healthCheck: healthCheckApi
    }
    return {
        provide: {
            api
        }
    }
})