import { defineStore } from 'pinia';

interface ITransactionStore {
    message: string;
    fees: number | undefined;
    address: string | undefined;
    txId: string | undefined;
} 

export const useTransactionStore = defineStore('transactionStore', {
    state: ():ITransactionStore => ({
        message: "",
        fees: undefined,
        address: undefined,
        txId: undefined
    }),
    getters: {

    }
})



if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTransactionStore, import.meta.hot));
}