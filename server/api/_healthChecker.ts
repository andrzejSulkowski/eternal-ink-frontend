import { defineEventHandler, H3Event, readBody, setResponseStatus } from 'h3'
import { useRuntimeConfig } from '#imports'
import { IHealthCheckResponse } from '~/types/engraving';
 
const config = useRuntimeConfig()
export default defineEventHandler(async (event: H3Event) => {
    if (event.node.req.method === 'GET') {

        setResponseStatus(event, 200);
        const body: IHealthCheckResponse = {
            message: "OK",
            status: "success"
        };
        return body;
    }

    setResponseStatus(event, 405)
    return;
});

