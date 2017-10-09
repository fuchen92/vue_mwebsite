import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import listDefault from "@/views/list-default.vue"
import Channel from "@/views/channel.vue"

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: listDefault
		},
		{
			path: "/channel/:id",
			component: Channel
		}
	]
})
