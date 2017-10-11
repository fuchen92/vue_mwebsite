<template>
	<div class="carousel swiper-container">
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
	},
	mounted () {
		var carousel1 = new Swiper(".carousel-one", {
			spaceBetween: 20,
			slidesPerView: "1.6",
			freeMode: true
	//      onSlideChangeEnd: function(swiper){
	//          var currentIndex = swiper.activeIndex;
	//          var carouselItem = $(".carousel-one .carousel-item")
	//          // // console.log(currentIndex) //切换结束时，告诉我现在是第几个slide
	//          if (currentIndex >= carouselItem.length - 2 ) {
	//              console.log("到底了")
	//              // 到底了，加载数据添加进容器
	//
	//          }
	//      }
		});
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
