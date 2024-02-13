import { defineEventHandler, H3Event, readBody, setResponseStatus } from 'h3'
import { useRuntimeConfig } from '#imports'
import type { IHealthCheckResponse, IRequestEngravingResponse } from '~/types/engraving';
 
export default defineEventHandler(async (event: H3Event) => {
    if (event.node.req.method === 'POST') {
        const body: IRequestEngravingResponse = {
            address: "tb1qwaznwcxhl2vhdnd0f26qwphxmr2u0qudz05xgq" as BitcoinAddress, // Ensure BitcoinAddress type is defined or imported
            fees: 1000,
        }
        setResponseStatus(event, 200);
        return body;
    }

    console.log("WRONG METHOD: ", event.node.req.method, event.node.req.url)
    setResponseStatus(event, 405)
    return;
});

