import { defineEventHandler, H3Event, readBody, setResponseStatus } from 'h3'
import { useRuntimeConfig } from '#imports'
import type { IRequestTxResponse } from '~/types/engraving';
import { TransactionStatus } from '~/types/transactionStatus';
 
export default defineEventHandler(async (event: H3Event) => {

    const params = event.context.params;
    if (event.node.req.method === 'GET') {

        const body: IRequestTxResponse = {
            op_return: "Hello Mum!",
            status: TransactionStatus.Finalized
        }
        console.log("params: ", params);
        if (params?.txid){
            body.op_return = `Hello Mum! ${params.txid}`;
        }
        setResponseStatus(event, 200);
        return body;
    }

    console.log("WRONG METHOD: ", event.node.req.method, event.node.req.url)
    setResponseStatus(event, 405)
    return {
        op_return: "",
    } as IRequestTxResponse;
});

