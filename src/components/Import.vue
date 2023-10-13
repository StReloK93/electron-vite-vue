<template>
    <input type="file" id="inputFile" ref="jsonInput" @change="importProject" hidden>
    <label for="inputFile">
        <div class="btn" :class="classes">
            Import CSV <i class="fa-duotone fa-file-csv"></i>
        </div>
    </label>
</template>

<script setup lang="ts">
import importCSV from '@/modules/ImportCSV'
import { indexStore } from '@/store/indexStore'
const { classes } = defineProps(['classes'])
const store = indexStore()
import { Ref, ref } from 'vue'
const jsonInput: Ref<HTMLInputElement> = ref()
function importProject() {
    const files = jsonInput.value.files
    importCSV(files, (result) => store.tradeData = result)
}
</script>