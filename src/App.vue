<template>
	<section class="bg-gray-100 h-screen flex flex-col">
		<Header />
		<section class="flex-grow relative overflow-y-auto py-6">
			<Main v-if="store.tradeData != null" class="container mx-auto" />
			<EmptyPage v-else />
		</section>
	</section>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import EmptyPage from './components/EmptyPage.vue';
import { indexStore } from '@/store/indexStore'
const store = indexStore()
</script>