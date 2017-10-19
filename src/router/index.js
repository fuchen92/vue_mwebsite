import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import Home from "@/views/home.vue"
import Channel from "@/views/channel.vue"
import About from "@/views/about.vue"
import Join from "@/views/join.vue"
import Contact from "@/views/contact.vue"

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
		},
		{
			path: "/about",
			component: About
		},
		{
			path: "/join",
			component: Join
		},
		{
			path: "/contact",
			component: Contact
		}
	]
})
