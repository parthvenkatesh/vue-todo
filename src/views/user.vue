<template>
	<div  class="container">
	<b-overlay :variant="transparent" :show="working" rounded="sm">
		<b-card class="b-class-ins">
						<div class="form-container">
							<span>Reminder: </span>
							<b-form-input v-model="reminder" class="rem-text" id="nested-street"></b-form-input>
							<b-button :disabled="reminder.length<=0" @click="save()">Save</b-button>
						</div>
						<div class="rem-container" v-for="(reminder,index) in reminders" :key="reminders[index].id">
							<div v-if="reminder.dis" @dblclick="toggle(index)" class="rem-div">{{reminders[index].rem}}</div>
							<input v-else class="rem-inp" @keyup.enter="toggle(index)" v-model="reminders[index].rem" id="nested-street">
							<div class="x-btn" @click="del(index)">
								<b-icon icon="trash2" ></b-icon>
							</div>
						</div>
		</b-card>
		<template v-slot:overlay>
			<div class="text-center">
			<b-icon icon="gear-fill" font-scale="3" animation="spin"></b-icon>
			<p class="cancel">{{text_msg}}</p>
			</div>
		</template>
	</b-overlay>
	</div>
</template>


<script>
import { db } from '@/firebase.js'

export default {
	name : 'user',

	data(){
		return{
			preminder:'',
			reminder : '',
			text_msg:''
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
			this.$store.dispatch("addItem",this.reminder)
			this.reminder =''

		},
		del(index){
			this.text_msg = 'Deleting Reminder..'
			let payload = {
				id:this.reminders[index].id,
				index:index
			}
			this.$store.dispatch("deleteItem",payload)
		}
	},
	computed:{
		reminders(){
			return this.$store.state.items
		},
		working(){
			return this.$store.state.busy
		},
		username(){
			this.$store.state.user
		}
	},
	mounted(){
		if(this.$store.state.user === null ){
			this.$router.push("/nonuser")
		}
		else{
		this.$store.dispatch("getItems")
		this.text_msg = 'Loading Reminders. Please wait'
		}
	}
}
</script>

<style scoped>
.container{
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.logged{
	width: 100%;
	display: flex;
	flex-direction: row-reverse
}
.cancel{
	font-size: 1em
}
.b-class-ins{
	width: 80%;
	background-color: rgb(10,10,10);
	-webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);
}
.form-container{
	display: flex;
	flex-direction: row;
	padding-bottom: 20px;
	align-items: center;
}
.rem-text{
	margin:0 5px 0 5px ;
}
.rem-container{
	display: flex;
	flex-direction: row;
	border: 1px solid rgb(95, 93, 93);
}
.rem-div{
	width: 90%;
	

}
.rem-inp{
	width: 90%;
	background: rgb(10,10,10);
	color: white;
	text-align: center;
}
.x-btn:hover{
	cursor:pointer
}

@media  (min-width: 500px) {
	.b-class-ins{
	width: 100%;
	margin-top: 50px; 
	}
}

</style>
