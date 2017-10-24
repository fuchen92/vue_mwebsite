<template>
	<div class="article">
		<common-head class="article-head"></common-head>
		<div class="main-content">
			<div class="content-wrapper">
				<div class="container">
					<h3 class="article-title">{{ article.title }}</h3>
					<div class="article-info">
						<p class="article-from">
							来源：{{ article.source }}
							<b></b>
						</p>
						<p class="article-time">{{ article.time }}</p>
					</div>
					<div class="article-desc">{{ article.desc }}</div>
					<div class="article-content" v-html="article.content"></div>
					<div class="article-detail-item">
						<div class="label-list">
							<template v-for="(kw, index) in article.keywords">
								<router-link class="label-item lt" :key="kw.kword" :to="kw.link">{{ kw.kword }}</router-link>
							</template>
						</div>
						<div class="article-attention">
							© 以商业目的使用环球旅讯拥有版权的内容，须经过环球旅讯书面授权。非商业目的使用，请遵循
							<a class="article-link" href="" target="_blank">CC BY-NC4.0</a>
						</div>
					</div>
					<advertise class="article-advertise" :advertise="advertise"></advertise>
				</div>
			</div>
			<interest :interestList="interestList"></interest>
		</div>
		<!-- <div class="footer-input-container"></div> -->
	</div>
</template>

<script>
import commonHeader from "@/components/common-head.vue";
import advertise from "@/components/advertise.vue";
import interest from "@/components/interest.vue";
export default {
	name: "article",
	data () {
		return {
			article: "",
			advertise: {
				id: "xcode81",
				link: "http://event.traveldaily.cn/adc2017/",
				img: require("../assets/advertise-1.jpg")
			},
			interestList: [
				{
					img: require("../assets/interest-1.jpg"),
					link: "",
					time: "2017-10-24",
					title: "Airbnb中国区负责人上任仅4个月离职　CSO接任"
				},
				{
					img: require("../assets/interest-2.jpg"),
					link: "",
					time: "2017-10-23",
					title: "从竞争到抱团　资本追捧下谁能成为短租平台独角兽？"
				},
				{
					img: require("../assets/interest-3.jpg"),
					link: "",
					time: "2017-10-17",
					title: "旅游行业公司为何连续九年未上榜全球100强品牌？"
				},
				{
					img: require("../assets/interest-4.jpg"),
					link: "",
					time: "2017-10-17",
					title: "万豪Moxy时尚酒店落户曼哈顿，直指Airbnb"
				}
			]
		}
	},
	components: {
		"common-head": commonHeader,
		"advertise": advertise,
		"interest": interest
	},
	mounted () {
		this.$http.get("/api/article").then(res => {
			this.article = res.data;
		});
	}
}
</script>

<style lang="less">
@import "../assets/variable.less";
.article {
	// position: relative;
	width: 100%;
	// height: 100%;
}
.article-head {
	position: absolute;
}
.main-content {
	// position: absolute;
	// top: 50px;
	// bottom: 50px;
	width: 100%;
	margin-top: 50px;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
}
.content-wrapper {
	margin-bottom: 35px;
}
.article-title {
	color: @post-title-color;
	margin: 20px 0;
	font-size: 20px;
}
.article-from, .article-time, .article-language {
	display: inline-block;
	vertical-align: middle;
	color: @newstime-color;
	font-size: 14px;
	line-height: 20px;
}
.article-from > b {
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 14px;
    line-height: 20px;
    margin: 0 0 0 10px;
    background-color: #7F7F7F;
}
.article-time {
    margin: 0 10px;
}
.article-desc {
    margin: 20px 0;
    padding: 20px 10px;
	border: 1px solid #D1D1D1;
	font-size: 14px;
    line-height: 25px;
    color: @newsintro-color;
}
.article-content {
	> p {
		font-size: 16px;
		color: #000;
		line-height: 30px;
		margin-bottom: 35px;
	}
	img {
		display: inline-block;
		max-width: 100%;
		width: 100% !important;
		height: auto !important;
	}
}
.label-list {
    margin: 20px 0;
    overflow: hidden;
}
.label-item {
    padding: 0 15px;
    background-color: #F7F7F8;
    margin: 10px 10px 0 0;
	font-size: 14px;
    line-height: 35px;
    color: #000;
    border-radius: 3px;
}
.article-attention {
    margin: 20px 0 0 0;
    color: @newstime-color;
    text-align: center;
    line-height: 25px;
	font-size: 12px;
	> .article-link {
		text-decoration: underline;
    	color: @basic-color;
	}
}
.article-advertise {
	margin-top: 20px;
}
</style>


