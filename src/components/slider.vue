<template>
	<div class="slider">
		<div class="swiper-cocntainer">
			<div class="swiper-wrapper">
				<!-- <div class="swiper-slide">
					<a href="">
						<img src="../assets/banner1.jpg">
					</a>
					<div class="slider-item-info">
						<p class="slider-item-title">
							<a href="">
								游客需求裂变，海外目的地营销如何创新？
							</a>
						</p>
					</div>
				</div>
				<div class="swiper-slide">
					<a href="">
						<img src="../assets/banner2.jpg">
					</a>
					<div class="slider-item-info">
						<p class="slider-item-title">
							<a href="">
								Airbnb讲了一个好故事　那爱彼迎呢？
							</a>
						</p>
					</div>
				</div>
				<div class="swiper-slide">
					<a href="">
						<img src="../assets/banner3.jpg">
					</a>
					<div class="slider-item-info">
						<p class="slider-item-title">
							<a href="">
								电视广告在当今的旅游营销中如何发挥作用？
							</a>
						</p>
					</div>
				</div> -->
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
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
import Swiper from "swiper";
export default {
	name: "slider",
	data () {
		return {
			sliderList: [
				{
					img: "../assets/banner1.jpg",
					title: "游客需求裂变，海外目的地营销如何创新？",
					link: ""
				},
				{
					img: "../assets/banner2.jpg",
					title: "Airbnb讲了一个好故事　那爱彼迎呢？",
					link: ""
				},
				{
					img: "../assets/banner3.jpg",
					title: "电视广告在当今的旅游营销中如何发挥作用？",
					link: ""
				}
			]
		}
	},
	created () {
		new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			spaceBetween: 0,
			centeredSlides: true,
			autoplay: 4000,
			autoplayDisableOnInteraction: false,
			observer: true,
			lazyLoading: true,
			resistanceRatio: 0
		})
	}
}
</script>

<style lang="less">
@import "../assets/variable.less";
@import "../assets/css/swiper-3.4.2.min.css";
</style>


