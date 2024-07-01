import postRequestEngraving  from './handler/requestEngraving';
import requestStatusStream from './handler/statusSse';
import addrToTxId from './handler/addrToId';
import retrieveTx from './handler/retrieveTx';
import getMessages from './handler/getMessages';
import getCertificate from './handler/getCertificate';


const api = {
    postRequestEngraving,
    requestStatusStream,
    addrToTxId,
    retrieveTx,
    getMessages,
    getCertificate
};

export default api;
