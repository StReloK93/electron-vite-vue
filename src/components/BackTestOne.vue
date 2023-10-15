<template>
    <section>
        <div class="flex justify-between items-center py-3">
            <main>
                <input type="range"  v-model="store.minimumProsent" min="-100" max="100" />
            </main>
            <main class="text-3xl text-pink-600 font-bold">
                {{  Math.floor(store.prosent*100) }} %
            </main>
        </div>
        
        <table class="w-full">
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{{store.testOne.gapDownCounter}}</td>
                <td>{{store.testOne.smallClose}}</td>
            </tr>
            <tr>
                <td>#</td>
                <td>Date</td>
                <td>Open</td>
                <td>High</td>
                <td>Low</td>
                <td>Close</td>
                <td>change</td>
                <td>changeProsent</td>
                <td>gapDown {{ store.minimumProsent }}%</td>
                <td>Qizil svechka</td>
            </tr>

            <tr v-for="(item,index) in store.testOne.list">
                <td>{{ index + 1 }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.open }}</td>
                <td>{{ item.high }}</td>
                <td>{{ item.low }}</td>
                <td>{{ item.close }}</td>
                <td>{{ item.change }}<b class="font-normal" v-if="item.change">$</b></td>
                <td>
                    {{ item.changeProsent }}  <b class="font-normal" v-if="item.changeProsent">%</b>
                </td>
                <td>
                    <span v-if="item.gapDown" class="text-teal-600">
                        <i class="fa-solid fa-check"></i>
                    </span>
                </td>
                <td>
                    <span v-if="item.redLine" class="text-teal-600">
                        <i class="fa-solid fa-check"></i>
                    </span>
                </td>
            </tr>
        </table>
    </section>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { indexStore } from '@/store/indexStore'
const store = indexStore()


console.log(store.prosent)

</script>