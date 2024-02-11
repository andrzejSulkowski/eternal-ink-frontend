


// interface IHealthCheckResponse {
//     message: string;
//     status: "success";
// }
// async function health_check() {
//     return await $fetch<IHealthCheckResponse>(`${config.getAPIUrl}healthchecker`);
// }


// interface IRequestEngravingResponse {
//     address: BitcoinAddress;
//     fees: string;
// }
// async function request_engraving(msg: string, chain: string) {
//     return await $fetch<IRequestEngravingResponse>(`${config.getAPIUrl}request-engraving`,{
//         method: "POST",
//         body: {msg, chain}
//     });
// }



// type IEngravingStatusStream = TransactionStatus;
// async function subscribe_status(address: BitcoinAddress){
//     return await $fetch<IEngravingStatusStream>(`${config.getAPIUrl}tx-stream/${address}`);
// }

// interface IRequestStatusResponse {
//     status: TransactionStatus;
// }
// async function fetch_status(txId: TransactionId){
//     return await $fetch<IRequestStatusResponse>(`${config.getAPIUrl}tx/${txId}`);
// }



