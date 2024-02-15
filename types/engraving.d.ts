import type { TransactionStatus } from "~/types/transactionStatus";

export interface IHealthCheckResponse {
    message: string;
    status: "success";
}

export interface IRequestEngravingResponse {
    address: BitcoinAddress; // Ensure BitcoinAddress type is defined or imported
    fees: number;
}

export type IEngravingStatusStream = {
    status: TransactionStatus,
    address: BitcoinAddress,
    txId?: string
}; // Ensure TransactionStatus is defined or imported

export interface IRequestTxResponse {
    op_return: string;
    status: TransactionStatus;
}
