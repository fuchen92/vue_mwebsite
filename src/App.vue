<template>
	<div id="app">
		<div class="wrapper">
			<app-header @showCategory="showCategory" @showSearch="showSearch"></app-header>
			<app-menu :menuList="menuList"></app-menu>
			<siderbar-category :isShowCategory="isShowCategory" @hideCategory="hideCategory"></siderbar-category>
			<siderbar-search :isShowSearch="isShowSearch" @hideSearch="hideSearch"></siderbar-search>
			<router-view></router-view>
			<subscribe></subscribe>
		</div>
	</div>
</template>

<script>
import appHeader from "@/components/app-header.vue";
import appMenu from "@/components/app-menu.vue";
import siderbarCategory from "@/components/siderbar-category.vue";
import siderbarSearch from "@/components/siderbar-search.vue";
import subscribe from "@/components/subscribe.vue";
export default {
	name: 'app',
	components: {
		"app-header": appHeader,
		"app-menu": appMenu,
		"siderbar-category": siderbarCategory,
		"siderbar-search": siderbarSearch,
		"subscribe": subscribe
	},
	data () {
		return {
			// menuList: [
			// 	{ link: "/", text: "首页" },
			// 	{ link: "/online", text: "在线旅游" },
			// 	{ link: "/hotel", text: "酒店" },
			// 	{ link: "/airline", text: "航空公司" },
			// 	{ link: "/destination", text: "出入境及目的地" },
			// 	{ link: "/investment", text: "投资并购" },
			// 	{ link: "/distributor", text: "旅游分销商" },
			// 	{ link: "/tech", text: "旅游科技" },
			// 	{ link: "/system", text: "旅游分销系统" },
			// 	{ link: "/mice", text: "商务及奖励旅游" },
			// 	{ link: "/cruise", text: "油轮" },
			// 	{ link: "/carrent", text: "租车" },
			// 	{ link: "/airport", text: "机场" },
			// 	{ link: "/railway", text: "高铁" },
			// 	{ link: "/recommend", text: "推荐" },
			// 	{ link: "/review", text: "评论" },
			// 	{ link: "/translate", text: "译讯" },
			// 	{ link: "/lab", text: "创业" },
			// 	{ link: "/digest", text: "精选" }
			// ],
			menuList: [
				{ link: "/", text: "首页" },
				{ link: "/channel/1", text: "在线旅游" },
				{ link: "/channel/2", text: "酒店" },
				{ link: "/channel/3", text: "航空公司" },
				{ link: "/channel/4", text: "出入境及目的地" },
				{ link: "/channel/5", text: "投资并购" },
				{ link: "/channel/6", text: "旅游分销商" },
				{ link: "/channel/7", text: "旅游科技" },
				{ link: "/channel/8", text: "旅游分销系统" },
				{ link: "/channel/9", text: "商务及奖励旅游" },
				{ link: "/channel/10", text: "邮轮" },
				{ link: "/channel/11", text: "租车" },
				{ link: "/channel/12", text: "机场" },
				{ link: "/channel/13", text: "高铁" },
				{ link: "/channel/14", text: "推荐" },
				{ link: "/channel/15", text: "评论" },
				{ link: "/channel/16", text: "译讯" },
				{ link: "/channel/17", text: "创业" },
				{ link: "/channel/18", text: "精选" },
				{ link: "/channel/19", text: "企业新闻" }
			],
			isShowCategory: false,
			isShowSearch: false
		}
	},
	methods: {
		showCategory () {
			this.isShowCategory = true;
		},
		hideCategory () {
			this.isShowCategory = false;
		},
		showSearch () {
			this.isShowSearch = true;
		},
		hideSearch () {
			this.isShowSearch = false;
		}
	}
}
</script>

<style lang="less">
@import "./assets/basic.less";
#app {
	width: 100%;
	height: 100%;
}
.wrapper {
	margin-top: 100px;
	overflow: hidden;
}
</style>
