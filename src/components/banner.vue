<template>
	<div class="banner">
		<div class="container">
			<div class="banner-items">
				<!-- <div class="banner-item">
					<a href="">
						<img src="../assets/banner1.jpg">
					</a>
					<div class="banner-item-info">
						<p class="banner-item-title">
							<a href="">
								游客需求裂变，海外目的地营销如何创新？
							</a>
						</p>
					</div>
				</div>
				<div class="banner-item">
					<a href="">
						<img src="../assets/banner2.jpg">
					</a>
					<div class="banner-item-info">
						<p class="banner-item-title">
							<a href="">
								Airbnb讲了一个好故事　那爱彼迎呢？
							</a>
						</p>
					</div>
				</div>
				<div class="banner-item">
					<a href="">
						<img src="../assets/banner3.jpg">
					</a>
					<div class="banner-item-info">
						<p class="banner-item-title">
							<a href="">
								电视广告在当今的旅游营销中如何发挥作用？
							</a>
						</p>
					</div>
				</div> -->
				<div class="banner-item" v-for="banner in bannerList" :key="banner.text">
					<a :href="banner.link">
						<img :src="banner.img">
					</a>
					<div class="banner-item-info">
						<p class="banner-item-title">
							<a :href="banner.link">{{ banner.title }}</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "banner",
	data () {
		return {
			bannerList: [
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
	}
}
</script>

<style lang="less">
@import "../assets/variable.less";
.banner-items {
	margin-top: 20px;
}
.banner-item {
    position: relative;
	margin-bottom: 20px;
	> a {
		display: block;
		width: 100%;
	}
	& img {
		width: 100%;
	}
}
.banner-item-info {
    position: absolute;
    bottom: 0;
	left: 0;
	width: 100%;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.5);
}
.banner-item-title {
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
</style>


