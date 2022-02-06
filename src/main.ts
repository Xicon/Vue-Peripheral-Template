import { createApp } from 'vue'
import App from './App.vue'

import {createPinia} from 'pinia'
import { router } from '@/router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { i18n } from '@/language'

createApp(App)
		.use(createPinia())
		.use(router)
		.use(i18n)
		.use(ElementPlus)
		.mount('#app')