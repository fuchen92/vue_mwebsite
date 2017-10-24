<template>
	<div class="interest">
		<div class="container">
			<h3 class="interest-title">您还可能感兴趣的文章</h3>
			<div class="interest-list" v-for="interest in interestList" :key="interest.title">
				<div class="interest-img-container lt">
					<img :src="interest.img">
				</div>
				<div class="interest-content rt">
					<h4 class="interest-article">
						<router-link :to="interest.link">{{ interest.title }}</router-link>
					</h4>
					<div class="keywords-container">
						<p class="interest-time">{{ interest.time }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "interest",
	props: ["interestList"]
}
</script>

<style lang="less">
@import "../assets/variable.less";
.interest-container {
    overflow: hidden;
    padding: 50px 0;
}
.interest-title {
	font-size: 16px;
    margin-bottom: 30px;
    color: @post-title-color;
}
.interest-list {
    overflow: hidden;
    margin-bottom: 30px;
    height: 90px;
}
.interest-img-container {
	width: 130px;
	> img {
		width: 100%;
	}
}
.interest-content {
    width: calc(~"100% - 145px");
    height: 100%;
    position: relative;
}
.interest-article, .keywords-container {
    position: absolute;
    left: 0;
}
.interest-article {
    top: 0;
    font-weight: normal;
	font-size: 16px;
	> a {
		color: @post-title-color;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
}
.keywords-container {
    bottom: 0;
}
.keywords, .interest-time {
    display: inline-block;
    vertical-align: middle;
    font-size: 13px;
}
.interest-time {
    padding-left: 25px;
	background: url(../assets/time.png) left center no-repeat;
	background-size: contain;
    color: @newstime-color;
}
</style>


