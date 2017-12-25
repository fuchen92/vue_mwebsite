<template>
	<div class="about">
		<common-head></common-head>
		<div class="banner">
			<div class="banner-title">
				<img class="banner-img" src="../assets/about-banner-text.png">
			</div>
			<p class="banner-text">习大大 是全球领先的旅游商业和科技媒体。我们致力于以独立的新闻态度，关注和报道影响旅游业发展的新趋势、新模式和新科技。</p>
		</div>
		<div class="slogan">
			<div class="container">
				<div class="comma-container">
					<img class="comma-a lt" src="../assets/about-a.png">
				</div>
				<div class="slogan-description">
					<p>有新闻理想的媒体，才有灵魂。</p>
					<p>因此决然摈弃</p>
					<p>潜规则和短期利益</p>
					<p>如一坚守</p>
					<p>独立的新闻态度。</p>
					<p>只有真正意义上给用户和客户带来价值，才是我们的价值。</p>
					<p>成为 “影响行业的力量” ，不是口号，我们在孜孜以求的前行路上。</p>
				</div>
				<div class="comma-container">
					<img class="comma-b rt" src="../assets/about-b.png">
				</div>
			</div>
		</div>
		<div class="product">
			<div class="container">
				<h3 class="slide-title">我们的产品</h3>
				<div class="swiper-container slide-container">
					<ul class="swiper-wrapper">
						<li class="swiper-slide" v-for="product in productList" :key="product.link">
							<div class="slide-logo-container">
								<a :href="product.link">
									<i class="slide-logo" :style="{ 'background-image' : 'url(' + product.img + ')' }"></i>
								</a>
							</div>
							<p class="slide-intro">{{ product.intro }}</p>
						</li>
					</ul>
					<div class="swiper-pagination slide-pagination">
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="comment">
			<div class="container">
				<h3 class="slide-title">业界寄语</h3>
				<div class="swiper-container slide-container">
					<ul class="swiper-wrapper">
						<li class="swiper-slide" v-for="comment in commentList" :key="comment.link">
							<div class="slide-logo-container">
								<i class="slide-logo comment-photo" :style="{ 'background-image' : 'url(' + comment.img + ')' }"></i>
							</div>
							<p class="slide-intro">{{ comment.intro }}</p>
							<p class="comment-from">
								{{ comment.name }} <strong>{{ comment.company }}</strong> {{ comment.job }}
							</p>
						</li>
					</ul>
					<div class="swiper-pagination slide-pagination">
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
						<span class="swiper-pagination-bullet"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="partner">
			<div class="container">
				<h3 class="partner-title">我们的合作伙伴</h3>
				<div class="partner-container">
					<div class="partner-list" v-for="(partner, index) in partnerObj" :key="partner[index]">
						<div class="partner-item" v-for="partnerItem in partner" :key="partnerItem">
							<img class="partner-item-logo" :src="partnerItem">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import commonHeader from "@/components/common-head.vue";
export default {
	data () {
		return {
			productList: [
				{
					link: "",
					img: require("../assets/logos/about-product_1.png"),
					intro: "中文资讯平台，通过网站、微信、邮件等多渠道传递最有价值的旅游业资讯。"
				},
				{
					link: "",
					img: require("../assets/logos/about-product_2.png"),
					intro: "英文资讯平台，为海外旅游业者提供最具价值的中国旅游业资讯信息。"
				},
				{
					link: "",
					img: require("../assets/logos/about-product_3.png"),
					intro: "每年定期举办的峰会、开放日、讲堂、竞赛、培训会等活动，满足旅游业不同行业及职能层级嘉宾对细分话题及精准交流合作的需求。"
				},
				{
					link: "",
					img: require("../assets/logos/about-product_4.png"),
					intro: "为旅游业内企业招人，业内人士求职的招聘服务平台。"
				},
				{
					link: "",
					img: require("../assets/logos/about-product_5.png"),
					intro: "帮助企业提升品牌影响力，拓展旅游业合作伙伴的整合营销服务。"
				}
			],
			commentList: [
				{
					img: require("../assets/aboutphotos/worktogether.jpg"),
					intro: "在线旅游无疑是目前国内最具挑战、竞争和故事性的领域之一。更重要的是，它还有着无限的想象空间和趣味。坚持垂直的深度和新闻的品质，聚焦旅游科技和创业孵化，相信习大大，足以产生影响行业的力量。",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../assets/aboutphotos/worktogether.jpg"),
					intro: "习大大，前瞻、深度、中肯，让创新者启发，让决策者明智。",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../assets/aboutphotos/worktogether.jpg"),
					intro: "为旅业提供真正有价值的独立意见，习大大创见未来！",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../assets/aboutphotos/worktogether.jpg"),
					intro: "作为旅游业最炙手可热的领域，在线旅游几乎每个月都会有大事发生，习大大总是能够及时为大家带来关于每件大事的最新资讯和深度报道，希望今后能够继续客观、公正地为各界人士提供新鲜、专业的行业新闻和资讯。",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../assets/aboutphotos/worktogether.jpg"),
					intro: "习大大以专业的视角、专注的精神挖掘行业最新资讯，且颇具前瞻性，在信息过剩的今天，始终走在行业前沿，成为检阅行业发展状况、研究行业发展趋势的平台，同时也是专业人士汇聚交流的信息平台。愿习大大坚持摸索、不断创新，与大众共享价值，为行业发展服务。",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../assets/aboutphotos/worktogether.jpg"),
					intro: "聚行业精英，汇行业智慧，传行业声音，展行业未来！十年风雨探索路，习大大铸就辉煌历程。未来，希望习大大能够持续发挥行业权威媒体的领航作用，并在新的征途中再谱新篇！",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../assets/aboutphotos/worktogether.jpg"),
					intro: "做企业就是做趋势，习大大让我们及时掌握有效资讯，紧跟市场发展，祝习大大越办越精彩！",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../assets/aboutphotos/worktogether.jpg"),
					intro: "一直以来，习大大是我们创业者获取国际国内旅游财经资讯的重要渠道，很多深度的分析报告启发了我们的思维；未来的竞争日益激烈，方生方死，愿习大大给大家更多更及时的能量，成为旅游行业向上的推动力量。",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				}
			],
			partnerObj: [
				[require("../assets/logos/ctrip.png"), require("../assets/logos/fliggy.png"), require("../assets/logos/xinmeida.png")],
				[require("../assets/logos/ly.png"), require("../assets/logos/tuniu.png"), require("../assets/logos/lvmama.png")],
				[require("../assets/logos/huazhu.png"), require("../assets/logos/homeinns.png"), require("../assets/logos/hnair.png")],
				[require("../assets/logos/ceair.png"), require("../assets/logos/plateno.png"), require("../assets/logos/sohoto.png")],
				[require("../assets/logos/amadeus.png"), require("../assets/logos/travelport.png"), require("../assets/logos/sabre.png")],
				[require("../assets/logos/rentalcars.png"), require("../assets/logos/oag.png"), require("../assets/logos/bestwestern.png")],
				[require("../assets/logos/baidu.png"), require("../assets/logos/tencent.png"), require("../assets/logos/google.png")],
				[require("../assets/logos/facebook.png"), require("../assets/logos/yaduo.png"), require("../assets/logos/shiji.png")],
				[require("../assets/logos/qyer.png"), require("../assets/logos/tripadvisor.png"), require("../assets/logos/zuche.png")],
				[require("../assets/logos/talkingdata.png"), require("../assets/logos/worldpay.png"), require("../assets/logos/social-touch.png")]
			]
		}
	},
	components: {
		"common-head": commonHeader
	},
	mounted () {
		var productSwitch = new Swiper(".swiper-container", {
			pagination: {
				el: ".swiper-pagination"
			}
		});
	}
}
</script>

<style lang="less" scoped>
@import "../assets/css/swiper-3.4.2.min.css";
.about {
	margin-top: 50px;
}
.banner {
    margin-top: 50px;
    overflow: hidden;
    height: 200px;
    background-image: url(../assets/about-banner-bg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 200px;
}
.banner-title {
    margin: 35px 0 15px 0;
    text-align: center;
}
.banner-img {
    display: inline-block;
    width: 200px;
}
.banner-text {
    width: 90%;
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: border-box;
	color: #DDE2EC;
	font-size: 14px;
    line-height: 25px;
    text-align: center;
}
.slogan {
    padding: 50px 0;
    background-color: #fff;
}
.comma-container {
    overflow: hidden;
}
.comma-a {
    margin-left: 30px;
    width: 40px;
}
.slogan-description {
	margin: 30px 0;
	font-size: 14px;
    line-height: 25px;
    color: #666666;
}
.comma-b {
    margin-right: 30px;
    width: 40px;
}
.product {
	background: url(../assets/product-mob-bg.jpg) no-repeat;
    background-size: cover;
}
.slide-container {
    margin-bottom: 50px;
}
.slide-title {
    color: #006395;
    text-align: center;
    font-size: 22px;
    margin-bottom: 30px;
    margin-top: 50px;
}
.slide-logo-container {
    text-align: center;
    margin-bottom: 30px;
}
.slide-logo {
    display: inline-block;
    width: 130px;
    height: 130px;
    border: 2px #006395 solid;
    border-radius: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 85%;
}
.slide-intro {
    box-sizing: border-box;
    padding: 0 15px;
	font-size: 14px;
    line-height: 25px;
    color: #666666;
    text-align: center;
}
.slide-pagination {
    position: initial;
    width: 100%;
    text-align: center;
    margin-top: 10px;
}
.swiper-pagination-bullet {
    display: inline-block;
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #A0A0A0;
    margin: 0 5px;
    opacity: 1;
}
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet-active {
    background-color: #E3E3E3 !important;
    border: 1px solid #006395 !important;
}
.comment-photo {
    background-size: 90%;
    border: 1px solid #DBDBDB;
}
.comment-from {
	font-size: 14px;
    text-align: center;
    margin-top: 20px;
    color: #333;
    letter-spacing: 1px;
}
.partner {
    padding: 50px 0;
    background-color: #FAFAFA;
}
.partner-title {
    text-align: center;
    color: #006395;
    margin-bottom: 30px;
    font-size: 22px;
}
.partner-list {
    display: flex;
    display: -webkit-flex;
    margin-bottom: 20px;
}
.partner-item {
    width: 33.33%;
}
.partner-item-logo {
    width: 100%;
}
</style>


