<template>
	<div>

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
					<div class="btn-container">
						<b-button variant="success" @click="login()" :disabled="check()" >Login</b-button>
						<b-button variant="primary" @click="toggle_disp()">{{disp_text}}</b-button>
					</div>
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
					<div class="btn-container">
						<b-button variant="success" @click="signup()" :disabled="check()">Sign Up</b-button>
						<b-button variant="primary" @click="toggle_disp()" >{{disp_text}}</b-button>
					</div>
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
			disp_text:'New User? Signup',
			email : '',
			cemail : '',
			pwd : '',
		}
	},
	methods : {
		toggle_disp(){
			this.disp_login = !this.disp_login
			this.disp_text = this.disp_login ? 'New User? Signup' :'Already User? Login'
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
			let found = false
			db.collection('user-pwd').get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					let details = doc.data()
					if(this.email === details.user && this.pwd === details.pwd){
						found = true
						console.log('logged')
						this.$cookie.set('username', this.email);
						this.$router.go()
					}
				})
			}).then((_) =>{
				if(!found)
					alert('User or Password Incorrect')
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

<style>
.btn-container{
	display: flex;
	justify-content: space-around

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