
const enum TxStatus {
    WaitingForFunds = "WaitingForFunds",
    ConfirmingFunds = "ConfirmingFunds",
    ConfirmedFunds = "ConfirmedFunds",
    Engraving = "Engraving",
    Engraved = "Engraved",
    Finalized = "Finalized",
    ExternalUnconfirmed = "ExternalUnconfirmed",
    ExternalConfirmed = "ExternalConfirmed",
}

export { TxStatus }