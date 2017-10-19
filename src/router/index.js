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
import appFooter from "@/components/app-footer.vue";

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			components: {
				default: Home,
				footer: appFooter
			},
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
			components: {
				default: About,
				footer: appFooter
			}
		},
		{
			path: "/join",
			components: {
				default: Join,
				footer: appFooter
			}
		},
		{
			path: "/contact",
			components: {
				default: Contact,
				footer: appFooter
			}
		}
	]
})
