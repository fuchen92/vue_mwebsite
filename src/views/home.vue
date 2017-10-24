<template>
	<div class="main">
		<app-header @showCategory="showCategory" @showSearch="showSearch"></app-header>
		<app-menu :menuList="menuList"></app-menu>
		<siderbar-category :isShowCategory="isShowCategory" @hideCategory="hideCategory"></siderbar-category>
		<siderbar-search :isShowSearch="isShowSearch" @hideSearch="hideSearch"></siderbar-search>

		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view name="subscribe"></router-view>
	</div>
</template>

<script>
import appHeader from "@/components/app-header.vue";
import appMenu from "@/components/app-menu.vue";
import siderbarCategory from "@/components/siderbar-category.vue";
import siderbarSearch from "@/components/siderbar-search.vue";
export default {
	name: "list-default",
	data () {
		return {
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
	components: {
		"app-header": appHeader,
		"app-menu": appMenu,
		"siderbar-category": siderbarCategory,
		"siderbar-search": siderbarSearch
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
.main {
	overflow: hidden;
	margin-top: 100px;
}
</style>

