<template>
	<div class="carousel carousel-one swiper-container">
		<ul class="swiper-wrapper">
			<li class="carousel-item swiper-slide" v-for="carousel in carouselList" :key="carousel.title">
				<div class="news-img-container">
					<a :href="carousel.link">
						<img :src="carousel.img">
					</a>
				</div>
				<p class="news-img-intro">
					<a :href="carousel.link">{{ carousel.title }}</a>
				</p>
				<p class="news-img-intro" v-if="carousel.time">{{ carousel.time }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "carousel",
	props: {
		carouselList: {
			type: Array
		}
	}
}
</script>

<style lang="less">
@import "../assets/css/swiper-3.4.2.min.css";
.carousel {
	width: 100%;
	padding-bottom: 20px;
	border-bottom: 1px solid #e4e4e4;
}
.carousel-item {
	width: 211px;
	margin-right: 15px;
}
.news-img-container a, .news-img-container img {
	width: 100%;
}
.news-img-intro {
	margin-top: 15px;
	font-size: 16px;
	> a {
		color: #333333;
	}
}

</style>
