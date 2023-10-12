<template>
    <input type="file" id="inputFile" ref="jsonInput" @change="importProject" hidden>
    <label for="inputFile">
        <div class="default-button">
            Import Project <i class="fa-light fa-arrow-up-to-line ml-2"></i>
        </div>
    </label>
</template>

<script setup lang="ts">
import importCSV from '@/modules/ImportCSV'
import { Ref, ref } from 'vue'
const jsonInput:Ref<HTMLInputElement> = ref()
    function importProject(){
	const files = jsonInput.value.files
	importCSV(files, (result) => {
        console.log(result, 'in import');
        
        // projectStore.project.name = result.name
        // projectStore.project.tasks = result.tasks
        // projectStore.project.filter = result.filter
	})
}
</script>../modules/ImportCSV