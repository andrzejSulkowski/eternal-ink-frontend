"use client";
import api from "@/libs/api/transaction";
import { GetTxStatusStreamResponse } from "@/libs/api/models";
import { TxStatus } from "@/models/transaction";
import { useEffect, useRef, useState } from "react";
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

export const useSseStream = (
  id: string,
  callbacks: { onError: () => void; onCompleted: () => void }
) => {
  const { showLoadingScreen, hideLoadingScreen, state } = useLoadingScreen();
  const eventSource = useRef<EventSource | null>(null);
  const isStreaming = useRef(false);
  const isCompletedRef = useRef(false);

  const close = () => {
    eventSource.current?.close();
    eventSource.current = null;
    hideLoadingScreen();
    isCompletedRef.current = true;
    isStreaming.current = false;
  };

  const startListening = () => {
    isCompletedRef.current = false;

    if (window && !isStreaming.current) {
      const source = api.requestStatusStream({ id });
      isStreaming.current = true;
      source.onerror = close;
      source.onmessage = onmessage;

      eventSource.current = source;
    }
  };

  const onmessage = (event: MessageEvent) => {
    console.log("received message", event.data);
    if (isCompletedRef.current) return;

    const { data, status }: GetTxStatusStreamResponse = JSON.parse(event.data);
    if (status === "keep-alive" || status === "close") {
      const txStatus = data as TxStatus;
      updateLoadingScreen(txStatus);
      if (status === "close") {
        callbacks.onCompleted();
        setTimeout(close, 200);
      }
    } else {
      callbacks.onError();
      close();
    }
  };

  const updateLoadingScreen = (status: TxStatus) => {
    showLoadingScreen(
      mapTxStatusToString[status],
      mapTxStatusToProgress[status],
      5
    );
  };

  useEffect(() => {
    return () => {
      close();
    };
  }, []);

  return {
    eventSource,
    startListening,
    close,
    updateLoadingScreen,
  };
};
