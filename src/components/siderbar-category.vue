<template>
	<div class="siderbar siderbar-category" :class="{ 'siderbar-category-active': isShowCategory }">
		<div class="container">
			<div class="close-siderbar" @click="closeCategory">×</div>
			<div class="category-list-container">
				<div class="category-list">
					<h3 class="category-title">新闻</h3>
					<div class="category-group">
						<div class="category-item lt">
							<a class="category-link" href="#/channel/14" @click="closeCategory">
								<span class="category-icon a1"></span>
								<span class="category-name">编辑推荐</span>
							</a>
						</div>
						<div class="category-item lt">
							<a class="category-link" href="#/channel/15" @click="closeCategory">
								<span class="category-icon a2"></span>
								<span class="category-name">评论</span>
							</a>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<a class="category-link" href="#/channel/16" @click="closeCategory">
								<span class="category-icon a3"></span>
								<span class="category-name">译讯</span>
							</a>
						</div>
						<div class="category-item lt">
							<a class="category-link" href="#/channel/17" @click="closeCategory">
								<span class="category-icon a4"></span>
								<span class="category-name">创业</span>
							</a>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<a class="category-link" href="#/channel/18" @click="closeCategory">
								<span class="category-icon a5"></span>
								<span class="category-name">精选</span>
							</a>
						</div>
					</div>
					<div class="divide"></div>
					<div class="category-group">
						<div class="category-item lt">
							<a class="category-link" href="#/channel/1" @click="closeCategory">
								<span class="category-icon b1"></span>
								<span class="category-name">在线旅游</span>
							</a>
						</div>
						<div class="category-item lt newline">
							<a class="category-link" href="#/channel/2" @click="closeCategory">
								<span class="category-icon b2"></span>
								<span class="category-name">酒店</span>
							</a>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<a class="category-link" href="#/channel/3" @click="closeCategory">
								<span class="category-icon b3"></span>
								<span class="category-name">航空公司</span>
							</a>
						</div>
						<div class="category-item lt newline">
							<a class="category-link" href="#/channel/4" @click="closeCategory">
								<span class="category-icon b4"></span>
								<span class="category-name">出入境及目的地</span>
							</a>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<a class="category-link" href="#/channel/5" @click="closeCategory">
								<span class="category-icon b5"></span>
								<span class="category-name">投资并购</span>
							</a>
						</div>
						<div class="category-item lt newline">
							<a class="category-link" href="#/channel/6" @click="closeCategory">
								<span class="category-icon b6"></span>
								<span class="category-name">旅游分销商</span>
							</a>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<a class="category-link" href="#/channel/7" @click="closeCategory">
								<span class="category-icon b7"></span>
								<span class="category-name">旅游科技</span>
							</a>
						</div>
						<div class="category-item lt newline">
							<a class="category-link" href="#/channel/8" @click="closeCategory">
								<span class="category-icon b8"></span>
								<span class="category-name">旅游分销系统</span>
							</a>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<a class="category-link" href="#/channel/10" @click="closeCategory">
								<span class="category-icon b9"></span>
								<span class="category-name">邮轮</span>
							</a>
						</div>
						<div class="category-item lt newline">
							<a class="category-link" href="#/channel/9" @click="closeCategory">
								<span class="category-icon b10"></span>
								<span class="category-name">商务及奖励旅游</span>
							</a>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<a class="category-link" href="#/channel/11" @click="closeCategory">
								<span class="category-icon b11"></span>
								<span class="category-name">租车</span>
							</a>
						</div>
						<div class="category-item lt newline">
							<a class="category-link" href="#/channel/12" @click="closeCategory">
								<span class="category-icon b12"></span>
								<span class="category-name">机场</span>
							</a>
						</div>
					</div>
					<div class="category-group">
						<div class="category-item lt">
							<a class="category-link" href="#/channel/13" @click="closeCategory">
								<span class="category-icon b13"></span>
								<span class="category-name">高铁</span>
							</a>
						</div>
						<div class="category-item lt newline">
							<a class="category-link" href="#/channel/19" @click="closeCategory">
								<span class="category-icon b14"></span>
								<span class="category-name">企业新闻</span>
							</a>
						</div>
					</div>
				</div>
				<template v-for="(category, index) in categoryList">
					<div class="category-list" :key="category.name">
						<h3 class="category-title">{{ category.name }}</h3>
						<template v-for="(subcategory, idx) in category.subcategory">
							<div class="category-group" :key="subcategory.text">
								<div class="category-item lt only-contain-one">
									<a class="category-link" :href="subcategory.link" @click="closeCategory">
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
	name: "siderbar-category",
	props: {
		isShowCategory: {
			required: true,
			type: Boolean
		}
	},
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
							className: "c1"
						},
						{
							link: "http://event.traveldaily.cn/packaged/",
							icon: "./assets/icons/icon-3b.png",
							text: "购买活动联票",
							className: "c2"
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
							className: "d1"
						},
						{
							link: "/job",
							icon: "./assets/icons/icon-4b.png",
							text: "查看最新工作机会",
							className: "d2"
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
							className: "e1"
						},
						{
							link: "http://www.traveldaily.cn/marketing/workshop",
							icon: "./assets/icons/icon-5b.png",
							text: "举办在线讲堂",
							className: "e2"
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
							className: "f1"
						},
						{
							link: "http://www.chinatravelnews.com/international/?_gscu_=06439806uzkodc66&_gscs_=t06608580pltjny59",
							icon: "./assets/icons/icon-6b.png",
							text: "International",
							className: "f2"
						}
					]
				}
			]
		}
	},
	methods: {
		closeCategory () {
			this.$emit("hideCategory");
		}
	}
}
</script>

<style lang="less">
	@import "../assets/variable.less";
	.siderbar-category {
		left: -100%;
	}
	.siderbar-category-active {
		left: 0;
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
	.generate-background-a(@n) when (@n <= 5) {
		.a@{n} {
			background-image: url('../assets/icons/icon-a@{n}.png');
		}
		.generate-background-a((@n + 1))
	}
	.generate-background-b(@n) when (@n <= 14) {
		.b@{n} {
			background-image: url('../assets/icons/icon-b@{n}.png');
		}
		.generate-background-b((@n + 1))
	}
	.generate-background-c(@n) when (@n <= 2) {
		.c@{n} {
			background-image: url('../assets/icons/icon-c@{n}.png');
		}
		.generate-background-c((@n + 1))
	}
	.generate-background-d(@n) when (@n <= 2) {
		.d@{n} {
			background-image: url('../assets/icons/icon-d@{n}.png');
		}
		.generate-background-d((@n + 1))
	}
	.generate-background-e(@n) when (@n <= 2) {
		.e@{n} {
			background-image: url('../assets/icons/icon-e@{n}.png');
		}
		.generate-background-e((@n + 1))
	}
	.generate-background-f(@n) when (@n <= 2) {
		.f@{n} {
			background-image: url('../assets/icons/icon-f@{n}.png');
		}
		.generate-background-f((@n + 1))
	}
	.category-item {
		.generate-background-a(1);
	}
	.category-item {
		.generate-background-b(1);
	}
	.category-item {
		.generate-background-c(1);
	}
	.category-item {
		.generate-background-d(1);
	}
	.category-item {
		.generate-background-e(1);
	}
	.category-item {
		.generate-background-f(1);
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


