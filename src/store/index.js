import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/firebase.js'
import { LayoutPlugin } from 'bootstrap-vue';
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state :{
	user : null,
	items:[],
	busy:false
  },
  mutations: {
	setrem(state,payload){
		state.items = payload
	},
	logout(state){
		state.user=null
	},
	setbusy(state){
		state.busy = !state.busy
	},
	setuser(state,payload){
		state.user=payload
	},
	delrem(state,payload){
		state.items.slice(payload,1)
	}
  },
  actions: {
	async getItems(context){
		console.log('get items called')
		context.commit("setbusy")
		let rem = []
		db.collection(context.state.user).get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				rem.push({
					id : doc.id,
					rem : doc.data().rem,
					dis:true})
			})
		})
		.then(() =>{
			context.commit('setrem',rem)
			context.commit("setbusy")
		})

	},
	async addItem(context,payload){
		context.commit("setbusy")
		db.collection(context.state.user).add({rem:payload}).then(()=>{
			context.dispatch("getItems")
		})
		context.commit("setbusy")
	},
	async deleteItem(context,payload){
		context.commit("setbusy")
		context.commit("delrem",payload.index)
		db.collection(context.state.user).doc(payload.id).delete().then(()=>{
			context.dispatch("getItems")
		})
		context.commit("setbusy")
	},
	async updateItem(context,payload){

	}
  },
  modules: {
  }
})
