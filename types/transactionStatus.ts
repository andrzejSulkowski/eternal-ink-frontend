

const enum TransactionStatus {
  WaitingForFunds = "waiting for funds",
  ConfirmingFunds = "confirming funds",
  ConfirmedFunds = "confirmed funds",
  Engraving = "engraving",
  Engraved = "engraved",
  Finalized = "finalized",
  ExternalUnconfirmed = "external unconfirmed",
  ExternalConfirmed = "external confirmed",
}

export { TransactionStatus };