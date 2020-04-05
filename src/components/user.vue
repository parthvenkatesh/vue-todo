<template>
	<div  class="container">
		<div class="logged">
		<b-button >Logout</b-button>
		</div>
		<b-jumbotron>
			<div class="form-container">
				<span>Reminder: </span>
				<b-form-input v-model="reminder" id="nested-street"></b-form-input>
				<b-button @click="save()">Save</b-button>
			</div>
			<div class="rem-container" v-for="(reminder,index) in reminders" :key="index">
				<b-form-input :disabled="dis[index]" v-model="reminders[index]" id="nested-street">{{index}}</b-form-input>
				<b-button @click="toggle(index)">Edit</b-button>
				<b-button >Save</b-button>
			</div>
		</b-jumbotron>
	</div>
</template>


<script>
import db from '@/firebase.js';
export default {
	name : 'user',
	data(){
		return{
			reminder : '',
			reminders : [],
			dis : []
		}
	},
	mounted(){
		db.ref('parthvenkatesh@gmail.com').push
	},
	methods : {
		toggle(index){
			alert(index)
			this.dis[index] = !this.dis[index]
		},
		save(){
			this.reminders.push(this.reminder)
			this.reminder=''
			this.dis.push(true)
		}
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
	flex-direction: row
}
.container{
	width: 70%
}
.form-container{
	display: flex;
	flex-direction: row;
}
</style>