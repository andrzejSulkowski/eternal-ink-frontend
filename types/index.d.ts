declare global {
  // TODO: Add Error Types
  interface ResponseEngraveMessage {
    address: string;
    fees: number;
  }

  interface ResponseSseRequest {}

  type BitcoinAddress = string & { readonly brand: unique symbol }; //26-35 characters
  type TransactionStatus =
    | "waiting for funds"
    | "confirming funds"
    | "confirmed funds"
    | "engraving"
    | "engraved"
    | "finalized"
    | "external unconfirmed"
    | "external confirmed";

   type TransactionId = string & { readonly brand: unique symbol }; // 64 characters
}



export {};
