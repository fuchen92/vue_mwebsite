<template>
	<div class="siderbar">
		<div class="container">
			<div class="close-siderbar">×</div>
			<div class="category-list-container">
				<template v-for="(category, index) in categoryList">
					<div class="category-list" :key="category.name">
						<h3 class="category-title">{{ category.name }}</h3>
						<template v-for="(subcategory, idx) in category.subcategory">
							<div class="category-group" :key="subcategory.text">

									<div class="category-item lt">
										<router-link class="category-link" :to="subcategory.link">
											<span class="cagory-icon" :style="{ backgroundImage: subcategory.icon }"></span>
											<span class="category-name">{{ subcategory.text }}</span>
										</router-link>
									</div>
							</div>
						</template>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "siderbar",
	data () {
		return {
			categoryList: [
				{
					name: "新闻",
					subcategory: [
						{
							link: "/recommend",
							icon: 'url(static/img/logo.png)',
							text: "编辑推荐"
						},
						{
							link: "/review",
							icon: "./assets/icons/icon-1c.png",
							text: "评论"
						},
						{
							link: "/translate",
							icon: "./assets/icons/icon-1b.png",
							text: "译讯"
						},
						{
							link: "/lab",
							icon: "./assets/icons/icon-1e.png",
							text: "创业"
						},
						{
							link: "/digest",
							icon: "./assets/icons/icon-1d.png",
							text: "精选"
						},
						{
							link: "/online",
							icon: "./assets/icons/icon-2a.png",
							text: "在线旅游"
						},
						{
							link: "/hotel",
							icon: "./assets/icons/icon-2b.png",
							text: "酒店"
						},
						{
							link: "/airline",
							icon: "./assets/icons/icon-2c.png",
							text: "航空公司"
						},
						{
							link: "/destination",
							icon: "./assets/icons/icon-2d.png",
							text: "出入境及目的地"
						},
						{
							link: "/investment",
							icon: "./assets/icons/icon-2e.png",
							text: "投资并购"
						},
						{
							link: "/investment",
							icon: "./assets/icons/icon-2f.png",
							text: "旅游分销商"
						},
						{
							link: "/tech",
							icon: "./assets/icons/icon-2g.png",
							text: "旅游科技"
						},
						{
							link: "/system",
							icon: "./assets/icons/icon-2h.png",
							text: "旅游分销系统"
						},
						{
							link: "/cruise",
							icon: "./assets/icons/icon-2i.png",
							text: "邮轮"
						},
						{
							link: "/mice",
							icon: "./assets/icons/icon-2j.png",
							text: "商务及奖励旅游"
						},
						{
							link: "/carrent",
							icon: "./assets/icons/icon-2k.png",
							text: "租车"
						},
						{
							link: "/airport",
							icon: "./assets/icons/icon-2l.png",
							text: "机场"
						},
						{
							link: "/railway",
							icon: "./assets/icons/icon-2m.png",
							text: "高铁"
						},
						{
							link: "/company",
							icon: "./assets/icons/icon-2n.png",
							text: "企业新闻"
						}
					]
				},
				{
					name: "活动",
					subcategory: [
						{
							link: "http://event.traveldaily.cn/",
							icon: "./assets/icons/icon-3a.png",
							text: "查看全年活动"
						},
						{
							link: "http://event.traveldaily.cn/packaged/",
							icon: "./assets/icons/icon-3b.png",
							text: "购买活动联票"
						}
					]
				},
				{
					name: "招聘",
					subcategory: [
						{
							link: "http://www.traveldaily.cn/marketing/hr",
							icon: "./assets/icons/icon-4a.png",
							text: "免费发布招聘信息"
						},
						{
							link: "/job",
							icon: "./assets/icons/icon-4b.png",
							text: "查看最新工作机会"
						}
					]
				},
				{
					name: "营销",
					subcategory: [
						{
							link: "http://www.traveldaily.cn/marketing/service",
							icon: "./assets/icons/icon-5a.png",
							text: "精准营销服务"
						},
						{
							link: "http://www.traveldaily.cn/marketing/workshop",
							icon: "./assets/icons/icon-5b.png",
							text: "举办在线讲堂"
						}
					]
				},
				{
					name: "China Travel News",
					subcategory: [
						{
							link: "http://www.chinatravelnews.com/china/?_gscu_=06439806uzkodc66&_gscs_=t06608580pltjny59",
							icon: "./assets/icons/icon-6a.png",
							text: "China"
						},
						{
							link: "http://www.chinatravelnews.com/international/?_gscu_=06439806uzkodc66&_gscs_=t06608580pltjny59",
							icon: "./assets/icons/icon-6b.png",
							text: "International"
						}
					]
				}
			]
		}
	}
}
</script>

<style lang="less">
	@import "../assets/variable.less";
	.siderbar {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: @basic-color;
		z-index: 20;
		> .container {
			overflow-y: scroll;
			-webkit-overflow-scrolling: touch;
		}
	}
	.close-siderbar {
		position: absolute;
		top: 20px;
		right: 20px;
		width: 30px;
		height: 30px;
		text-align: center;
		color: @init-color;
		line-height: 30px;
		font-size: 40px;
	}
	.category-list-container {
		margin-top: 60px;
		color: @init-color;
	}
	.category-list {
		margin-bottom: 50px;
	}
	.category-title {
		font-size: 18px;
		margin-bottom: 15px;
	}
	.category-list, .category-group {
		overflow: hidden;
	}
	.category-group {
		margin: 0 0 10px;
	}
	.category-item {
		width: 50%;
	}
	.category-link {
		color: @init-color;
	}
</style>


