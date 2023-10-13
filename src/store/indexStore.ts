import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
export const indexStore = defineStore('indexStore', () => {
    const tradeData = reactive([])
    return { tradeData }
})