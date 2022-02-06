import {defineStore} from 'pinia'

export const useStore = defineStore({
	id:'useStore',
	state:()=>({
		msg:'hello Pinia!'
	}),
	getters:{

	},
	actions:{

	}
})