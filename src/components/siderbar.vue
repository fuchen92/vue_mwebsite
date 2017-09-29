<template>
	<div class="siderbar">
		<div class="container">
			<div class="close-siderbar">×</div>
			<div class="category-list-container">
				<div class="category-list">
					<h3 class="category-title">新闻</h3>
					<div class="category-group">
						<div class="category-item lt">
							<router-link class="category-link" to="/recommend">
								<span class="category-icon a1"></span>
								<span class="category-name">编辑推荐</span>
							</router-link>
						</div>
						<div class="category-item lt">
							<router-link class="category-link" to="/review">
								<span class="category-icon c1"></span>
								<span class="category-name">评论</span>
							</router-link>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<router-link class="category-link" to="/translate">
								<span class="category-icon b1"></span>
								<span class="category-name">译讯</span>
							</router-link>
						</div>
						<div class="category-item lt">
							<router-link class="category-link" to="/lab">
								<span class="category-icon e1"></span>
								<span class="category-name">创业</span>
							</router-link>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<router-link class="category-link" to="/digest">
								<span class="category-icon d1"></span>
								<span class="category-name">精选</span>
							</router-link>
						</div>
					</div>
					<div class="divide"></div>
					<div class="category-group">
						<div class="category-item lt">
							<router-link class="category-link" to="/online">
								<span class="category-icon a2"></span>
								<span class="category-name">在线旅游</span>
							</router-link>
						</div>
						<div class="category-item lt newline">
							<router-link class="category-link" to="/hotel">
								<span class="category-icon b2"></span>
								<span class="category-name">酒店</span>
							</router-link>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<router-link class="category-link" to="/airline">
								<span class="category-icon c2"></span>
								<span class="category-name">航空公司</span>
							</router-link>
						</div>
						<div class="category-item lt newline">
							<router-link class="category-link" to="/destination">
								<span class="category-icon d2"></span>
								<span class="category-name">出入境及目的地</span>
							</router-link>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<router-link class="category-link" to="/investment">
								<span class="category-icon e2"></span>
								<span class="category-name">投资并购</span>
							</router-link>
						</div>
						<div class="category-item lt newline">
							<router-link class="category-link" to="/distributor">
								<span class="category-icon f2"></span>
								<span class="category-name">旅游分销商</span>
							</router-link>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<router-link class="category-link" to="/tech">
								<span class="category-icon g2"></span>
								<span class="category-name">旅游科技</span>
							</router-link>
						</div>
						<div class="category-item lt newline">
							<router-link class="category-link" to="/system">
								<span class="category-icon h2"></span>
								<span class="category-name">旅游分销系统</span>
							</router-link>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<router-link class="category-link" to="/cruise">
								<span class="category-icon i2"></span>
								<span class="category-name">邮轮</span>
							</router-link>
						</div>
						<div class="category-item lt newline">
							<router-link class="category-link" to="/mice">
								<span class="category-icon j2"></span>
								<span class="category-name">商务及奖励旅游</span>
							</router-link>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<router-link class="category-link" to="/carrent">
								<span class="category-icon k2"></span>
								<span class="category-name">租车</span>
							</router-link>
						</div>
						<div class="category-item lt newline">
							<router-link class="category-link" to="/airport">
								<span class="category-icon l2"></span>
								<span class="category-name">机场</span>
							</router-link>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<router-link class="category-link" to="/railway">
								<span class="category-icon m2"></span>
								<span class="category-name">高铁</span>
							</router-link>
						</div>
						<div class="category-item lt newline">
							<router-link class="category-link" to="/company">
								<span class="category-icon n2"></span>
								<span class="category-name">企业新闻</span>
							</router-link>
						</div>
					</div>
				</div>
				<template v-for="(category, index) in categoryList">
					<div class="category-list" :key="category.name">
						<h3 class="category-title">{{ category.name }}</h3>
						<template v-for="(subcategory, idx) in category.subcategory">
							<div class="category-group" :key="subcategory.text">
								<div class="category-item lt only-contain-one">
									<a class="category-link" :href="subcategory.link">
										<span class="category-icon" :class="subcategory.className"></span>
										<span class="category-name">{{ subcategory.text }}</span>
									</a>
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
					name: "活动",
					subcategory: [
						{
							link: "http://event.traveldaily.cn/",
							icon: "./assets/icons/icon-3a.png",
							text: "查看全年活动",
							className: "a3"
						},
						{
							link: "http://event.traveldaily.cn/packaged/",
							icon: "./assets/icons/icon-3b.png",
							text: "购买活动联票",
							className: "b3"
						}
					]
				},
				{
					name: "招聘",
					subcategory: [
						{
							link: "http://www.traveldaily.cn/marketing/hr",
							icon: "./assets/icons/icon-4a.png",
							text: "免费发布招聘信息",
							className: "a4"
						},
						{
							link: "/job",
							icon: "./assets/icons/icon-4b.png",
							text: "查看最新工作机会",
							className: "b4"
						}
					]
				},
				{
					name: "营销",
					subcategory: [
						{
							link: "http://www.traveldaily.cn/marketing/service",
							icon: "./assets/icons/icon-5a.png",
							text: "精准营销服务",
							className: "a5"
						},
						{
							link: "http://www.traveldaily.cn/marketing/workshop",
							icon: "./assets/icons/icon-5b.png",
							text: "举办在线讲堂",
							className: "b5"
						}
					]
				},
				{
					name: "China Travel News",
					subcategory: [
						{
							link: "http://www.chinatravelnews.com/china/?_gscu_=06439806uzkodc66&_gscs_=t06608580pltjny59",
							icon: "./assets/icons/icon-6a.png",
							text: "China",
							className: "a6"
						},
						{
							link: "http://www.chinatravelnews.com/international/?_gscu_=06439806uzkodc66&_gscs_=t06608580pltjny59",
							icon: "./assets/icons/icon-6b.png",
							text: "International",
							className: "b6"
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
	.divide {
		width: 150px;
		height: 1px;
		background-color: @init-color;
		margin: 30px 0;
	}
	.category-item {
		width: 50%;
	}
	.only-contain-one {
		width: 100%;
	}
	.category-link {
		color: @init-color;
	}
	.category-icon, .category-name {
		display: inline-block;
		vertical-align: middle;
	}
	.category-icon {
		width: 25px;
		height: 25px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		margin-right: 5px;
	}
	.category-name {
		font-size: 17px;
		line-height: 35px;
	}
	.generate-background(@n, @i: 1) when (@i <= @n) {

	}
	@media screen and (max-width: 320px) {
		.newline {
			float: none;
			clear: both;
			width: 100%;
			padding-top: 10px;
		}
	}
</style>


