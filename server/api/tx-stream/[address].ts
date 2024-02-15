import { defineEventHandler, H3Event, readBody, setResponseStatus } from "h3";
import { useRuntimeConfig } from "#imports";
import type { IRequestTxResponse, IEngravingStatusStream } from "~/types/engraving";
import { TransactionStatus } from "~/types/transactionStatus";
import { useSSE } from "@/server/utils/hooks";
import { fromStr } from "~/utils/types/bitcoinAddress";

export default defineEventHandler(async (event: H3Event) => {
    const address_string: string | undefined = event.context.params?.address;
    if (!address_string) {
        console.error("No address provided");
        setResponseStatus(event, 400);
        return;
    }
    const address = fromStr(address_string);

    if (!address) {
        console.error("Invalid address provided");
        setResponseStatus(event, 400);
        return;
    }

    const { send, close } = useSSE(event, 'sse:event');

    let status: TransactionStatus | undefined = TransactionStatus.WaitingForFunds;
    let txId: string | undefined = undefined;
    const updateDataAndSend = () => {
        status = nextStatus(status);

        if(status === TransactionStatus.Engraving){
            txId = "dde21714eb5fb1f4785201a353c347582a84d6ee4f67a0431a417cd4e41a96d6"
        }
        const data: IEngravingStatusStream = {
            status: status,
            address,
            txId
        };

        send(() => ({data}));
        console.log("Sent update: ", data);

        // Check if the new status is Finalized, and if so, stop the interval.
        if (data.status === TransactionStatus.Finalized) {
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
function nextStatus(status?: TransactionStatus): TransactionStatus {
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