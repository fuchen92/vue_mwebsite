<template>
	<div class="subscribe">
		<div class="container">
			<div class="subscribe-title-container">
				<span class="subscribe-sign">
					<img src="../assets/subscribe.png">
				</span>
				<span class="subscribe-title">订阅邮件</span>
			</div>
			<p class="subscribe-desc">30,000+ 旅游业精英每周必读的行业要闻精粹，每周二发至您的邮箱</p>
			<div class="subscribe-input-container">
				<input type="text" class="subscribe-input" placeholder="请输入您的邮箱地址" v-model="email">
				<div class="tips">您的邮箱格式不正确，请检查</div>
			</div>
			<div class="subscribe-btn" id="subscribeBtn" @click="subscribeNews">订阅邮件</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "subscribe",
	data () {
		return {
			email: ""
		}
	},
	methods: {
		subscribeNews () {
			console.log("请输入邮箱地址订阅啦。。。。")
		}
	}
}
</script>

<style lang="less">
.subscribe {
    padding: 50px 0;
    background-color: #FAFAFA;
    text-align: center;
}
.subscribe-sign, .subscribe-title {
    display: inline-block;
    vertical-align: middle;
}
.subscribe-sign {
	width: 40px;
	> img {
		width: 100%;
	}
}
.subscribe-title {
	font-size: 20px;
	color: #666666;
}
.subscribe-desc {
    margin: 30px 0;
    font-size: 15px;
	line-height: 25px;
	color: #666666;
}
.subscribe-input {
	box-sizing: border-box;
	outline: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
    border: none;
	border-bottom: 1px solid #A3A3A3;
	font-size: 14px;
    padding: 5px 15px;
    background-color: #FAFAFA;
    text-align: center;
}
.tips {
    margin-top: 10px;
    opacity: 0;
}
.subscribe-btn {
    width: 155px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #006395;
    color: #006395;
    margin: 15px auto 0;
    font-size: 15px;
	cursor: pointer;
	&:active {
		background-color: #006395;
    	color: #fff;
	}
}
</style>

