<template>
	<div class="container">
		<banner></banner>
		<news-category :newsCategory="newsCategory"></news-category>
		<carousel-one class="carousel-one" :carouselList="carouselList">
			<advertise class="advertise-1" :advertise="advertise" slot="advertise"></advertise>
		</carousel-one>
		<div class="news-item-container">
			<news-category :newsCategory="newsCategoryTwo"></news-category>
			<template v-for="(news, index) in newsList">
				<div class="news-item" :key="news.title">
					<h4 class="news-title">
						<!-- <a :href="news.link">{{ news.title }}</a> -->
						<router-link :to="news.link">{{ news.title }}</router-link>
					</h4>
					<div class="times">{{ news.time }}</div>
					<p class="news-intro">{{ news.intro }}</p>
				</div>
			</template>
			<advertise :advertise="advertise2"></advertise>
			<template v-for="(news, index) in newsList2">
				<div class="news-item" :key="news.title" :style="{ 'border-bottom': (index == newsList2.length - 1) ? '0px' : ''  }">
					<h4 class="news-title">
						<!-- <a :href="news.link">{{ news.title }}</a> -->
						<router-link :to="news.link">{{ news.title }}</router-link>
					</h4>
					<div class="times">{{ news.time }}</div>
					<p class="news-intro">{{ news.intro }}</p>
				</div>
			</template>
			<news-category :newsCategory="newsCategoryThree"></news-category>
			<carousel-two class="carousel-two" :carouselList="activityList"></carousel-two>
			<template v-for="(more, idx) in moreList">
				<div class="news-item" :key="more.title">
					<h4 class="news-title">
						<!-- <a :href="more.link">{{ more.title }}</a> -->
						<router-link :to="more.link">{{ more.title }}</router-link>
					</h4>
					<div class="times">{{ more.time }}</div>
					<p class="news-intro">{{ more.intro }}</p>
				</div>
			</template>
		</div>
		<div class="more-news-btn" id="readmore">加载更多</div>
	</div>
</template>

<script>
import banner from "@/components/banner.vue";
import newsCategory from "@/components/news-category.vue";
import carousel from "@/components/carousel.vue";
import advertise from "@/components/advertise.vue";

export default {
	name: "listDefault",
	data() {
		return {
			newsCategory: {
				link: "",
				type: "编辑推荐",
				moretext: "更多>>"
			},
			newsCategoryTwo: {
				link: "",
				type: "最新资讯"
			},
			newsCategoryThree: {
				link: "",
				type: "近期活动",
				moretext: "更多>>"
			},
			carouselList: [
				{
					img: require("../assets/carousel-1.jpg"),
					link: "",
					title: "“你收到一条好友请求”",
					time: "2017-10-11"
				},
				{
					img: require("../assets/carousel-2.jpg"),
					link: "",
					title: "增值业务，是金牛还是鸡肋？",
					time: "2017-10-11"
				},
				{
					img: require("../assets/carousel-3.jpg"),
					link: "",
					title: "伊斯坦布尔新机场将部署SITA技术实现100%行李追踪",
					time: "2017-10-10"
				},
				{
					img: require("../assets/carousel-4.jpg"),
					link: "",
					title: "首个民宿国家行业标准生效　但短租仍处于灰色地带",
					time: "2017-10-10"
				}
			],
			activityList: [
				{
					img: require("../assets/recent-5.jpg"),
					link: "",
					title: "2017 人民代表大会"
				},
				{
					img: require("../assets/recent-1.jpg"),
					link: "",
					title: "2017 人民代表大会"
				},
				{
					img: require("../assets/recent-6.jpg"),
					link: "",
					title: "2017 人民代表大会"
				}
			],
			advertise: {
				id: "xcode81",
				link: "http://event.traveldaily.cn/adc2017/",
				img: require("../assets/advertise-1.jpg")
			},
			advertise2: {
				id: "xcode82",
				link: "",
				img: require("../assets/advertise-1.jpg")
			},
			newsList: "",
			newsList2: "",
			moreList: ""
		}
	},
	components: {
		"banner": banner,
		"news-category": newsCategory,
		"carousel-one": carousel,
		"advertise": advertise,
		"carousel-two": carousel
	},
	mounted () {
		this.$http.get("/api/news").then(res => {
			this.newsList = res.data;
		});
		this.$http.get("/api/news2").then(res => {
			this.newsList2 = res.data;
		})
	}
}
</script>

<style lang="less">
@import "../assets/variable.less";
.news-item-container {
	margin-top: 20px;
}

.news-item {
	margin-top: 25px;
	padding-bottom: 25px;
	border-bottom: 1px solid #E4E4E4;
}

.news-title {
	font-weight: bold;
	margin-bottom: 10px;
	font-size: 16px;
	>a {
		color: @post-title-color;
	}
}

.times {
	box-sizing: border-box;
	padding-left: 25px;
	color: @newstime-color;
	background: url(../assets/time.png) left center no-repeat;
	background-size: contain;
	font-size: 13px;
	margin-bottom: 10px;
}

.news-intro {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	font-size: 14px;
	color: @newsintro-color;
	line-height: 25px;
}

.news-item:nth-last-child(1) {
	border-bottom: none;
}

.more-news-btn {
	height: 35px;
	line-height: 35px;
	color: #fff;
	background-color: #006395;
	text-align: center;
	border-radius: 5px;
	font-size: 16px;
	margin: 20px 0 50px;
	&:active {
		background-color: #d1d1d1;
	}
}
</style>


