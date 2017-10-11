<template>
	<div class="main">
		<!-- <slider></slider> -->
		<div class="container">
			<banner></banner>
			<news-category :newsCategory="newsCategory"></news-category>
			<carousel-one :carouselList="carouselList"></carousel-one>
		</div>
	</div>
</template>

<script>
import banner from "@/components/banner.vue";
// import slider from "@/components/slider.vue";
import newsCategory from "@/components/news-category.vue";
import carouselOne from "@/components/carousel.vue";
export default {
	name: "list-default",
	data () {
		return {
			newsCategory: {
				link: "",
				type: "编辑推荐",
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
					img: require("../assets/carousel-2.jpg"),
					link: "",
					title: "首个民宿国家行业标准生效　但短租仍处于灰色地带",
					time: "2017-10-10"
				}
			]
		}
	},
	components: {
		// "slider": slider
		"banner": banner,
		"news-category": newsCategory,
		"carousel-one": carouselOne
	}
}
</script>

<style lang="less">
.main {
	overflow: hidden;
}
</style>

