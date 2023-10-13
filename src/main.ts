import { createApp } from 'vue'
import "@/assets/style.css"
import App from './App.vue'
import './samples/node-api'
import { createPinia } from 'pinia'
import { AgGridVue } from "ag-grid-vue3"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"



createApp(App)
	.component('AgGrid', AgGridVue)
	.use(createPinia())
	.mount('#app')
	.$nextTick(() => {
		postMessage({ payload: 'removeLoading' }, '*')
	})
