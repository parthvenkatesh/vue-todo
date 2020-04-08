<template>
	<div  class="container">
		<div class="logged">
		<b-button @click="logout()">Logout</b-button>
		<div class="tool" v-b-tooltip.hover title="Double Click to edit. Then press Enter to save">
			i
		</div>
		</div>
		<b-jumbotron>
			<div class="form-container">
				<span>Reminder: </span>
				<b-form-input v-model="reminder" class="rem-text" id="nested-street"></b-form-input>
				<b-button :disabled="reminder===''" @click="save()">Save</b-button>
			</div>
			<div class="rem-container" v-for="(reminder,index) in reminders" :key="reminders[index].id">
				<div v-if="reminder.dis" @dblclick="toggle(index)" class="rem-div">{{reminders[index].rem}}</div>
				<input v-else class="rem-inp" @keyup.enter="toggle(index)" v-model="reminders[index].rem" id="nested-street">
				<div class="x-btn" @click="del(index)">x</div>
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
			preminder:'',
			reminder : '',
			reminders : [],
		}
	},
	methods : {
		toggle(index){
			this.reminders[index].dis = !this.reminders[index].dis
			if(this.reminders[index].dis){
				if(this.reminders[index].rem !== this.preminder)
					db.collection(this.username).doc(this.reminders[index].id).update({rem:this.reminders[index].rem}).then(() =>{
						console.log('updated')
					})
				else
					this.preminder=''
			}
			else{
				this.preminder = this.reminders[index].rem
			}
		},
		save(){
			let ob = {
				id : '',
				rem :  this.reminder,
				dis : true
			}
			
			db.collection(this.username).add({rem:this.reminder}).then(() => {
				db.collection(this.username).get().then((querySnapshot) =>{
					querySnapshot.forEach((doc) => {
						if(doc.rem === ob.rem)
							ob.id = doc.id
					})
				}).then(()=>{
					this.reminders.push(ob)
					this.reminder=''
					console.log('Saved')
				})
			})
		},
		readData(){
			db.collection(this.username).get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					this.reminders.push({
						id : doc.id,
						rem : doc.data().rem,
						dis:true})
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
						
			db.collection(this.username).doc(this.reminders[index].id).delete().then(() =>{
				console.log('deleted')
				this.reminders.splice(index,1)
			})
		}
	},
	created(){
		this.readData()
	}
}
</script>

<style scoped>
.container{
	width: 100%;
}
.logged{
	width: 100%;
	display: flex;
	flex-direction: row-reverse
}
b-jumbotron{
	width: inherit
}
.form-container{
	display: flex;
	flex-direction: row;
	padding-bottom: 20px;
}
.rem-text{
	margin:0 5px 0 5px ;
}

.rem-container{
	display: flex;
	flex-direction: row
}
.rem-div{
	width: 90%

}
.rem-inp{
	width: 90%;
	background: #FFEEEE;
	text-align: center
}
.x-btn:hover{
	cursor:pointer
}
.tool{
	font-size: 1.5em;
	color: sandybrown;
	width: 30px;
	margin-right:20px; 
	border:1px solid black;
	border-radius: 20px;
}
</style>
