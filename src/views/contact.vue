<template>
	<div class="contact">
		<common-head></common-head>
		<div class="banner">
			<div class="banner-title">
				<img class="banner-img" src="../assets/contact-banner-text.png">
			</div>
			<p class="banner-text">报道、合作、招人、应聘、反馈，您都可以在这里找到我们。</p>
		</div>
		<div class="provide-service">
			<div class="container">
				<div class="provide-list">
					<h3 class="provide-title">投稿爆料/寻求报道</h3>
					<p class="provide-description">希望在环球旅讯分享您的真知灼见？或希望我们报道您的公司或产品？请联系</p>
					<p class="tel-email">（86）20 9999 9999 或 <a class="email-link" href="" target="_blank">fuchen@qq.com</a></p>
				</div>
				<div class="provide-list">
					<h3 class="provide-title">投放广告/赞助活动</h3>
					<p class="provide-description">希望借助环球旅讯提升品牌影响力，挖掘更多合作伙伴？请联系</p>
					<p class="tel-email">（86）20 9999 9999 或 <a class="email-link" href="">fuchen@qq.com</a>。</p>
				</div>
				<div class="provide-list">
					<h3 class="provide-title">媒体合作</h3>
					<p class="provide-description">希望成为环球旅讯或旗下活动的媒体合作伙伴？请联系</p>
					<p class="tel-email">（86）20 9999 9999 或 <a class="email-link" href="">fuchen@qq.com</a>。</p>
				</div>
				<div class="provide-list">
					<h3 class="provide-title">微招聘服务</h3>
					<p class="provide-description">希望在环球旅讯微招聘中发布招聘信息？或希望申请微招聘某项职位？请联系</p>
					<p class="tel-email">（86）20 9999 9999 或 <a class="email-link" href="">fuchen@qq.com</a>。</p>
				</div>
				<div class="provide-list">
					<h3 class="provide-title">加入环球旅讯</h3>
					<p class="provide-description">希望成为环球旅讯团队一员？请联系</p>
					<p class="tel-email">（86）20 9999 9999 或 <a class="email-link" href="">fuchen@qq.com</a>。</p>
				</div>
				<div class="provide-list">
					<h3 class="provide-title">吐槽产品/反馈意见</h3>
					<p class="provide-description">使用环球旅讯产品时遇到问题？对产品有更好的完善意见？请联系</p>
					<p class="tel-email">（86）20 9999 9999 转 802 或 <a class="email-link" href="">fuchen@qq.com</a>。</p>
				</div>
			</div>
		</div>
		<div class="address-wrapper">
			<div class="container">
				<h3 class="address-title">我们在这里工作</h3>
				<div class="divide-line"></div>
				<p class="address-content">
					北京 天安门广场 人民大会堂 北京 天安门广场 人民大会堂北京
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import commonHeader from "@/components/common-head.vue";
export default {
	name: "contact",
	components: {
		"common-head": commonHeader
	}
}
</script>

<style lang="less" scoped>
.banner {
    margin-top: 50px;
    overflow: hidden;
    height: 200px;
    background: url(../assets/contact-banner-bg.jpg) no-repeat;
    background-size: 100% 200px;
}
.banner-title {
    margin: 35px 0 15px 0;
    text-align: center;
}
.banner-img {
    display: inline-block;
    width: 150px;
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
.provide-list {
    padding: 30px 0;
    text-align: center;
    border-bottom: 1px solid #E4E4E4;
}
.provide-list:last-child {
    border-bottom: 0;
}
.provide-title {
	font-size: 16px;
    margin-bottom: 15px;
    color: #252525;
}
.provide-description {
	font-size: 14px;
    line-height: 25px;
    margin-bottom: 10px;
    color: #666666;
}
.tel-email {
	font-size: 14px;
    color: #666666;
}
.email-link {
    color: #006395;
}
.address-wrapper {
    padding: 50px 0;
    background-color: #006395;
	color: #fff;
	> .container {
   		box-sizing: border-box;
		padding: 0 20px;
	}
}
.address-title {
    margin-bottom: 15px;
    font-size: 22px;
}
.divide-line {
    width: 75px;
    height: 2px;
    background-color: #fff;
}
.address-content {
    margin-top: 20px;
	position: relative;
	font-size: 14px;
    line-height: 25px;
    padding-left: 35px;
    background: url(../assets/addr.png) left top 8px no-repeat;
    background-size: 22px;
}
</style>

