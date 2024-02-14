import { defineEventHandler, H3Event, readBody, setResponseStatus } from "h3";
import { useRuntimeConfig } from "#imports";
import type { IRequestTxResponse, IEngravingStatusStream } from "~/types/engraving";
import { TransactionStatus } from "~/types/transactionStatus";
import { useSSE } from "@/server/utils/hooks";

export default defineEventHandler(async (event: H3Event) => {
    const txId = event.context.params?.txid;
    if (!txId) {
        console.error("No txId provided");
        setResponseStatus(event, 400);
        return;
    }

    const { send, close } = useSSE(event, 'sse:event');

    let data: IEngravingStatusStream = TransactionStatus.WaitingForFunds;

    const updateDataAndSend = () => {
        data = nextStatus(data);
        send(() => ({data}));
        console.log("Sent update: ", data);

        // Check if the new status is Finalized, and if so, stop the interval.
        if (data === TransactionStatus.Finalized) {
            clearInterval(interval);
            console.log("Transaction finalized, stopping updates.");
            close();
        }
    };

    let interval = setInterval(updateDataAndSend, 5000);

    event.node.req.on("close", () => {
        clearInterval(interval);
        console.log("Client disconnected, stopping updates.");
    });
});


// *Note: External TransactionStatus is not being tested in this example
function nextStatus(status: TransactionStatus): TransactionStatus {
    switch (status){
        case TransactionStatus.WaitingForFunds:
            return TransactionStatus.ConfirmingFunds;
        case TransactionStatus.ConfirmingFunds:
            return TransactionStatus.ConfirmedFunds;
        case TransactionStatus.ConfirmedFunds:
            return TransactionStatus.Engraving
        case TransactionStatus.Engraving:
            return TransactionStatus.Engraved;
        case TransactionStatus.Engraved:
            return TransactionStatus.Finalized;
        default:
            return TransactionStatus.WaitingForFunds;
    }
}