import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
export const indexStore = defineStore('indexStore', () => {
    const tradeData = ref(null)
    const minimumProsent = ref(-2)



    const testOne = computed(() => {
        const newArr = []
        const gapDownCounter = ref(0)
        const smallClose = ref(0)
        tradeData.value.forEach((item, index) => {
            const base = { ...item, change: null, changeProsent: null, gapDown: null, redLine: false }
            newArr[index] = base
            if (index == 0) return

            newArr[index].change = (item.open - tradeData.value[index - 1].close).toFixed(2)
            newArr[index].changeProsent = +(newArr[index].change / (tradeData.value[index - 1].close / 100)).toFixed(2)
            newArr[index].gapDown = newArr[index].changeProsent < minimumProsent.value
            if (newArr[index].gapDown) {
                gapDownCounter.value += 1
                if(item.close < item.open) {
                    newArr[index].redLine = true
                    smallClose.value += 1
                }
            }
        })

        return { list: newArr, gapDownCounter: gapDownCounter, smallClose: smallClose }
    })


    const prosent = computed(() => {
        if(testOne.value.gapDownCounter.value == 0) return 0 
        return (testOne.value.smallClose.value / testOne.value.gapDownCounter.value)
    })

    return { tradeData, testOne , minimumProsent, prosent}
})