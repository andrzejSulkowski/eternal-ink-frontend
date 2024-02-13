
const bitcoinToSatoshi = (bitcoin: number) => Math.round(bitcoin * 100000000);
const satoshiToBitcoin = (satoshi: number) => satoshi / 100000000;

export { bitcoinToSatoshi, satoshiToBitcoin };
