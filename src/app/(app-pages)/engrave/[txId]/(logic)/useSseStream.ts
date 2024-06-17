import api from "@/libs/api/transaction";
import { GetTxStatusStreamResponse } from "@/libs/api/models";
import { TxStatus } from "@/models/transaction";
import { useEffect, useState } from "react";
import { useLoadingScreen } from "@/context/loadingScreenCtx";

const mapTxStatusToProgress: Record<TxStatus, number> = {
  [TxStatus.WaitingForFunds]: 0,
  [TxStatus.ConfirmingFunds]: 1,
  [TxStatus.ConfirmedFunds]: 2,
  [TxStatus.Engraving]: 3,
  [TxStatus.Engraved]: 4,
  [TxStatus.Finalized]: 5,
  //
  [TxStatus.ExternalUnconfirmed]: 0,
  [TxStatus.ExternalConfirmed]: 1,
};

export const useSseStream = (id: string) => {
  const { showLoadingScreen, hideLoadingScreen, state } = useLoadingScreen();
  const [eventSource, setEventSource] = useState<EventSource | null>(null);

  let isStreaming = false;
  useEffect(() => {
    setEventSource(api.requestStatusStream({ id }));
  }, []);
  useEffect(() => {
    if (eventSource) {
      eventSource.onopen = () => {
        if (!isStreaming) {
          isStreaming = true;
          eventSource!.onmessage = (event) => {
            console.log("event", event);
            const parsedData: GetTxStatusStreamResponse = JSON.parse(event.data);
            console.log("parsed data: ", parsedData);
            // parsedData.
            const { data, status }: GetTxStatusStreamResponse = JSON.parse(
              event.data
            );
            const txStatus = data as TxStatus;
            showLoadingScreen(txStatus, mapTxStatusToProgress[txStatus], 5);
            if (data === TxStatus.Finalized) {
              eventSource?.close();
            }
          };
        } else {
          eventSource?.close();
        }
      };
    }
  }, [eventSource]);

  return {
    eventSource,
  };
};
