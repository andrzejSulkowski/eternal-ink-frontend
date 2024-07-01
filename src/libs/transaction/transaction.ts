import { TxStatus } from "@/models";
import { statusColors } from "./statusColors";

const getStatusColor = (status: TxStatus): string => statusColors[status];

const trim = (address: string) =>
    `${address.slice(0, 9)}...${address.slice(-11)}`;

const displayStatus = (status: TxStatus): 'Waiting for Funds' | 'Processing' | 'Finalized' | 'Unknown' => {
    switch (status) {
        case TxStatus.WaitingForFunds:
            return "Waiting for Funds";
        case TxStatus.ConfirmingFunds:
        case TxStatus.Engraving:
        case TxStatus.ExternalUnconfirmed:
        case TxStatus.ConfirmedFunds:
            return "Processing";
        case TxStatus.Engraved:
        case TxStatus.Finalized:
        case TxStatus.ExternalConfirmed:
            console.warn("returning Finalized")
            return "Finalized";
        default:
            console.warn("returning Unknown Status with status: ", status);
            return "Unknown";
    }
}

export { getStatusColor, trim, displayStatus };
