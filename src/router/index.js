import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from "@/views/home.vue"
import Channel from "@/views/channel.vue"

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: "/channel/:id",
			component: Channel
		}
	]
})
