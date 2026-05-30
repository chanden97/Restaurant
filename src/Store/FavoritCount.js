import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter",{
    state: () => ({
        // declare variables
        count: 0,
        // isDark: false
    }),
    actions: {
        // declare methods
        CounterHandler(){
            this.count++;
        },

    },
    getters: {
        // DoubleCount: (state) => state.count * 2

    }
})