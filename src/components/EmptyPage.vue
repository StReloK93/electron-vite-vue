<template>
<main  class="flex justify-center items-center h-full text-teal-600">
    <div class="p-6 py-6 border-2 border-teal-600 text-center shadow-xl">
        <h3 class="text-6xl mb-10 drop-shadow-md font-light">
            CSV faylni yuklang
        </h3>
        <span class="text-9xl drop-shadow-md">
            <i class="fa-thin fa-laptop-arrow-down fa-beat-fade"></i>
        </span>
        <div class="mt-6">
            <Import :classes="'w-full btn-teal !py-2'" />
        </div>
    </div>
</main>
</template>
<script setup lang="ts">
import Import from '@/components/Import.vue'

</script>