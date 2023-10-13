<template>
  <header class="py-3 shadow bg-teal-600">
	<div class="container mx-auto flex justify-between items-center">
		<h3 class="text-white flex items-center">
			<span class="text-3xl">
				<i class="fa-solid fa-registered"></i>
			</span>
			<main class="text-teal-100 font-semibold pl-3 leading-3">
				<div class="italic text-sm leading-3">
					Backtest
				</div>
				<i class="text-xs leading-3">Trade</i>
			</main>
		</h3>
		<Import v-if="store.tradeData.length == 0" :classes="'btn-white'"/>
		<button v-else @click="store.tradeData = []" class="btn btn-white">
			Chiqish <i class="fa-duotone fa-right-from-bracket ml-3"></i>
		</button>
	</div>
  </header>
</template>

<script setup lang="ts">
import Import from '@/components/Import.vue'
import { indexStore } from '@/store/indexStore'
const store = indexStore()
</script>