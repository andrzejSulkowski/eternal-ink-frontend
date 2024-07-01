import { TxStatus } from "@/models/transaction";
import { GetTxStatusStream, GetTxStatusStreamResponse } from "@/libs/api/models";
import { NextRequest, NextResponse } from "next/server";

const stateFlow = [
  TxStatus.WaitingForFunds,
  TxStatus.ConfirmingFunds,
  TxStatus.ConfirmedFunds,
  TxStatus.Engraving,
  TxStatus.Engraved,
  TxStatus.Finalized,
];

// Prevents this route's response from being cached on Vercel
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, { params }: {params: { txid: string }}) {
  const { txid } = params;

  if (!txid) {
    return new NextResponse("Failed to subscribe to status updates", {
      status: 400,
    });
  }

  const encoder = new TextEncoder();
  // Create a streaming response
  const customReadable = new ReadableStream({
    async start(controller) {
      for (const status of stateFlow) {
        const response: GetTxStatusStreamResponse = {
          data: status,
          status: status !== TxStatus.Finalized ? "keep-alive" : "close",
        };
        const message = JSON.stringify(response);
        controller.enqueue(encoder.encode(`data: ${message}\n\n`));
        // Simulate a delay between status updates
        await new Promise((resolve) => setTimeout(resolve, 2500));
      }
      // Close the stream after sending all updates
      controller.close();
    },
    cancel() {
      console.log("Stream cancelled");
    },
  });
  // Return the stream response and keep the connection alive
  return new Response(customReadable, {
    // Set the headers for Server-Sent Events (SSE)
    headers: {
      Connection: "keep-alive",
      "Content-Encoding": "none",
      "Cache-Control": "no-cache, no-transform",
      "Content-Type": "text/event-stream; charset=utf-8",
    },
  });
}
