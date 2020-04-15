<template>
  <div id="app">
	<head_text />
    <router-view/>
  </div>
</template>


<script>
import head_text from '@/components/head_text.vue'

export default {
	name:'App',
	components:{
		head_text,
	},
	data(){
	  return{
		
	  }
  },
  created(){
	  this.$store.commit("setuser",this.$cookie.get('username'))
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.home{
	color: white;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
