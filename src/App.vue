<template>
  <section class="bg-gray-100 h-screen flex justify-center items-center">
    <main class="bg-white p-4 w-80 h-60 shadow rounded-sm">
      <h3 class="text-center mb-4"> CSV Fileni yuklang </h3>
      <Import />
    </main>
  </section>
</template>

<script setup lang="ts">
import Import from '@/components/Import.vue'
</script>