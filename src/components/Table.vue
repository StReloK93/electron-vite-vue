<template>
    <AgGrid
        class="h-96 ag-theme-alpine"
        :rowData="store.tradeData"
        :animateRows="true"
        :columnDefs="columnDefs"
    />
</template>

<script setup lang="ts">
import { indexStore } from '@/store/indexStore'
import { reactive } from 'vue';
const store = indexStore()


const columnDefs = reactive([
    { field: "date", headerName: 'date' },
    { field: "open", headerName: 'Open' , flex: 1 },
    { field: "high", headerName: 'high' },
    { field: "low", headerName: 'low' },
    { field: "close", headerName: 'close' },
])
</script>