import { defineEventHandler, H3Event, readBody, setResponseStatus } from 'h3'
import { useRuntimeConfig } from '#imports'
import type { IHealthCheckResponse } from '~/types/engraving';
 
export default defineEventHandler(async (event: H3Event) => {
    console.warn("Health Check Event: ", event.node.req.method, event.node.req.url);

    if (event.node.req.method === 'GET') {

        setResponseStatus(event, 200);
        const body: IHealthCheckResponse = {
            message: `

            ██████╗░███████╗██╗░░░██╗  ███╗░░░███╗░█████╗░██████╗░███████╗
            ██╔══██╗██╔════╝██║░░░██║  ████╗░████║██╔══██╗██╔══██╗██╔════╝
            ██║░░██║█████╗░░╚██╗░██╔╝  ██╔████╔██║██║░░██║██║░░██║█████╗░░
            ██║░░██║██╔══╝░░░╚████╔╝░  ██║╚██╔╝██║██║░░██║██║░░██║██╔══╝░░
            ██████╔╝███████╗░░╚██╔╝░░  ██║░╚═╝░██║╚█████╔╝██████╔╝███████╗
            ╚═════╝░╚══════╝░░░╚═╝░░░  ╚═╝░░░░░╚═╝░╚════╝░╚═════╝░╚══════╝
            -> 𝐌𝐎𝐂𝐊𝐄𝐃 𝐁𝐀𝐂𝐊𝐄𝐍𝐃
            `,
            status: "success"
        };
        return body;
    }

    setResponseStatus(event, 405)
    return;
});

