<template>
	<div class="footer">
		<div class="container">
			<div class="footer-logo-container">
				<img class="footer-logo" src="../assets/footer-logo.png">
			</div>
			<div class="footer-info">
				<div class="footer-links">
					<!-- <a href="#/about" class="footer-link">
						关于我们
						<b></b>
					</a> -->
					<router-link to="/about" class="footer-link">
						关于我们
						<b></b>
					</router-link>
					<!-- <a href="#/join" class="footer-link">
						加入我们
						<b></b>
					</a> -->
					<router-link to="/join" class="footer-link">
						加入我们
						<b></b>
					</router-link>
					<!-- <a href="#/contact" class="footer-link">
						联系我们
					</a> -->
					<router-link to="/contact" class="footer-link">
						联系我们
					</router-link>
				</div>
				<p>©2006-2017 环球旅讯版权所有</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "appFooter"
}
</script>

<style lang="less">
.footer {
    padding: 50px 0;
    background-color: #414141;
    text-align: center;
}
.footer-logo {
    display: inline-block;
    width: 110px;
}
.footer-info {
	margin: 30px 0 0;
	> p {
		color: #8B8B8B;
		margin-top: 5px;
		font-size: 14px;
	}
}
.footer-link {
    color: #C5C5C5;
	padding: 5px 0;
	font-size: 14px;
	> b {
		display: inline-block;
		width: 1px;
		height: 14px;
		background-color: #C5C5C5;
		margin: 0 5px 0 10px;
		vertical-align: middle;
	}
}

</style>


