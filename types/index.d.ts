export { ResponseEngraveMessage, ResponseSseRequest, BitcoinAddress, TransactionStatus, TransactionId };

declare global {
  interface ResponseEngraveMessage {
    address: string;
    fees: number;
  }

  interface ResponseSseRequest {}

  type BitcoinAddress = string & { readonly brand: unique symbol }; //26-35 characters



  type TransactionId = string & { readonly brand: unique symbol }; // 64 characters
}


