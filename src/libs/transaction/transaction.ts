import { Status } from "./types";
import { statusColors } from "./statusColors";

const getStatusColor = (status: Status): string => statusColors[status];

const trim = (address: string) =>
    `${address.slice(0, 9)}...${address.slice(-11)}`;

const displayStatus = (status: Status): string => {
    switch (status) {
        case "waiting-for-funds":
            return "Waiting for Funds";
        case "confirming-funds":
            return "Confirming Funds";
        case "engraving":
            return "Processing";
        case "engraved":
            return "Finalized";
        case "timeout":
            return "Timeout";
    }
}

export { getStatusColor, trim, displayStatus };
