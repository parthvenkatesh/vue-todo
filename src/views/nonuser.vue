<template>
	<div>
	<b-overlay :show="working" rounded="sm">
		<div class="forms" >
			<div v-if="disp_login">
				<p>Login</p>
				<b-card >
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
				<p>Create an account</p>
				<b-card >
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
						label="Password:"
						label-align-sm="right"
						label-for="nested-street"
					>
						<b-form-input v-model="pwd" id="nested-street"></b-form-input>
					</b-form-group>
						<b-form-group
						label-cols-sm="3"
						label="Confirm Password:"
						label-align-sm="right"
						label-for="nested-city"
					>
						<b-form-input v-model="cpwd" type="password"  id="nested-city"></b-form-input>
					</b-form-group>
					<div class="btn-container">
						<b-button variant="success" @click="signup()" :disabled="check()">Sign Up</b-button>
						<b-button variant="primary" @click="toggle_disp()" >{{disp_text}}</b-button>
					</div>
				</b-card>
			</div>
		</div>
		<template v-slot:overlay>
			<div class="text-center">
			<b-icon icon="gear" font-scale="3" animation="spin"></b-icon>
			<p id="cancel-label">{{text_msg}}</p>
			</div>
		</template>
	</b-overlay>		
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
			cpwd : '',
			pwd : '',
			text_msg:''
		}
	},
	computed:{
		working(){
			return this.$store.state.busy
		},
	},
	created(){
	  
	  console.log("user:"+this.$store.state.user)
	  if(this.$store.state.user !== null ){
		  this.$router.push("user")
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
				if(this.email === '' || this.pwd == '' || this.pwd !== this.cpwd )
					return true
				else
					return false
			}
		},
		login(){
			this.text_msg='Logging In. Please Wait.'
			
			let found = false
			db.collection('user-pwd').get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					let details = doc.data()
					if(this.email === details.user && this.pwd === details.pwd){
						found = true
						console.log('logged')
						this.$cookie.set('username', this.email);
						this.$store.commit("setuser",this.email)
						this.$router.push('user')
					}
				})
			}).then((_) =>{
				if(!found)
					alert('User or Password Incorrect')
					
			})
		},
		signup(){
			
			this.text_msg='Saving Details. Please Wait.'
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
	justify-content: space-around;

}

.forms{
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 50px;
}
div{

	background-color: rgb(10,10,10);
}
p{
	font-size: 3rem;
}
b-card{
	padding: 0;
	margin: 0;
}

@media  (max-width: 500px) {
	.forms > div{
	width: 100%;
	}
}
@media  (min-width: 500px) {
	.forms > div{
	width: 70%;
	}
}


</style>