import { defineStore } from 'pinia';

export const useTransactionStore = defineStore('transactionStore', {
    state: () => ({
        message: ""
    }),
    getters: {

    }
})



if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTransactionStore, import.meta.hot));
}