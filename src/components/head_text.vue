<template>
	<div class="header">
		<span class="title">Todo-List</span>
		<div v-if="show" class="header-right">
			<b-button @click="logout()">Logout</b-button>
			<div class="tool" v-b-tooltip.hover title="Double Click to edit. Then press Enter to save">
				<b-icon icon="exclamation-circle-fill" variant="dark"></b-icon>
			</div>
		</div>


	</div>

</template>

<script>
export default {
	name:'head_text',
	data(){
		return{
			
		}
	},
	computed:{
		show(){
			return this.$store.state.user === null ? false : true
		}
	},
	methods:{
		logout(){
			this.text_msg = 'Logging Out.'
			this.$store.commit("setbusy")
			this.$cookie.delete('username');
			this.$store.commit("setuser")
			this.$store.commit("setbusy")
			this.$router.go('/nonuser')
		},
	},
	create(){

	}
}
</script>

<style scoped>

.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
  background-color: black;
}

.title{
	float: left;
	font-size: 3em;
}

.header-right {
  float: right;
  display: flex;
  flex-direction: row-reverse;
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