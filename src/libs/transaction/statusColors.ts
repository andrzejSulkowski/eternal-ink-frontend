import { TxStatus } from "@/models"

export const statusColors: Record<TxStatus, string> = {
  [TxStatus.WaitingForFunds]: "text-ei-primary-faded",
  [TxStatus.ConfirmedFunds]: "text-ei-warning",
  [TxStatus.ConfirmingFunds]: "text-ei-warning",
  [TxStatus.Engraving]: "text-ei-warning",
  [TxStatus.Engraved]: "test-ei-warning",
  [TxStatus.Finalized]: "text-ei-success",
  [TxStatus.ExternalUnconfirmed]: "text-ei-primary-faded",
  [TxStatus.ExternalConfirmed]: "text-ei-success"
};