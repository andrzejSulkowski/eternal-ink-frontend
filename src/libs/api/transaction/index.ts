import postRequestEngraving from "./handler/requestEngraving";
import requestStatusStream from "./handler/statusSse";
import addrToTxId from "./handler/addrToId";
import retrieveTx from "./handler/retrieveTx";
import getMessages from "./handler/getMessages";
import getCertificate from "./handler/getCertificate";
import getTxStatus from "./handler/getStatus";

const api = {
  postRequestEngraving,
  requestStatusStream,
  addrToTxId,
  retrieveTx,
  getMessages,
  getCertificate,
  getTxStatus,
};

export default api;
