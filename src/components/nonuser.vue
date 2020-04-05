<template>
	<div>
		<div class="not-logged">
		<b-button @click="toggle_disp()">Login</b-button>
		<b-button @click="toggle_disp()">Signup</b-button>
		</div>
		<div class="forms" >
			<div v-if="disp_login==true">
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
					<b-button @click="run()" :disabled="check()" variant="primary">Sign In</b-button>
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
					<b-button @click="run()" :disabled="check()"  variant="primary">Sign Up</b-button>
				</b-card>
			</div>
		</div>
		

	</div>
</template>

<script>
import  db  from '@/firebase'
export default {
	data(){
		return{
			disp_login:true,
			email : '',
			cemail : '',
			pwd : '',
		}
	},
	methods : {
		toggle_disp(){
			this.disp_login = !this.disp_login
		},
		check(){
			if(this.disp_login){
				if(this.email === '' || this.pwd == '')
					return true
				else
					return false
			}
			else{
				if(this.email === '' || this.email === this.cemail  || this.email === '' || this.pwd == '')
					return true
				else
					return false
			}
		},

		run(){
			if(this.disp_login){
				
			}
			else{
			}
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