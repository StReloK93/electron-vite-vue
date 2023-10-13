<template>
    <section>

    </section>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { indexStore } from '@/store/indexStore'
const store = indexStore()

// computed(() => {
//     return store.tradeData
// })

function Backtest(){
    const clone1 = [...store.tradeData]
    clone1.forEach((item,index) => {
        if(index == 0) return item.change = 0
        item.change = item.open - clone1[index - 1].close
    })
    return clone1
}

console.log(Backtest())

</script>