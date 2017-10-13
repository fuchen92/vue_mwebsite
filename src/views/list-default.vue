<template>
	<div class="main">
		<!-- <slider></slider> -->
		<div class="container">
			<banner></banner>
			<news-category :newsCategory="newsCategory"></news-category>
			<carousel-one class="carousel-one" :carouselList="carouselList">
				<advertise :advertise="advertise" slot="advertise"></advertise>
			</carousel-one>
			<div class="news-item-container">
				<news-category :newsCategory="newsCategoryTwo"></news-category>
				<div class="news-item" v-for="(news, index) in newsList" :key="news.title">
					<h4 class="news-title">
						<a :href="news.link">{{ news.title }}</a>
					</h4>
					<div class="times">{{ news.time }}</div>
					<p class="news-intro">{{ news.intro }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import banner from "@/components/banner.vue";
// import slider from "@/components/slider.vue";
import newsCategory from "@/components/news-category.vue";
import carouselOne from "@/components/carousel.vue";
import advertise from "@/components/advertise.vue";
export default {
	name: "list-default",
	data () {
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
			advertise: {
				id: "xcode81",
				link: "http://event.traveldaily.cn/adc2017/",
				img: require("../assets/advertise-1.jpg")
			},
			newsList: ""
		}
	},
	components: {
		// "slider": slider
		"banner": banner,
		"news-category": newsCategory,
		"carousel-one": carouselOne,
		"advertise": advertise
	},
	methods: {
		// getNews () {
		// 	axios.get("/news").then(res => {
		// 		console.log(res)
		// 	})
		// }
	},
	mounted () {
		console.log(this)
		this.$http.get("/mock/news/news").then(res => {
			console.log(res)
			// console.log(this)
			this.newsList = res.data
		})
	}
}
</script>

<style lang="less">
@import "../assets/variable.less";
.main {
	overflow: hidden;
}
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
	> a {
    	color: @post-title-color;
	}
}
.times {
    box-sizing: border-box;
    padding-left: 25px;
    // background-image: url(img/time.png);
    // background-repeat: no-repeat;
	// background-position: left center;
	color: #999999;
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
    color: #666;
    line-height: 25px;
}
</style>

