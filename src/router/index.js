import Vue from 'vue'
import VueRouter from 'vue-router'
import user from '@/views/user.vue'
import nonuser from '@/views/nonuser.vue'

Vue.use(VueRouter)

  const routes = [

	{
		path: '/',
		name: 'nonuser',
		component: nonuser
	},
	{
		path: '/nonuser',
		name: 'nonuser',
		component: nonuser
	},
	{
		path: '/user',
		name: 'user',
		component: user
	}
]

const router = new VueRouter({
  routes
})

export default router
