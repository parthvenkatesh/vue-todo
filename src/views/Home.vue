<template>
  <div class="home">
    <head_text />
    <user v-if="logged == true" :username="username"/>
    <nonuser v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import user from '@/components/user.vue'
import nonuser from '@/components/nonuser.vue'
import head_text from '@/components/head_text.vue'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
	head_text,
	user,
	nonuser,
  },
  data(){
	  return{
		  logged:true,
		  username:''
	  }
  },
  created(){
	  this.username = this.$cookie.get('username');
	  if(this.username)
	  	this.logged= false
  }
}
</script>

<style scoped>

.home{
	padding-top:50px;
}

</style>