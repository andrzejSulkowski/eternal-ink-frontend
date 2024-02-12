export interface IHealthCheckResponse {
    message: string;
    status: "success";
}

export interface IRequestEngravingResponse {
    address: BitcoinAddress; // Ensure BitcoinAddress type is defined or imported
    fees: number;
}

export type IEngravingStatusStream = TransactionStatus; // Ensure TransactionStatus is defined or imported

export interface IRequestStatusResponse {
    status: TransactionStatus;
}
