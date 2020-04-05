<template>
	<div  class="container">
		<div class="logged">
		<b-button @click="logout()">Logout</b-button>
		</div>
		<b-jumbotron>
			<div class="form-container">
				<span>Reminder: </span>
				<b-form-input v-model="reminder" id="nested-street"></b-form-input>
				<b-button @click="save()">Save</b-button>
			</div>
			<div class="rem-container" v-for="(reminder,index) in reminders" :key="reminders[index].id">
				<b-form-input :disabled="dis[index]" v-model="reminders[index].rem" id="nested-street">{{index}}</b-form-input>
				<b-button @click="toggle(index)">Edit</b-button>
				<b-button @click="del(index)">Delete</b-button>
			</div>
		</b-jumbotron>
	</div>
</template>


<script>
import { db } from '@/firebase.js'
import {mapState} from 'vuex'

export default {
	name : 'user',
	props:{
		username : String
	},
	data(){
		return{
			reminder : '',
			reminders : [],
			dis : [],
		}
	},
	methods : {
		toggle(index){
			this.dis[index] = !this.dis[index]
		},
		save(){
			db.collection(this.username).add({rem:this.reminder})
			this.reminders = []
			this.reminder=''
			this.dis = []
			this.readData()
		},
		readData(){
			db.collection(this.username).get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					this.reminders.push({
						id : doc.id,
						rem : doc.data().rem})
					this.dis.push(true)
				})
			}).catch((error) => {
				
			})
		},
		logout(){
			this.$cookie.delete('username');
			this.$router.go()
		},
		del(index){
			//console.log(this.reminders[index].id)
			db.collection(this.username).get().then((data) => {
				data.forEach((doc) => {
					if(doc.id === this.reminders[index].id)
						doc.delete()
				})
			
			})
		}
	},
	created(){
		this.readData()
	}
}
</script>

<style scoped>
.logged{
	display: flex;
	flex-direction: row-reverse
}
.rem-container{
	display: flex;
	flex-direction: row,
}
.container{
	width: 70%
}
.form-container{
	display: flex;
	flex-direction: row;
	padding-bottom: 20px;
}
</style>