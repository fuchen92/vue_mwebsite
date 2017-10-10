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
				<p class="news-img-intro">{{ carousel.time }}</p>
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

