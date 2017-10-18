import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import Home from "@/views/home.vue"
import Channel from "@/views/channel.vue"

import listDefault from "@/components/list-default.vue"
import subscribe from "@/components/subscribe.vue"

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Home,
			children: [
				{
					path: "",
					components: {
						default: listDefault,
						subscribe: subscribe
					}
				},
				{
					path: "channel/:id",
					component: Channel
				}
			]
		}
		// ,
		// {
		// 	path: "/channel/:id",
		// 	component: Channel
		// }
	]
})
