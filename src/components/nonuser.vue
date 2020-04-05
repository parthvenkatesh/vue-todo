<template>
	<div>
		<div class="not-logged">
		<b-button @click="toggle_disp()">{{disp_text}}</b-button>
		</div>
		<div class="forms" >
			<div v-if="disp_login">
				<h2>Login</h2>
				<b-card bg-variant="light">
					<b-form-group
						label-cols-sm="3"
						label="Email:"
						label-align-sm="right"
						label-for="nested-street"
					>
						<b-form-input v-model="email" type="email" id="nested-street"></b-form-input>
					</b-form-group>

					<b-form-group
						label-cols-sm="3"
						label="Password:"
						label-align-sm="right"
						label-for="nested-city"
					>
						<b-form-input v-model="pwd" type="password" id="nested-city"></b-form-input>
					</b-form-group>
					<b-button @click="login()" :disabled="check()" variant="primary">Login</b-button>
				</b-card>
			</div>

			<div v-else>
				<h2>Create an account</h2>
				<b-card bg-variant="light">
					<b-form-group
						label-cols-sm="3"
						label="Email:"
						label-align-sm="right"
						label-for="nested-street"
					>
						<b-form-input v-model="email" type="email"  id="nested-street"></b-form-input>
					</b-form-group>
					<b-form-group
						label-cols-sm="3"
						label="Confirm Email:"
						label-align-sm="right"
						label-for="nested-street"
					>
						<b-form-input v-model="cemail" id="nested-street"></b-form-input>
					</b-form-group>

					<b-form-group
						label-cols-sm="3"
						label="Password:"
						label-align-sm="right"
						label-for="nested-city"
					>
						<b-form-input v-model="pwd" type="password"  id="nested-city"></b-form-input>
					</b-form-group>
					<b-button @click="signup()" :disabled="check()"  variant="primary">Sign Up</b-button>
				</b-card>
			</div>
		</div>
		

	</div>
</template>

<script>
import  {db}  from '@/firebase'
export default {
	data(){
		return{
			disp_login:true,
			disp_text:'Signup',
			email : '',
			cemail : '',
			pwd : '',
		}
	},
	methods : {
		toggle_disp(){
			this.disp_login = !this.disp_login
			this.disp_text = this.disp_login === true ? 'Signup' :'Login'
			this.email=''
			this.cemail=''
			this.pwd=''
		},
		check(){
			if(this.disp_login){
				if(this.email === '' || this.pwd == '')
					return true
				else
					return false
			}
			else{
				if(this.email === '' || this.email !== this.cemail  || this.email === '' || this.pwd == '')
					return true
				else
					return false
			}
		},
		login(){
			db.collection('user-pwd').get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					let details = doc.data()
					if(this.email === details.user && this.pwd === details.pwd){
						this.$cookie.set('username', this.email);
						this.$router.go()
					}
				})
			})
		},
		signup(){
			let flag = true
			db.collection('user-pwd').get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					let details = doc.data()
					if(this.email === details.user){
						alert('Account Already exists')
						flag=false
					}
				})
			}).then(() =>{
				console.log(flag)
				if(flag)
					db.collection('user-pwd').add({user:this.email,pwd:this.pwd}).then(() =>{
						alert('Account Creation Successfull')
						this.$cookie.set('username', this.email);
						this.$router.go()
						})

			})
		}
	}
}
</script>

<style scoped>
.not-logged{
	display: flex;
	flex-direction: row-reverse
}

.forms{
	display: flex;
	justify-content: center;
	align-items: center
}

.forms > div{
	width: 50%;
}
</style>