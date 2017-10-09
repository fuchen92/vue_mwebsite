<template>
	<div class="slider">
		<div class="container">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<template v-for="slider in sliderList">
						<div class="swiper-slide" :key="slider.title">
							<a :href="slider.link">
								<img :src="slider.img">
							</a>
							<div class="slider-item-info">
								<p class="slider-item-title">
									<a :href="slider.link">
										{{ slider.title }}
									</a>
								</p>
							</div>
						</div>
					</template>
				</div>
				<div class="swiper-pagination">
					<span class="swiper-pagination-bullet"></span>
					<span class="swiper-pagination-bullet"></span>
					<span class="swiper-pagination-bullet"></span>
					<span class="swiper-pagination-bullet"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import Swiper from "swiper";
export default {
	name: "slider",
	data () {
		return {
			sliderList: [
				{
					img: require("../assets/banner1.jpg"),
					title: "游客需求裂变，海外目的地营销如何创新？",
					link: ""
				},
				{
					img: require("../assets/banner2.jpg"),
					title: "Airbnb讲了一个好故事　那爱彼迎呢？",
					link: ""
				},
				{
					img: require("../assets/banner3.jpg"),
					title: "电视广告在当今的旅游营销中如何发挥作用？",
					link: ""
				},
				{
					img: require("../assets/banner4.jpg"),
					title: "李少华：飞猪没有边界，但有取舍",
					link: ""
				}
			]
		}
	},
	mounted () {
		new window.Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			// paginationClickable: true,
			// spaceBetween: 0,
			// centeredSlides: true,
			autoplay: 1000,
			loop: true
			// autoplayDisableOnInteraction: false,
			// observer: true,
			// lazyLoading: true,
			// resistanceRatio: 0
		})
	}
}
</script>

<style lang="less">
@import "../assets/variable.less";
@import "../assets/css/swiper-3.4.2.min.css";
.slider {
	height: 210px;
	margin-top: 20px;
	overflow: hidden;
}
.swiper-container {
	width: 100%;
	height: 100%;
}
.swiper-wrapper {
	height: 190px;
}
.swiper-slide > a {
	display: block;
	width: 100%;
	height: 100%;
}
.swiper-slide img {
	width: 100%;
	height: 100%;
}
.slider-item-info {
	position: absolute;
    bottom: 0;
	left: 0;
	width: 100%;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
}
.slider-item-title {
	box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-align: center;
    align-items: center;
    padding: 0 15px;
	font-size: 18px;
	> a {
		color: @init-color;
	}
}
.swiper-pagination {
	width: 100%;
	height: 20px;
	line-height: 20px;
	bottom: 0px;
	text-align: center;
}
</style>


