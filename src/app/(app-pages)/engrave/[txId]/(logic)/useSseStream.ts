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

const mapTxStatusToString: Record<TxStatus, string> = {
  [TxStatus.WaitingForFunds]: "Waiting for funds",
  [TxStatus.ConfirmingFunds]: "Confirming funds",
  [TxStatus.ConfirmedFunds]: "Confirmed funds",
  [TxStatus.Engraving]: "Engraving",
  [TxStatus.Engraved]: "Engraved",
  [TxStatus.Finalized]: "Finalized",
  //
  [TxStatus.ExternalUnconfirmed]: "External Unconfirmed",
  [TxStatus.ExternalConfirmed]: "External Confirmed",
};

export const useSseStream = (id: string) => {
  const { showLoadingScreen, hideLoadingScreen, state } = useLoadingScreen();
  const [eventSource, setEventSource] = useState<EventSource | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);

  const close = () => {
    eventSource?.close();
    hideLoadingScreen();
  };
  const startListening = () => {
    if (window && !isStreaming) {
      const source = api.requestStatusStream({ id });
      source.onerror = close;
      source.onmessage = onmessage;
      
      setEventSource(source);
      setIsStreaming(true);
    }
  };

  const onmessage = (event: MessageEvent) => {
    const { data, status }: GetTxStatusStreamResponse = JSON.parse(event.data);
    if (status === "keep-alive") {
      const txStatus = data as TxStatus;
      showLoadingScreen(
        mapTxStatusToString[txStatus],
        mapTxStatusToProgress[txStatus],
        5
      );
      if (data === TxStatus.Finalized) setTimeout(close, 500);
    } else {
      close();
    }
  };


  return {
    eventSource,
    startListening,
  };
};
